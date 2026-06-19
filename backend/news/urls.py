from django.urls import path
from .views import NewsListView,BreakingNewsView

urlpatterns = [
    path("", NewsListView.as_view()),
    path("breaking-news/", BreakingNewsView.as_view()),
]