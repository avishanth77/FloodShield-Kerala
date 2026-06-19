from rest_framework import generics
from .models import Volunteer
from .serializers import VolunteerSerializer

class VolunteerListCreateView(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all().order_by("-id")
    serializer_class = VolunteerSerializer