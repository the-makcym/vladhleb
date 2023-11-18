from django.urls import path, include
from .views import *


urlpatterns = [
    path('register/', RegisterApiView.as_view()),
    path('login/', LoginApiView.as_view()),
    path('bakery/', UserApiView.as_view()),
    path('logout/', LogoutApiView.as_view()),
    path('address/', AddressApiView.as_view())
]