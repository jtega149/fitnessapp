from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
# Register your models here.

# Inline admin to edit the profile within the user page
class UserProfileInline(admin.StackedInline):  # TabularInline is also fine
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'Profile'

# Custom User admin
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'is_staff', 'is_active')
    search_fields = ('email',)
    ordering = ('email',)
    
    # Add profile inline
    inlines = [UserProfileInline]
    
    # Remove username from forms
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('birthday',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )

# Register models
admin.site.register(CustomUser, CustomUserAdmin)

# Optional: register profiles separately if you want a list view
admin.site.register(UserProfile)