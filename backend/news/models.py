from django.db import models

# Create your models here.


class News(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="news/")
    news_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

from django.db import models

class BrakingNews(models.Model):

    CATEGORY_CHOICES = [
        ("Red Alert", "Red Alert"),
        ("Weather Alert", "Weather Alert"),
        ("Breaking News", "Breaking News"),
    ]

    title = models.CharField(max_length=300)

    description = models.TextField()

    image = models.ImageField(
        upload_to="news/"
    )

    news_url = models.URLField()

    category = models.CharField(
        max_length=100,
        choices=CATEGORY_CHOICES,
        default="Breaking News"
    )

    location = models.CharField(
        max_length=100
    )

    is_breaking = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title