from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model 
User = get_user_model() #Returns Django's user model, which was extended in models.py

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None)  # Remove password from the response
        return ret

class SignupSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model = User #Whatever variable initialized with get_user_model()
        fields = ('id', 'email', 'password', 'confirm_password') #Fields to be serialized
        extra_kwargs = {'password': {'write_only': True}} #Don't want to expose password in API

    def validate(self, attrs):
        password = attrs.get('password')
        confirm_password = attrs.get('confirm_password')
        if password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create_user(**validated_data) #Creates a user with the validated data
        print("User created:", user)  # Debugging line to check created user
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'  # or explicitly list fields