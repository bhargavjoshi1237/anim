function pr (ids){

console.log(ids);
window.open(ids);
}
var url_string = window.location;
var url = new URL(url_string);
var idpass = url.searchParams.get("id");
