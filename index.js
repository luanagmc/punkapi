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

//show/hide content
function showHide(){
	//button that call functions
	var print = document.getElementById('print');
	if(print.style.display == 'none'){
		print.style.display = 'block';
	} else{
		print.style.display = 'none';
	}
}

//Build a beer grid with data returned from fetch
function beerGrid(){
	var mainContainer = document.getElementById('beer_grid');

	//create a grid for each beer in the API
	for(var i = 0; i < beerData.length; i++){
		var div = document.createElement('div');
		div.classList.add('product_holder');
		div.innerHTML = 
		'<div class="imgwrap"><img src="'+beerData[i].image_url+'" alt="'+beerData[i].name+'"></div>'+
		'<div class="text_title">'+beerData[i].name+'</div>'+
		'<div class="text_small"><div class="abv_text">'+beerData[i].abv+'</div>'+
		'<a class="info_text" href="#'+beerData[i].name+'"> More Info </a></div><br>';

		//append all grids created to the html page
		mainContainer.append(div);
	}
}

//Build a beer accordion with data returned from fetch
function accordionData(){
	console.log('Click worked')
	var mainContainer = document.getElementById("beer_accordion");
	
	//create an accordion for each beer in the API
	for (var i = 0; i < beerData.length; i++) {
		var div = document.createElement("div");
		div.classList.add('container');
		div.innerHTML = 
		'<p class="btn" id="'+beerData[i].name+'">'+beerData[i].name+'</p>'+
		'<div class="panel"><div class="panelImg"><img src="'+ beerData[i].image_url+'" alt="'+ 
		beerData[i].name+'"></div>'+'<div class="panelTxt">'+
		'<p class="tagline">'+beerData[i].tagline+'</p><p> Description:<br>'
		+beerData[i].description+'</p><p> First brewed:<br>'+beerData[i].first_brewed+'</div></div>';

		mainContainer.append(div);
	}
}

//toggle the accordion to display/hide panels
function beerAccordion(elem, option){
	document.addEventListener('click', function (e) {
		//check the element that has been clicked
		if (!e.target.matches(elem +' .btn')) return;
		else{
			//check if the clicked element already has active class
			if(!e.target.parentElement.classList.contains('active')){
				if(option==true){
					//if it contains remove active from all others
					var elementList = document.querySelectorAll(elem +' .container');
					Array.prototype.forEach.call(elementList, function (e) {
						e.classList.remove('active');
					});
				}
				//add active class to target    
				e.target.parentElement.classList.add('active');
			}else{    
				//remove active class from target
				e.target.parentElement.classList.remove('active');
			}
		}
	});
}

beerAccordion('#beer_accordion', true);