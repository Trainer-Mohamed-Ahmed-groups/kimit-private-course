fetch('https://hg-static.hyperguest.com/hotels.json', {
    method: 'GET',
    headers: {
        'Accept-Encoding': 'gzip, deflate',
        'Authorization': 'Bearer a3b65783b5a84f3e814f333555ad5b5f'
    },
    body: JSON.stringify({ username: 'mohamed', password: '1234' })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
