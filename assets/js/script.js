var state = document.getElementById("#state").value;
var type = document.getElementById("#type").value;

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
        return brewery.brewery_type === ${type};
    })
  console.log(filteredbrew);
        

});
