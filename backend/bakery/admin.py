from django.contrib import admin

from . models import User, Address


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(Address)
class UserAdmin(admin.ModelAdmin):
    pass
