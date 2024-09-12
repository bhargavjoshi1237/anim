 





url = "https://api.jikan.moe/v4/anime?q=rentagirlfriend&sfw&limit=2";

  
  fetch(url)
  .then(function(response){

    return response.json();
    
  })
  .then(function(data){
   console.log(data["data"][1]["images"]["jpg"]["image_url"]);

var c = Object.keys(data["data"]).length;
console.log(Object.keys(data["data"]).length);
var x = 0;
for(var i =1; i<= c/5; i++){

for(var i =1; i<= 5; i++){
  $('#container').append('<div id="rows'+ i +'" class="row"></div>')
}


for(var i =1; i<= c; i++){
$('#rows'+i).append('<div id="cols'+ i +'" class="col-sm"></div>')
$('#cols'+i).append('<img id="img'+ i +'"  class="imr"></div>')
$('#row'+i).append('<div id="col'+ i +'" class="col-sm"></div>')
$('#cols'+i).append('<img id="img2'+ i +'"  class="imr"></div>')
$('#row'+i).append('<div id="col'+ i +'" class="col-sm"></div>')
$('#cols'+i).append('<img id="img3'+ i +'"  class="imr"></div>')
$('#row'+i).append('<div id="col'+ i +'" class="col-sm"></div>')
$('#cols'+i).append('<img id="img4'+ i +'"  class="imr"></div>')
$('#row'+i).append('<div id="col'+ i +'" class="col-sm"></div>')
$('#cols'+i).append('<img id="img5'+ i +'"  class="imr"></div>')
}

for(var j =1; j<= 5; j++){
for(var k =1; k<= 5; k++){
$("#img"+j+i).attr("src", data["data"][j]["images"]["jpg"]["image_url"]);
 console.log(data["data"][j]["images"]["jpg"]["image_url"]);
}
}
}


})








 