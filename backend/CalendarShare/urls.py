from django.urls import path
from .views import google_calendar_view

urlpatterns = [
    path('api/google-calendar', google_calendar_view, name='google-calendar'),
    path('', include('CaelndarShare.urls'))
]
