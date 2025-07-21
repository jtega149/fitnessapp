from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model 
User = get_user_model() #Returns Django's user model, which was extended in models.py

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User #Whatever variable initialized with get_user_model()
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}} #Don't want to expose password in API

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data) #Creates a user with the validated data
        print("User created:", user)  # Debugging line to check created user
        return user