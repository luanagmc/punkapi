var beerData;
function fetchData() {
	fetch('https://api.punkapi.com/v2/beers')
	.then((res) => res.json())
	.then((data) =>{
		beerData = data
	})
	.catch((error) => {
		console.log(`Error Fetching data : ${error}`)
		document.getElementById('err').innerHTML = 'Error Loading Data'
	})
};
fetchData();

//Build a beer grid with data returned from fetch
function beerGrid(){
	var mainContainer = document.getElementById('beer_grid');

	//create a grid for each beer in the API
	for(var i = 0; i < beerData.length; i++){
		var div = document.createElement('div');
		div.classList.add('product_holder');
		div.innerHTML = 
		'<div class = "imgwrap"><img src = "'+beerData[i].image_url+'" alt = "'+beerData[i].name+'"></div>'+
		'<div class = "text_title">'+beerData[i].name+'</div>'+
		'<div class = "text_small"><div class="abv_text">'+beerData[i].abv+'</div>'+
		'<a class = "info_text" href = "#'+beerData[i].name+'"> More Info </a></div><br>';

		//append all grids created to the html page
		mainContainer.append(div);
	}
}