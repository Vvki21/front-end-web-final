function searchDog() {
  var name = document.getElementById('dogName').value;
  var apiKey = '//XOHNJMFlbbHZ9oMELzfw==W9qM8DLNb2vQs3Ej';

  fetch('https://api.api-ninjas.com/v1/dogs?name=' + name, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            displayResult(result);
        })
        .catch(error => {
            console.error('Error:', error);
            displayResult([]);
        });
}

function displayResult(result) {
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    if (result && result.length > 0) {
        var dogInfo = result[0];

        // Display the dog's image
        var dogImage = document.createElement('img');
        dogImage.src = dogInfo.image_link;
        dogImage.alt = dogInfo.name;
        resultContainer.appendChild(dogImage);

        // Display other information
        resultContainer.innerHTML += '<p>Name: ' + dogInfo.name + '</p>' +
            '<p>Max Height: ' + dogInfo.max_height_male + ' cm</p>' +
            '<p>Max Weight: ' + dogInfo.max_weight_male + ' kg</p>';
    } else {
        resultContainer.innerText = 'no found';
    }
}