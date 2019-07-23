var options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys:
    [
        "item", "id"
    ]
};
var options2 = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys:
    [
        "mat"
    ]
};
var fuse = new Fuse(resources, options);
var fuse2 = new Fuse(items, options2);

function searchDB(term)
{
    var out = document.getElementById("output");
    var result = fuse.search(term.value);

        //if (term.value == "") {out.innerHTML = "Search is empty"; return;}


        if (term.value == "") {out.innerHTML = "Search is empty"; return;}
        if (result[0] == undefined) {out.innerHTML = "No results found"; return;}

        out.innerHTML = "";
        for (i=0; i < result.length; i++)
        {
            out.innerHTML += "<button class='searchButtons' onclick='select(this, "+result[i].id+");'>"+result[i].item+" | "+result[i].id+"</button>"+"<br>";
        }

}
//out.innerHTML += (result[i].id+" | "+result[i].item+" | "+result[i].mat+"<br>");
function select(selection, id)
{
    console.log(selection);
    document.getElementById("selection").innerHTML += "<button class='searchButtons elements' data='"+id+"' onclick='this.remove(); mainSearch();' style='display: inline-block'>"+selection.innerHTML+"</button>"
    mainSearch();
}
function mainSearch()
{
    var elements = document.getElementsByClassName("elements");
    var out2 = document.getElementById("output2");
    if (elements[0] == undefined) {out2.innerHTML = "Elements needed to search"; return;}
    if (elements[30] != undefined) {return;}
    var data = [];
    for(i=0; i < elements.length; i++) {
        data.push(document.getElementsByClassName("elements")[i].getAttribute("data"));
    }


    console.log(data.join())
    var result2 = fuse2.search(data.join());
    console.log(result2);
    if (result2[0] == undefined) {out2.innerHTML = "No results found"; return;}

    out2.innerHTML = "";
    for (i=0; i < result2.length; i++)
    {
        out2.innerHTML += "<button class='searchButtons');'>"+result2[i].item+" | "+result2[i].id+" | "+result2[i].mat+"</button>"+"<br>";
    }
}
