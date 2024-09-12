console.log("test");
url = "https://api.jikan.moe/v4/anime/48039";

  
fetch(url)
.then(function(response){

return response.json();
    
})
.then(function(data){
console.log(data["data"]["images"]["jpg"]["image_url"]);
document.getElementById("img1").src = data["data"]["images"]["jpg"]["image_url"];
})