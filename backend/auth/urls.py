from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('users.urls')),
    path('admin/', admin.site.urls),
    path('api/auth/', include('knox.urls')),  # Include Knox URLs for token authentication
    
]
