from django.contrib import admin
from .models import SOSRequest


@admin.register(SOSRequest)
class SOSRequestAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'emergency_type',
        'urgency_level',
        'created_at',
    )

    list_filter = (
        'urgency_level',
        'created_at',
    )

    search_fields = (
        'emergency_type',
        'location',
    )