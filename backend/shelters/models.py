from django.db import models

class Shelter(models.Model):

    STATUS_CHOICES = [
        ("Available", "Available"),
        ("Filling Fast", "Filling Fast"),
        ("Full", "Full"),
        ("Needs Supplies", "Needs Supplies"),
    ]

    name = models.CharField(max_length=200)
    district = models.CharField(max_length=100)
    address = models.TextField()

    capacity = models.IntegerField()
    occupancy = models.IntegerField(default=0)

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="Available"
    )
    
    website_url = models.URLField(blank=True, null=True)
    location_url = models.URLField(blank=True, null=True)


    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name