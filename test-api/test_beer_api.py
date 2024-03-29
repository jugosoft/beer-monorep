import json
import pytest

def test_beers_get(api_client):
    resp = api_client.get(path='/beers/2')
    assert resp.status_code == 200
    assert resp.ok == True
    resp_json = json.loads(resp.text)
    assert resp_json['id'] == 2


@pytest.mark.parametrize('beerID', [-1, 0])
def test_beers_filtering(api_client, beerID):
    resp = api_client.get(
       path='/beers/' + str(beerID),
       params={'beerID': beerID}
    )
    assert hasattr(resp, 'text')
    assert resp.text != ''
    resp_json = json.loads(resp)
    assert resp_json['beerID'] == []


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


def test_beers_put(api_client):
    resp = api_client.put(
        path='/beers',
        data={
            'id': 15,
            'name': 'X11111111111111111111111111111111111111123123213213213213XX',
            'alcohol': 10,
            'bitterness': 15,
        })
    resp_json = json.loads(resp.text)
    assert resp_json['name'] == 'XXX'
    assert resp_json['alcohol'] == '10'
    assert resp_json['bitterness'] == '15'
