from google.oauth2 import service_account
import googleapiclient.discovery

json_path = 'C:/Users/gmayer/Downloads/tcc-cycles-g/tcc-c-g/src/cycles-426812-782a21c1ae42.json'

creds = service_account.Credentials.from_service_account_file(
    json_path,
    scopes=['https://www.googleapis.com/auth/spreadsheets']
)

# ID d
spreadsheet_id = '114945048439271565728' 
range_name = 'cycles!A1:D12'  


service = googleapiclient.discovery.build('sheets', 'v4', credentials=creds)

sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=spreadsheet_id, range=range_name).execute()
values = result.get('values', [])

if not values:
    print('Nenhum dado encontrado.')
else:
    print('Dados da planilha:')
    for row in values:
        print(row)
