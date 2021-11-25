var beerData;
function fetchData() {
	fetch('https://api.punkapi.com/v2/beers')
	.then((res) => res.json())
	.then((data) =>{
		beerData = data
		console.log(beerData)
	})
	.catch((error) => {
		console.log(`Error Fetching data : ${error}`)
		document.getElementById('err').innerHTML = 'Error Loading Data'
	})
};
fetchData();