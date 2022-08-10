import json

def test_beers_get(api_client):
    resp = api_client.get(path='/beers/2')
    assert resp.status_code == 200
    assert resp.ok == True
    resp_json = json.loads(resp.text)
    assert resp_json['id'] == 2


def test_beers_post(api_client):
    resp = api_client.post(
        path='/beers/',
        data={
            'name': 'XXX',
            'alcohol': 2,
            'bitterness': 2
        })
    assert resp.status_code == 201
    assert resp.ok == True
    resp_json = json.loads(resp.text)
    assert resp_json['name'] == 'XXX'
    assert resp_json['alcohol'] == '2'
    assert resp_json['bitterness'] == '2'
