fetch('https://api.openbrewerydb.org/breweries', {
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
        return brewery.brewery_type === "micro";
    })
  console.log(filteredbrew);
        

});
