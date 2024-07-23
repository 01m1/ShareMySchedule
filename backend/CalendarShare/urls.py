from django.urls import path
from . import views

urlpatterns = [
    path('', views.google_calendar_view , name='google_calendar'),
]
