

//Step_1
function writeMessage()
{
    window.alert("I've been clicked");
}

// Step_5
window.document.addEventListener("DOMContentLoaded", init, false);

//Step_2
function init()
{
 var myElement = document.getElementById("myButton2");
 myElement.onclick = writeMessage;

//Step_3
 var myButton = document.getElementById("myButton3");

//Step_4
myButton.addEventListener("click", function()
{
    window.alert("I have been clicked");
});

}
