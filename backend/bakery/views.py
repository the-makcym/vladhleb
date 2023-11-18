from django.shortcuts import render
from .models import User
from .serializer import UserSerialize
import jwt
import datetime
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView, CreateAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model, login, authenticate
from .serializer import UserSerialize, UserLoginSerialize
from rest_framework import permissions, status


class RegisterApiView(CreateAPIView):
    model = get_user_model()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerialize


class LoginApiView(CreateAPIView):
    serializer_class = UserLoginSerialize

    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('No such user')
        if not user.check_password(password):
            raise AuthenticationFailed('Invalid password')

        payload = {
            "id": user.id,
            "email": user.email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)

        response.data = {
            'jwt token': token
        }

        return response


class UserApiView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("User is unauthenticated")

        try:
            payload = jwt.decode(token, 'secret', algorithms='HS256')

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("User is unauthenticated")

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerialize(user)

        return Response(serializer.data)


class LogoutApiView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'successful logout'
        }

        return response
