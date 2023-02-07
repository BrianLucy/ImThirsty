var state = document.getElementById("#state").value;
var type = document.getElementById("#type").value;
const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
const types = ["micro", "regional", "brewpub", "large", "planning", "bar", "contract", "proprietor", "closed"]

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
        

});
