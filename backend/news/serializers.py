
from rest_framework import serializers
from .models import News,BrakingNews

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"



class BrakingNewsNewsSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = BrakingNews
        fields = "__all__"