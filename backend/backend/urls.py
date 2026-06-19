from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import TokenRefreshView
from accounts.views import MyTokenObtainPairView

urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),

    # Apps
    path('api/news/', include('news.urls')),
    path('api/accounts/', include('accounts.urls')),
    path('api/shelters/', include('shelters.urls')),
    path('api/volunteers/', include('volunteer.urls')),
    path('api/sos-requests/', include('sos.urls')),
    # JWT Authentication
    path(
        'api/token/',
        MyTokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),

    path(
        'api/token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )