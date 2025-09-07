from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken

User = get_user_model()

class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]  # Allow any user to login
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user:
                _, token = AuthToken.objects.create(user)  # Create a Knox token for the user
                return Response(
                    {
                        'user': self.serializer_class(user).data,
                        'token': token
                    }
                )
            else:
                return Response({'error': 'Invalid credentials'}, status=400)
        else:
            return Response(serializer.errors, status=400)

class SignupViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]  # Allow any user to register
    queryset = User.objects.all()
    serializer_class = SignupSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data) # Validate incoming data
        if serializer.is_valid():
            serializer.save() #Triggers the create method in SignupSerializer
            print("Serializer data after save:", serializer.data)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    # optional: make sure users only access their own profile
    def get_queryset(self):
        return UserProfile.objects.filter(user=self.request.user)
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)