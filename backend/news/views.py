from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import News
from .serializers import NewsSerializer
from .models import BrakingNews
from .serializers import BrakingNewsNewsSerializer

class NewsListView(ListAPIView):
    queryset = News.objects.all().order_by("-created_at")
    serializer_class = NewsSerializer



class BreakingNewsView(
    ListAPIView
):

    serializer_class = BrakingNewsNewsSerializer

    def get_queryset(self):

        return (
            BrakingNews.objects
            .filter(is_breaking=True)
            .order_by("-created_at")[:1]
        )