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


        if (term.value === "") {out.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>Search is empty</span>"; return;}
        if (result[0] === undefined) {out.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>No materials found</span>"; return;}

        out.innerHTML = "";
        var i;
        for (i=0; i < result.length; i++)
        {
            out.innerHTML += "<button class='searchButtons' onclick='select(this, "+result[i].id+");'>"+result[i].item+" | "+result[i].id+"</button>"+"<br>";
        }

}
//out.innerHTML += (result[i].id+" | "+result[i].item+" | "+result[i].mat+"<br>");
function select(selection, id)
{
    document.getElementById("selection").innerHTML += "<button class='searchButtons elements' data='"+id+"' onclick='this.remove(); mainSearch();' style='display: inline-block'>"+selection.innerHTML+"</button>";
    textFit(document.getElementsByClassName("elements"));
    mainSearch();
}
function mainSearch()
{
    var elements = document.getElementsByClassName("elements");
    var out2 = document.getElementById("output2");
    if (elements[0] === undefined) {out2.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>Materials required to search</span>"; return;}
    if (elements[30] !== undefined) {return;}
    var data = [];
    var i;
    for(i=0; i < elements.length; i++) {
        data.push(document.getElementsByClassName("elements")[i].getAttribute("data"));
    }

    var joinData = ("'" + data.join("','") + "'");
    console.log(joinData);
    var result2 = fuse2.search(joinData);
    console.log(result2);
    if (result2[0] === undefined) {out2.innerHTML = "<span style='width: 100%; margin-top: 20px; display: block; text-align: center;'>No items found</span>"; return;}

    out2.innerHTML = "";
    var j;
    for (j=0; j < result2.length; j++)
    {
        out2.innerHTML += "<button class='searchButtons');' onclick='itemStats(this, "+JSON.stringify(result2[j])+");'>"+result2[j].item+" | "+result2[j].id+" | "+result2[j].mat+"</button>"+"<br>";
    }
}
var isOpen = false;
function itemStats(selection, data)
{
    var stats = document.getElementById("itemStats");

    stats.style.left = selection.getBoundingClientRect().left+"px";
    stats.style.top = selection.getBoundingClientRect().top+"px";
    stats.style.display = "block";
    document.getElementById("cover").style.display = "block";
    stats.innerHTML = data.item+" | ID: "+data.id+"<br>"+"<span style='font-style: italic'>"+data.stats[0].Text+"</span>"+"<br><br>"+"Damage: "+data.stats[0].Damage+"<br>"+"Mining: "+data.stats[0].Mining;
}
function closeItemStats()
{
    document.getElementById("itemStats").style.display = "none";
    document.getElementById("cover").style.display = "none";
}
