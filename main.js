window.onload = function() {
	if (window.location.hash == "") {
		menu('home');
	}
	else {
		var navigate = window.location.hash.substr(1);
		menu(navigate);
	}
};

function menu(selection) {
	var menu = document.getElementsByClassName("buttonmobilewrap")[0];
	if (selection == "activate") {
		if (menu.clientHeight == "465") {
			menu.style.height = "0px";
		}
		else {
			menu.style.height = "465px";
		}
		return true;
	}
	menu.style.height = "0px";
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
	a = this.responseXML;
	document.getElementsByTagName("content")[0].innerHTML = this.responseXML.getElementsByTagName("body")[0].childNodes[0].innerHTML;
	if (this.responseXML.getElementsByTagName("body")[0].childNodes[2] != null) {
		document.getElementsByTagName("content")[1].innerHTML = this.responseXML.getElementsByTagName("body")[0].childNodes[2].innerHTML;
	}
		console.log(this.responseXML.getElementsByTagName("body")[0].innerHTML);
}
window.location.hash = selection;
xhr.open("GET", selection+".html");
xhr.responseType = "document";
xhr.send();
}
function menuPos() {
	if (window.innerWidth <= 768) {
		document.getElementsByClassName("hiddenmargin")[0].style.display = "none";
		return true;
	}
	else {
		if (window.scrollY >= 100) {
			document.getElementsByTagName("menu")[0].style.position = "fixed";
			document.getElementsByClassName("hiddenmargin")[0].style.display = "block";
		}
		else {
			document.getElementsByTagName("menu")[0].style.position = "relative";
			document.getElementsByClassName("hiddenmargin")[0].style.display = "none";
		}
	}
}
function arrow() {
	window.scrollTo(0, 500);
}
window.addEventListener("scroll", menuPos);
