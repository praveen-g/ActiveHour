var createRestCalls= function(type, url){
	var xhr = new XMLHttpRequest();
	xhr.open(method,url, false);
	xhr.send();
	return xhr
}

console.log(createRestCalls("GET","https://www.codecademy.com/"))
