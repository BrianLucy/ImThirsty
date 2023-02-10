
var APIKey = 'AIzaSyBvIvqYLhRUxpdWtBQWG51NuOXUsXzlfhE';
var searchBtn = document.getElementById('search-btn');

function getBrewerybyState() {
    var stateInput = document.getElementById('search-input').value;

    fetch(`https://api.openbrewerydb.org/breweries?by_state=${stateInput}&per_page=50`, {
        method: 'GET',
        credentials: 'same-origin',
        per_page: 50,
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            mapApi(data);
        })
};

function mapApi(data) {
    console.log(data);

    $("#googleapi").html(`<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvIvqYLhRUxpdWtBQWG51NuOXUsXzlfhE&q=${data[0].state}">`)

}

searchBtn.addEventListener('click', getBrewerybyState);


