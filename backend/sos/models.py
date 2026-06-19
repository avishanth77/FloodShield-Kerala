from django.db import models

class SOSRequest(models.Model):
    emergency_type = models.CharField(max_length=100)
    location = models.TextField()
    urgency_level = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.emergency_type} - {self.created_at}"