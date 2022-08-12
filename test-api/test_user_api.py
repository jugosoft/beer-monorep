import json
import pytest

@pytest.mark.parametrize(('input_email', 'output_email'), [('avadakedabra@gmail.ru', 'avadakedabra@gmail.ru'), ('kotik@gmail.com', 'kotik@gmail.com')])
def test_users_post(api_client, input_email, output_email):
    resp = api_client.post(
        path='/users',
        data={
            'email': input_email,
        })
    assert resp.ok == True
    resp_json = json.loads(resp.text)
    assert resp_json['email'] == output_email

