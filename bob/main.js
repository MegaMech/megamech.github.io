window.onload = function()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    menus.style.height = "0px";

    footerLink();
}

function menu() {
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    if (menus.clientHeight == "300") {
        menus.style.height = "0px";
    }
    else {
        menus.style.height = "300px";
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

    document.getElementsByClassName("footerLink")[0].href = a+d+z+c+":"+idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    document.getElementsByClassName("footerLink")[1].href = a+d+z+c+":"+idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    document.getElementsByClassName("footerLink")[0].innerHTML = idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
    document.getElementsByClassName("footerLink")[1].innerHTML = idf+c+idf+ijd+ei+ioda+ehdidoe+d+idje+l+x+o+dats+efjei+o+mn;
}
