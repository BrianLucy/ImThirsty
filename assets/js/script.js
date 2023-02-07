fetch('https://api.openbrewerydb.org/breweries', {
  method: 'GET',
  credentials: 'same-origin',
 })


 .then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
});
