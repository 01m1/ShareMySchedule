from django.http import JsonResponse
import google.auth.transport.requests
import google.oauth2.credentials
import googleapiclient.discovery

def fetch_calendar_data(request):
    token = request.headers.get('Authorization') # Get the auth token to display calendar
    if not token:
        return JsonResponse({'error': 'Token not provided'}, status=400) # Token fails to send

    credentials = google.oauth2.credentials.Credentials(token)
    service = googleapiclient.discovery.build('calendar', 'v3', credentials=credentials) # Fetch calendar

    calendar_list = service.calendarList().list().execute()
    calendars = calendar_list.get('items', [])

    return JsonResponse(calendars)