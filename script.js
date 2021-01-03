var input= document.querySelector("#input-text");
var btn= document.querySelector("#translate-btn");
var output= document.querySelector("#translated-text");
btn.addEventListener("click",translate);
function errorHandler(error)
{
    console.log("Some error occcured "+error)
    alert(error) 
}
function translate()
{
    var text=input.value;
    var url= "https://api.funtranslations.com/translate/minion.json"+"?text="+text;
    fetch(url)
    .then(
        function response(response)
        {
            return response.json();
        }
    )
    .then(
        function logJson(JSON)
        {
            output.innerText=JSON.contents.translated
        }
    ).catch(errorHandler())
}
