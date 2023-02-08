state = document.getElementById("#state").value;
type = document.getElementById("#type").value;
const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
const types = ["micro", "regional", "brewpub", "large", "planning", "bar", "contract", "proprietor", "closed"]
var stateInput = $('#state').val();
var typeInput = $('#type').val();
var state = 'georgia';
fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`, {
  method: 'GET',
  credentials: 'same-origin',
  per_page: 50,
 })


 .then(function (response) {
  return response.json();
  
})
.then(function (data) {
    console.log(data);
    var breweries = data;
    var filteredbrew = breweries.filter(function(brewery) {
        return brewery.brewery_type === type;
    })
  console.log(filteredbrew);
  var printBrew = function (brewery) {
    var breweryEl = $('<li>');
    var listBrewery = name.street.city.state.postal_code.phone.website_url;
    listEl.addClass('brewery-list-item').text(listBrewery);
    listEl.appendTo(breweryListEl);
  }
    $("#state").autocomplete({
    source: states,
  });
  $("#type").autocomplete({
     source: types,
  });    
  var handleFormSubmit = function (event) {
    event.preventDefault();
    var stateInput = stateInputEl.val();
    var typeInput = typeInputEl.val();
    if (!stateInput || !typeInput) {
      console.log('You need to fill out the form!');
      return;
    }
    printBrew(stateInput, typeInput);
    stateInputEl.val('');
    typeInputEl.val('');
  }
});
