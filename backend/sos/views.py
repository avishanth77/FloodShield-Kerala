from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .models import SOSRequest
from .serializers import SOSRequestSerializer


class SOSRequestAPIView(APIView):
    permission_classes = [AllowAny]

    # GET all SOS requests
    def get(self, request):
        sos_requests = SOSRequest.objects.all().order_by('-id')
        serializer = SOSRequestSerializer(sos_requests, many=True)
        return Response(serializer.data)

    # CREATE SOS request
    def post(self, request):
        serializer = SOSRequestSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )