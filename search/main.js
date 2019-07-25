const options = {
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
const options2 = {
    shouldSort: true,
    threshold: 0.9,
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


        if (term.value == "") {out.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>Search is empty</span>"; return;}
        if (result[0] == undefined) {out.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>No materials found</span>"; return;}

        out.innerHTML = "";
        for (i=0; i < result.length; i++)
        {
            out.innerHTML += "<button class='searchButtons' onclick='select(this, "+result[i].id+");'>"+result[i].item+" | "+result[i].id+"</button>"+"<br>";
        }

}
//out.innerHTML += (result[i].id+" | "+result[i].item+" | "+result[i].mat+"<br>");
function select(selection, id)
{
    document.getElementById("selection").innerHTML += "<button class='searchButtons elements' data='"+id+"' onclick='this.remove(); mainSearch();' style='display: inline-block'>"+selection.innerHTML+"</button>"
    textFit(document.getElementsByClassName("elements"));
    mainSearch();
}
function mainSearch()
{
    var elements = document.getElementsByClassName("elements");
    var out2 = document.getElementById("output2");
    if (elements[0] == undefined) {out2.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>Materials required to search</span>"; return;}
    if (elements[30] != undefined) {return;}
    var data = [];
    for(i=0; i < elements.length; i++) {
        data.push(document.getElementsByClassName("elements")[i].getAttribute("data"));
    }

    var joinData = ("'" + data.join("','") + "'");
    console.log(joinData);
    var result2 = fuse2.search(joinData);
    console.log(result2);
    if (result2[0] == undefined) {out2.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>No items found</span>"; return;}

    out2.innerHTML = "";
    for (i=0; i < result2.length; i++)
    {
        out2.innerHTML += "<button class='searchButtons');' onclick='itemStats(this, "+result2[i].id+")'>"+result2[i].item+" | "+result2[i].id+" | "+result2[i].mat+"</button>"+"<br>";
    }
}
function itemStats(selection, id)
{

}
