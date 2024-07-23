import os.path
import datetime as dt

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SCOPES = ["https://www.googleapis.com/auth/calendar"]

def get_google_calendar_data():
    creds = None

    # If token exists then load it from the client_secret file
    if os.path.exists('ShareMySchedule\\token.json'):
        creds = Credentials.from_authorized_user_file('ShareMySchedule\\token.json')

    # If credentials don't exist or are invalid
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file("ShareMySchedule\\client_secret.json", SCOPES)
            creds = flow.run_local_server(port=0)

        with open("ShareMySchedule\\token.json", "w") as token:
            token.write(creds.to_json())

    try:
        service = build("calendar", "v3", credentials=creds)
        print("Loading events")

        now = dt.datetime.now().isoformat() + "Z"
        
        # Retrieve events from user's calendar
        event_result = service.events().list(calendarId="primary", timeMin=now, maxResults=10, singleEvents=True, orderBy="startTime").execute()
        events = event_result.get("items", [])

        if not events:
            return "No upcoming events found"
        
        # Print events 
        for event in events:
            start = event["start"].get("dateTime", event["start"].get("date"))
            return (start, event["summary"])
    except HttpError as error:
        print("An error occured:", error)
