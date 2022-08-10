function goHome() {
	location.href='index.go';
}

function goSearch() {
	let search = document.getElementsByClassName("search_input")[0].value
	
	location.href='index.search?search='+ search;
}