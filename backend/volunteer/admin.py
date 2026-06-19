# volunteers/admin.py
from django.contrib import admin
from .models import Volunteer

@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    # Columns to display in the list view
    list_display = ('full_name', 'phone', 'district', 'registered_at')
    
    # Adds a filter sidebar on the right
    list_filter = ('district', 'registered_at')
    
    # Adds a search bar at the top
    search_fields = ('full_name', 'phone')
    
    # Makes the list ordered by newest first
    ordering = ('-registered_at',)
    
    # Makes the JSON field easier to read (read-only for the admin)
    readonly_fields = ('registered_at',)