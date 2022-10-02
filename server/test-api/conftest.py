import pytest 
import requests 

class APIClient:
    def __init__(self, base_address):
        self.base_address = base_address

    def post(self, path = '/', params = None, data = None, headers= None):
        url = self.base_address + path
        return requests.post(url = url, params = params, data = data, headers= headers)

    def get(self, path = '/', params = None):
        return requests.get(url = self.base_address + path, params = params)

    def put(self, path = '/', params = None, data = None, headers= None):
        url = self.base_address + path
        return requests.put(url = url, params = params, data = data, headers= headers)


@pytest.fixture()
def api_client(request):
    url = 'http://localhost:3001'
    client = APIClient(url)
    return client
