from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('signup', SignupViewset, basename='signup')
router.register('login', LoginViewset, basename='login')
router.register('userprofile', UserProfileViewSet, basename='userprofile')

urlpatterns = router.urls