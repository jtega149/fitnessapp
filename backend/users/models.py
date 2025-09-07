from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is a required field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200, unique=True)
    birthday = models.DateField(null=True, blank=True)
    username = models.CharField(max_length=200, null=True, blank=True)

    objects = CustomUserManager() #Used to manage user creation

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE) # one-to-one relationship with CustomUser
    caloric_goal = models.IntegerField(default=2000)
    protein_goal = models.IntegerField(default=100)
    carbs_goal = models.IntegerField(default=250)
    fat_goal = models.IntegerField(default=70)
    progress_notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.user.email}'s Profile"