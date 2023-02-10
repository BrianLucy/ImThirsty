// state = document.getElementById("#state").value;
// type = document.getElementById("#type").value;
// const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
// const types = ["micro", "regional", "brewpub", "large", "planning", "bar", "contract", "proprietor", "closed"]
// var stateInput = $('#state').val();
// var typeInput = $('#type').val();
// var state = 'georgia';
var APIKey = 'AIzaSyBvIvqYLhRUxpdWtBQWG51NuOXUsXzlfhE';
var searchBtn = document.getElementById('search-btn');
// var searchBtn = $('#search-btn');


function getBrewerybyState() {
    var breweryInput = document.getElementById('search-input').value;

    fetch(`https://api.openbrewerydb.org/breweries?by_state=${breweryInput}&per_page=50`, {
        method: 'GET',
        credentials: 'same-origin',
        per_page: 50,
    })


        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
        })
        .finally(function (data) {
            for (var i = 0; i < 6; i++)
            var name = data[i].name;
            var street = data[i].street;
            var city = data[i].city;
            var state = data[i].state;
            var postal_code = data[i].postal_code;
            var phone = data[i].phone;
            var website_url = data[i].website_url;
            var latitude = data[i].latitude;
            var longitude = data[i].longitude;
            let div = document.createElement('div');
            let p = document.createElement('p');
            var breweryCard = document.div.addClass('brewery-card');
            breweryCard.appendChild(p).text(name);
            breweryCard.appendChild(p).text(street);
            breweryCard.appendChild(p).text(city);
            breweryCard.appendChild(p).text(state);
            breweryCard.appendChild(p).text(postal_code);
            breweryCard.appendChild(p).text(phone);
            breweryCard.appendChild(p).text(website_url);
           
            

        })
        mapApi(data);
};

searchBtn.addEventListener('click', getBrewerybyState);

function mapApi(data) {
    var location = data.state
    var mapqueryURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBvIvqYLhRUxpdWtBQWG51NuOXUsXzlfhE
    &q=${location}`

    fetch(mapqueryURL)

    .then(function(response) {
        return response.json();
    })

    .then(function (data) {
        
    })
}

// searchBtn.on('click', function () {
//     console.log("testing search btn");
//     getBrewerybyState();
// })


// .then(function (data) {
//     console.log(data);
//     var breweries = data;
//     var filteredbrew = breweries.filter(function(brewery) {
//         return brewery.brewery_type === type;
//     })
//   console.log(filteredbrew);
//   var printBrew = function (brewery) {
//     var breweryEl = $('<li>');
//     var listBrewery = name, street, city, state, postal_code, phone, website_url;
//     listEl.addClass('brewery-list-item').text(listBrewery);
//     listEl.appendTo(breweryListEl);
// });




  //autocomplete for states
//   $function () {
//     $("#state").autocomplete({
//      source: states,
//    });
//     $("#type").autocomplete({
//      source: types,
//     }); 
//   };
//   var handleFormSubmit = function (event) {
//     event.preventDefault();
//     var stateInput = stateInputEl.val();
//     var typeInput = typeInputEl.val();
//     if (!stateInput || !typeInput) {
//       console.log('Pick a state and type!');
//       return;
//     }
//     printBrew(stateInput, typeInput);
//     stateInputEl.val('');
//     typeInputEl.val('');
//   }
// });

// formEl.on('submit', handleFormSubmit);
