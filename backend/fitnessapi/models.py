from django.db import models
from django.contrib.auth.models import User

class FoodItem(models.Model):
    name = models.CharField(max_length=200)
    calories = models.IntegerField()
    protein = models.DecimalField(max_digits=5, decimal_places=1)
    carbs = models.DecimalField(max_digits=5, decimal_places=1)
    fat = models.DecimalField(max_digits=5, decimal_places=1)
    
    def __str__(self):
        return self.name

class UserFoodLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    date = models.DateField()
    meal_type = models.CharField(max_length=50)  # Breakfast, Lunch, etc.
    serving_size = models.DecimalField(max_digits=5, decimal_places=2)
    
    def __str__(self):
        return f"{self.user.username} - {self.food_item.name}"