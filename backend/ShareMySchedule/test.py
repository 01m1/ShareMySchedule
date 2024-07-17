import os
import requests
import datetime

from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from requests.structures import CaseInsensitiveDict
from google_auth_oauthlib.flow import InstalledAppFlow

import json

calendar_data= []
SCOPES = ['https://www.googleapis.com/auth/calendar']

with open('credentials.json', 'r') as f:
    print(f)
flow = InstalledAppFlow.from_client_secrets_file("credentials.json", scopes=SCOPES)
flow.run_console()
