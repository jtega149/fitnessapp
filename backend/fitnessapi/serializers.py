from rest_framework import serializers
from .models import FoodItem, UserFoodLog

class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = '__all__'

class UserFoodLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFoodLog
        fields = '__all__'