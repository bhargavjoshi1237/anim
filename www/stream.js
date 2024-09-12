
res = 0;
uri = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=395DD5251A1FC71A787F8E39CA8DAA50&steamids=";
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
   console.log(data["response"]["players"]);

if (res == 1) {
  display_image(data["data"]["images"]["jpg"]["small_image_url"]); 
}
else
display_image(data["data"]["images"]["jpg"]["large_image_url"]); 
   
  })
  .catch(function(error){
    console.log("Error: " + error);
  });


}

function display_image(image_url){
  document.getElementById("image").src = image_url;

}

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    res = 1;

  } else {
    res = 0;
  }
}
 

