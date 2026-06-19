from django.urls import path
from .views import SOSRequestAPIView

urlpatterns = [
    path('', SOSRequestAPIView.as_view())
    ]