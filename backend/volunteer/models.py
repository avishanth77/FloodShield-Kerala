from django.db import models

class Volunteer(models.Model):
    DISTRICT_CHOICES = [
     ('alappuzha', 'Alappuzha'),
    ('ernakulam', 'Ernakulam'),
    ('idukki', 'Idukki'),
    ('kannur', 'Kannur'),
    ('kasaragod', 'Kasaragod'),
    ('kollam', 'Kollam'),
    ('kottayam', 'Kottayam'),
    ('kozhikode', 'Kozhikode'),
    ('malappuram', 'Malappuram'),
    ('palakkad', 'Palakkad'),
    ('pathanamthitta', 'Pathanamthitta'),
    ('thiruvananthapuram', 'Thiruvananthapuram'),
    ('thrissur', 'Thrissur'),
    ('wayanad', 'Wayanad'),
    ]

    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    district = models.CharField(max_length=50, choices=DISTRICT_CHOICES)
    skills = models.JSONField(default=list) # Stores the array of selected skills
    availability = models.TextField(blank=True, null=True)
    registered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name