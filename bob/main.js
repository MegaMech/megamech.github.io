
//Sets table footer width to equal main content width.
window.onload = function()
{
    //@deprecated
    //document.getElementsByClassName("fTable")[0].width = document.getElementsByTagName("main")[0].offsetWidth;


    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];

menus.style.height = "0px";
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
