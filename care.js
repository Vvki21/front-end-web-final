async function getBreedInfo() {
    const url = 'https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Cretan%20Hound';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '537980eefcmsh3e8fb849b46a1c8p1bd9b3jsnd7622b542196',
            'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const breedInfo = {
            img: result[0].img,
            weight: result[0].meta.weight
        }

        updateInHTML(breedInfo.img, breedInfo.weight);
    } catch (error) {
        console.error(error);
    }
}

function updateInHTML(img, weight) {
    document.getElementById('breed_image').src = img;

    var breedDataTable = document.getElementById('breed_data_table');
    breedDataTable.innerHTML = `
        <tr>
            <td>Weight:</td>
            <td>${weight.metric} ${weight.unit}</td>
        </tr>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    getBreedInfo();
});
