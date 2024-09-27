



function c(){
if ($('input:text').val().length == 0) {
$("#sel").empty();
}
else{
$("#sel").empty(); 
var b = $('#q').val();
uri = "https://api.jikan.moe/v4/anime?q=";
x = "&sfw&limit=6";
url = uri + b + x
console.log(url);
  fetch(url)
  .then(function(response){

    return response.json();
    
  })
  .then(function(data){
  

var c = Object.keys(data["data"]).length;

g = Object.keys(data["data"]).length;
var x = 0;
for (let i = 0; i < g; i++) {
  console.log(data["data"][i]["images"]["jpg"]["image_url"]);
}
let z=0;
console.log();
for(var i =1; i<= g-1; i++){
$('#sel').append('<div class="col-sm" ><div id="r'+ i +'" class="card"><div class="card__content"><h6 class="card__title" id="title'+ i +'" ></h6><h6 class="desc" id="des'+ i +'" ></h6><h6 class="desc" id="rate'+ i +'" ></h6><h6 class="desc" id="year'+ i +'" ></h6><h6 class="desc" id="dur'+ i +'" ></h6><h6 class="desc" id="air'+ i +'" ></h6></div></div></div>')
$('#r'+i).append(' <img id="img'+ i +'" style="width: 108%" ></div>')
$('#title'+i).text(data["data"][i]["titles"][1]["title"])
$('#des'+i).text('Episodes: '+ data["data"][i]["episodes"])
$('#rate'+i).text('Rateing: '+ data["data"][i]["score"])
$('#year'+i).text('Rateing: '+ data["data"][i]["year"])
$('#dur'+i).text('Rateing:  '+ data["data"][i]["duration"])
$('#year'+i).text('Relese Year: ' + data["data"][i]["year"])
$('#air'+i).text(' '+ data["data"][i]["status"])
$('#img'+i).attr("src",data["data"][i]["images"]["jpg"]["image_url"]);
}

})
}
}

function cl(){
$("#sel").empty();
$("#row1").empty();
}









