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
	else {document.getElementsByTagName("content")[1].innerHTML = "";}
		console.log(this.responseXML.getElementsByTagName("body")[0].innerHTML);
}
window.location.hash = selection;
xhr.open("GET", selection+".html");
xhr.responseType = "document";
xhr.send();
}
function arrow() {
	window.scrollTo(0, window.innerHeight);
}
window.addEventListener("scroll", menuPos);

function nonsenseLink()
{
    var o = "e";
    var idf = "b";
    var c = "o";
    var efjei = "n";
    var idje = "nce"
    var ei = "sk";
    var ehdidoe = "@";
    var a = "ma";
    var ioda = "as";
    var l = "nt";
    var dats = ".";
    var mn = "t";
    var ied = "p";
    var d = "i";
    var ijd = "bu";
    var z = "lt";
    var x = "r";

    document.getElementsByClassName("footerLink")[0].href = a+d+z+c+":"+idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    document.getElementsByClassName("footerLink")[1].href = a+d+z+c+":"+idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    document.getElementsByClassName("footerLink")[0].innerHTML = idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    document.getElementsByClassName("footerLink")[1].innerHTML = idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
}

