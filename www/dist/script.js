uri = "https://api.jikan.moe/v4/anime?q=%22naruto%22";
gr = "";

  fetch(uri)
  .then(function(response){

    return response.json();
    
  })

  .then(function(data){
gr = Object.keys(data["data"]).length;
   // console.log(data["data"]["title_english"]);
    gr = data["data"]["title_english"];
  // var myJsonString = JSON.stringify(jsonArray);
   })


console.log(gr);
for(var i = 0; i < gr; i++){
 $('#sel').append('<div id="r'+ i +'" class="card"></div>')
 $('#r'+i ).append('<img class="imr" id="x'+ i +'" src= "https://cdn.myanimelist.net/images/anime/1670/119141l.jpg" class="card"></img>')
$('#r'+i ).append('<p style="color:white; padding-left:85px;" id="v'+ i +'"></p>')
 $('#v'+i).html("GG");}

function get_data(){
  
  fetch(uri)
  .then(function(response){

    return response.json();
    
  })
  .then(function(data){

//console.log(Object.keys(data["data"]).length);
gr = Object.keys(data["data"]).length;
for(var i = 0; i < Object.keys(data["data"]).length; i++){
$('#v'+i).html(data["data"][i]["title_english"]);
}
   })

 };

get_data();


