from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    username = models.CharField(max_length =255)
    address = models.OneToOneField('Address', on_delete=models.CASCADE, verbose_name='address of the bakery', blank=True, null=True, unique=True)
    password = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


class Address(models.Model):
    name = models.CharField(max_length=255, unique=True)
    is_free = models.BooleanField(default=True)

    objects = models.Manager()

    def __str__(self):
        return self.name

