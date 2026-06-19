from django.urls import path

from .views import VolunteerListCreateView

urlpatterns = [
    path("", VolunteerListCreateView.as_view()),
    path("register/", VolunteerListCreateView.as_view()),
]