from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .google_calendar import get_google_calendar_data

@api_view(['GET'])
def google_calendar_view(request):
    data = get_google_calendar_data()
    return Response(data)