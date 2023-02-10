
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
            breweryCall(data);
        })

    //   .then(function (data) {
    //         console.log(data + "line 32");
    //         for (var i = 0; i < 6; i++) {
    //         var name = brewery[i].name;
    //         var street = data[i].street;
    //         var city = data[i].city;
    //         var state = data[i].state;
    //         var postal_code = data[i].postal_code;
    //         var phone = data[i].phone;
    //         var website_url = data[i].website_url;
    //         var latitude = data[i].latitude;
    //         var longitude = data[i].longitude;
    //         var breweryCard = $('#brewery-list-rtn').html(`<div class="card" style="width: 18rem;">`);
    //         breweryCard.append($('<h5 class="card-title">').text(name));
    //         breweryCard.append($('<p class="card-text">').text(street));
    //         breweryCard.append($('<p class="card-text">').text(city));
    //         breweryCard.append($('<p class="card-text">').text(state));
    //         breweryCard.append($('<p class="card-text">').text(postal_code));
    //         breweryCard.append($('<p class="card-text">').text(phone));
    //         breweryCard.append($('<p class="card-text">').text(website_url));
            

    //         var location = latitude + ',' + longitude;
           
    //         }

    //     })
        
};

function mapApi(data) {
    console.log(data);

    $("#googleapi").html(`<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvIvqYLhRUxpdWtBQWG51NuOXUsXzlfhE&q=${data[0].state}">`)

}
function breweryCall(data) {
    console.log(data + "line 98" + data[3].name);
    for (var i = 0; i < 6; i++) {
                var name = data[i].name;
                var street = data[i].street;
                var city = data[i].city;
                var state = data[i].state;
                var postal_code = data[i].postal_code;
                var phone = data[i].phone;
                var website_url = data[i].website_url;
                var latitude = data[i].latitude;
                var longitude = data[i].longitude;
                var breweryCard = $('#brewery-list-rtn').append($('<div>').addClass('card').attr('style', 'background-color: #34A8DA', 'margin: 10px','width: 18rem;'))
                breweryCard.append($('<h3 id="card-title">').text(name));
                breweryCard.append($('<p class="card-text">').text(street));
                breweryCard.append($('<p class="card-text">').text(city));
                breweryCard.append($('<p class="card-text">').text(state));
                breweryCard.append($('<p class="card-text">').text(postal_code));
                breweryCard.append($('<p class="card-text">').text(phone));
                breweryCard.append($('<p class="card-text">').text(website_url));
    }
};
searchBtn.addEventListener('click', getBrewerybyState);


