from rest_framework.generics import ListAPIView
from .models import Shelter
from .serializers import ShelterSerializer

class ShelterListView(ListAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer