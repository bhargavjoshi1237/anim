
uri = "https://api.jikan.moe/v4/anime/";
function get_data(){
  var h = document.getElementById("malid");
  gg = h.value;
  url = uri.concat(gg);
  console.log(gg);
  
  fetch(url)
  .then(function(response){

    return response.json();
    
  })
  .then(function(data){
   console.log(data["data"]["title_english"]);
    gr = data["data"]["title_english"];
   })

 };
const obj = JSON.parse('{"name":"Spy X Family", "age":30, "city":"New York"}');
for(var i =1; i<= 10; i++){
 //  $('#sel').append('<div id="r'+ i +'" class="card"></div>')}
for(var i =1; i<= 10; i++){
   $('#r'+i ).append('<img class="imr" id="x'+ i +'" src="https://cdn.myanimelist.net/images/anime/1670/119141l.jpg" class="card"></img>')
}

for(var i =1; i<= 10; i++){
   $('#r'+i ).append('<p style="color:white; padding-left:85px;" id="v'+ i +'"></p>')
   $('#r'+i).append($('<p/>', { id: 'h' + i, style: "color: white; text-align: center;"}))
  $('#h'+i).html(gr);
}
 