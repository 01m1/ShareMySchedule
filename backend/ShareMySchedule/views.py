import os
import requests
import datetime
import pickle
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from requests.structures import CaseInsensitiveDict
from google_auth_oauthlib.flow import InstalledAppFlow

import json

# Load Google Calendar Data
calendar_data= []
SCOPES = ['https://www.googleapis.com/auth/calendar']
flow = InstalledAppFlow.from_client_secrets_file("backend\\ShareMySchedule\\credentials.json", scopes=SCOPES)

credentials = flow.run_local_server(port=0)
pickle.dump(credentials, open("backend\\token.pkl", "wb"))
credentials = pickle.load(open("token.pkl", "rb"))

service = build("calendar", "v3", credentials=credentials)
