window.onload = function() {
	if (window.location.hash == "") {
		menu('home');
	}
	else if (window.location.hash.charAt(0) == "#") {
		var navigate = window.location.hash.substr(1);
		menu(navigate);
		nonsenseLink();
	}
	else {}
};

function menu(selection) {
	var menu = document.getElementsByClassName("buttonmobilewrap")[0];
	var arrow;
	if (selection == "activate") {
		if (menu.clientHeight == "495") {
			menu.style.height = "0px";
		}
		else {
			menu.style.height = "495px";
		}
		return true;
	}
	if (selection == "about") {
		selection = "home"	
		arrow = true;
	}
	menu.style.height = "0px";
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
	a = this.responseXML;
	try {
		document.getElementsByTagName("content")[0].innerHTML = this.responseXML.getElementsByTagName("body")[0].childNodes[0].innerHTML;
	}
	catch(e) {
		console.log(e); menu(selection);
	}
	if (this.responseXML.getElementsByTagName("body")[0].childNodes[2] != null) {
		document.getElementsByTagName("content")[1].innerHTML = this.responseXML.getElementsByTagName("body")[0].childNodes[2].innerHTML;
	}
	else {document.getElementsByTagName("content")[1].innerHTML = "";}
	document.getElementsByTagName("body")[0].style.scrollBehavior = "auto";
	window.scrollTo(0, 0);
	document.getElementsByTagName("body")[0].style.scrollBehavior = "smooth";
	if (arrow) {window.scrollTo(0, window.innerHeight); arrow = false;}
	}
	window.location.hash = selection;
	xhr.open("GET", selection+".html");
	xhr.responseType = "document";
	xhr.send();
}

function arrow() {
	window.scrollTo(0, window.innerHeight);
}

function nonsenseLink()
{
    var ao = "e";
    var eidxf = "b";
    var cy = "o";
    var efsdjei = "n";
    var idkje = "w"
    var idffwec = "lt"
    var easi = "s";
    var edbidoe = "@";
    var la = "ma";
    var iosq = "al";
    var ohd = "nd";
    var dgls = ".";
    var difjwof = "q";
    var mzjn = "a";
    var yfed = "c";
    var ks = "i";
    var goeh = "u";
    var yhlkg = "x";
    var jhf = "r";

    document.getElementsByClassName("nonsenseLink")[0].href = la+ks+idffwec+cy+":"+ks+efsdjei+difjwof+goeh+ks+jhf+ks+ao+easi+edbidoe+iosq+ao+yhlkg+idkje+ks+ohd+easi+cy+jhf+dgls+yfed+mzjn;
    document.getElementsByClassName("nonsenseLink")[0].innerHTML = ks+efsdjei+difjwof+goeh+ks+jhf+ks+ao+easi+edbidoe+iosq+ao+yhlkg+idkje+ks+ohd+easi+cy+jhf+dgls+yfed+mzjn;
}

