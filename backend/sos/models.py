from django.db import models

class SOSRequest(models.Model):
    URGENCY_CHOICES = [
        ('Standard', 'Standard'),
        ('Urgent', 'Urgent'),
        ('Life Threat', 'Life Threat'),
    ]

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)

    emergency_type = models.CharField(max_length=100)
    location = models.TextField()
    urgency_level = models.CharField(
        max_length=20,
        choices=URGENCY_CHOICES,
        default='Standard'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.emergency_type}"