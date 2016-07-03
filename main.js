


function menu(selection) {
	var menu = document.getElementsByClassName("buttonmobilewrap")[0];
	if (selection == "activate") {
		if (menu.clientHeight == "400") {
			menu.style.height = "0px";
		}
		else {
			menu.style.height = "400px";
		}
		return true;
	}
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
	a = this.responseXML;
	document.getElementsByTagName("content")[0].innerHTML = this.responseXML.getElementsByTagName("p")[0].innerHTML;
}
xhr.open("GET", selection+".html");
xhr.responseType = "document";
xhr.send();
}
function menuPos() {
	if (window.innerWidth <= 768) {
		return true;
	}
	else {
		if (window.scrollY >= 100) {document.getElementsByTagName("menu")[0].style.position = "fixed";}
		else {
			document.getElementsByTagName("menu")[0].style.position = "relative";
		}
	}
}
window.addEventListener("scroll", menuPos);