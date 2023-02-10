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
// var stateInput = document.getElementById('search-input').value;


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

//searchBtn.addEventListener('click', getBrewerybyState);

function mapApi(data) {
    console.log(data);
    document.getElementById('googleapi').innerHTML=''
    $("#googleapi").html(`<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvIvqYLhRUxpdWtBQWG51NuOXUsXzlfhE&q=${data[0].state}">`)
    // console.log(stateInput, "line 37 mapApi");
    // var location = data[0].state;
    // console.log(location);
    // var mapqueryURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBvIvqYLhRUxpdWtBQWG51NuOXUsXzlfhE&q=${location}`

    // console.log(mapqueryURL);
    // let responseClone
    // fetch(mapqueryURL).then(function(response){
    //     responseClone = response.clone()
    //     return response.json()
    // }).then(function (data) {
    //     console.log(data)
    // }, function (rejectionReason) {
    //     console.log("DAS ERROR: ", rejectionReason, responseClone)
    //     responseClone.text().then(function(bodyText) {
    //         console.log("pirates: ", bodyText)
    //     })
    // })
 
        // .then(function (response) {            
        //     return response.json();
        // })
        // .then(function () {
        //     var googleMap = document.getElementById('googleapi');
        //     googleMap.textContent = ""
    //        googleMap.innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
    //    referrerpolicy="no-referrer-when-downgrade" src=${mapqueryURL}>
    //  </iframe>`
        //})
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
