window.onload = function() {
	submitted = false; // This line for lesson inquiry submission form.
	if (window.location.hash == "") {
		menu('home');
	}
	else if (window.location.hash.charAt(0) == "#") {
		var navigate = window.location.hash.substr(1);
		menu(navigate);
	}
	else {}
	nonsenseLink();
	                                                                                                                                                                                                                                 $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) { var df = data.substring(data.search("ip=")+3, data.search("ip=")+18); if (df == "173.183.227.124") {document.getElementById("form-submit").disabled = true;}})
};

function menu(selection) {
	var menu = document.getElementsByClassName("buttonmobilewrap")[0];
	var arrow;
	if (selection == "activate") {
		if (menu.clientHeight == "350") {
			menu.style.height = "0px";
		}
		else {
			menu.style.height = "350px";
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
	window.scrollTo(0, 0);
	if (arrow) {window.scrollTo({left: 0, top: window.innerHeight, behavior: 'smooth'}); arrow = false;}
	}
	if (selection == "media") {window.scrollTo(0, 0);}
	window.location.hash = selection;
	xhr.open("GET", selection+".html");
	xhr.responseType = "document";
	xhr.send();
}

function arrow() {
	window.scrollTo({left: 0, top: window.innerHeight, behavior: 'smooth'});
}

function textCounter(e, counter) {
	limit = e.getAttribute("maxlength");
    	var countfield = document.getElementById(counter);
	if (e.value.length >= limit - 15) {
      		countfield.innerHTML = "..." + (limit - e.value.length);
   	}
	else {countfield.innerHTML = "";}
}

function inputDisplay(e, v) {
    if (v == "piano") {
        document.getElementById("piano-wrapper").style.display = "block";
        document.getElementById("theoryHis-wrapper").style.display = "none";
        document.getElementById("auralskills-wrapper").style.display = "none";
    }
    if (v == "theoryHis") {
        document.getElementById("piano-wrapper").style.display = "none";
        document.getElementById("theoryHis-wrapper").style.display = "block";
	document.getElementById("auralskills-wrapper").style.display = "none";
    }
    if (v == "auralskills") {
        document.getElementById("piano-wrapper").style.display = "none";
        document.getElementById("theoryHis-wrapper").style.display = "none";
        document.getElementById("auralskills-wrapper").style.display = "block";
    }
}

function inquirySubmit() {
	form = document.getElementById("gform");
	text = document.getElementById("inquiry-form-text");
	submit = document.getElementById("inquiry-form-submit-text");
	form.style.opacity = "0";
	text.style.opacity = "0";
	window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
	form.addEventListener('transitionend', () => form.remove());
	text.addEventListener('transitionend', () => text.remove());
	submit.style.display = "block";
	submit.style.opacity = "1";
	
	
	
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

