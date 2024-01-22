document.getElementById('fetchButton').addEventListener('click', fetchStarWarsCharacter);

function fetchStarWarsCharacter() {
    // pingaj url
    fetch('https://swapi.dev/api/people/1')
    // fakjame response
        .then(response => response.json())
        // logiki
        .then(data => {
            document.getElementById('characterName').innerText = data.name;
            document.getElementById('height').innerText = data.height;
            document.getElementById('weight').innerText = data.mass;
            document.getElementById('eyeColor').innerText = data.eye_color;
            document.getElementById('hairColor').innerText = data.hair_color;
        })
        // fakjame eror ako uopste se desi
        .catch(error => console.error('Failed fetch:', error));
}