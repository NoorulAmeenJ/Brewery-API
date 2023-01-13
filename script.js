
var API = "https://api.openbrewerydb.org/breweries?by_name=cooper&per_page=3"
var container = document.getElementById("container")
fetch(API)
.then((response)=>response.json())
.then((data)=>{
    data.forEach((event)=>{
        if(event.website_url== null)
        {
            container.innerHTML +=
            `
            <div class="box">
 <h3>${event.name}<span class="badge alert alert-primary">Name</span></h3>
 <h4><a href="https://tualatinvalley.org/" target="_blank">https://tualatinvalley.org/<span class="badge alert alert-warning">url</span></a></h4>
 <h2>${event.state}<span class="badge alert alert-info">State</span></h2>
 <h3>${event.country}<span class="badge alert alert-success">Country</span></h3>
 <h6>${event.phone}<span class="badge alert alert-danger">Phone</span></h6>
 <h5>${event.brewery_type}<span class="badge bg-secondary">Type</span></h5>
 </div>
            `
        }
        else{
           container.innerHTML +=
           `
           <div class="box">
<h3>${event.name}<span class="badge alert alert-primary">Name</span></h3>
<h4><a href="${event.website_url}" target="_blank">${event.website_url}<span class="badge alert alert-warning">url</span></a></h4>
<h2>${event.state}<span class="badge alert alert-info">State</span></h2>
<h3>${event.country}<span class="badge alert alert-success">Country</span></h3>
<h6>${event.phone}<span class="badge alert alert-danger">Phone</span></h6>
<h5>${event.brewery_type}<span class="badge bg-secondary">Type</span></h5>
</div>
           `
        }
    })
})

// event.name
// event.country
// event.state
// event.phone
// event.website_url
// event.brewery_type


 console.log(container)