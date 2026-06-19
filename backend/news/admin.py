from django.contrib import admin

# Register your models here.


from django.contrib import admin
from .models import News,BrakingNews

admin.site.register(News)
admin.site.register(BrakingNews)