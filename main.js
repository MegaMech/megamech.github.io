


function menu(selection) {

var xhr = new XMLHttpRequest();
xhr.onload = function() {
  console.log(this.responseXML.title);
  a = this.responseXML;
  document.getElementsByTagName("content").innerHTML = this.responseXML.getElementsByTagName("p")[0].innerHTML;
}
xhr.open("GET", selection+".html");
xhr.responseType = "document";
xhr.send();
/*	var menu = document.getElementsByClassName("buttonmobilewrap")[0];
	if (selection == "activate") {
		if (menu.clientHeight == "400") {
			menu.style.height = "0px";
		}
		else {
			menu.style.height = "400px";
		}
		return true;
	}
	
var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementsByTagName("content").innerHTML = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET", selection+".html", true);
  xmlhttp.responseType = "document";
  xmlhttp.send();*/
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