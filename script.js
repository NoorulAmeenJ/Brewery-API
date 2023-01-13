
var API = "https://api.openbrewerydb.org/breweries?by_name=cooper&per_page=3"
fetch(API)
.then((response)=>response.json())
.then((data)=>console.log(data))

 