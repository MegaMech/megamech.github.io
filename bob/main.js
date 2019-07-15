window.onload = function()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    menus.style.height = "0px";
    if (document.getElementById("Management") != null)
    {
        tabs(null, 'Management');
    }
    if (document.getElementById("Northstar") != null)
    {
        tabs(null, 'Northstar');
    }
    footerLink();
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

}

function menu()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    if (menus.clientHeight == "375") {
        menus.style.height = "0px";
    }
    else {
        menus.style.height = "375px";
    }
    return true;
}
function preview(img)
{
    var imgprev = document.getElementsByClassName("preview")[0];
    var attachedImage = document.getElementsByClassName("attachedImage")[0];
    imgprev.style.display = "table";

    attachedImage.src = img;
    console.log(img.src);

    imgprev.onclick = function() {
      imgprev.style.display = "none";
    }
}
//care.html tabs
function tabs(evt, tabName)
{
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  if (evt)
  {
      evt.currentTarget.className += " active";
  }
}
function tabsTwo(evt, tabName)
{
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontentTwo");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  if (evt)
  {
      evt.currentTarget.className += " active";
  }
}
function footerLink()
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

    //document.getElementsByClassName("footerLink")[0].href = a+d+z+c+":"+idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    //document.getElementsByClassName("footerLink")[1].href = a+d+z+c+":"+idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    //document.getElementsByClassName("footerLink")[0].innerHTML = idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    //document.getElementsByClassName("footerLink")[1].innerHTML = idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
}
