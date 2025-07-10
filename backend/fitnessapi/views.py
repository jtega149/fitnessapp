from rest_framework import viewsets
from .models import FoodItem, UserFoodLog
from .serializers import FoodItemSerializer, UserFoodLogSerializer

class FoodItemViewSet(viewsets.ModelViewSet):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer

class UserFoodLogViewSet(viewsets.ModelViewSet):
    queryset = UserFoodLog.objects.all()
    serializer_class = UserFoodLogSerializer