var chicken = 0;
var dog = 0;
var sheep = 0;
var bird = 0;
function startClass()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Jnz2NY865/model.json", modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
console.log("got results");

if (error)
{
    console.error(error);
}
else{
    console.log(results);
    red = Math.floor(Math.random() * 255) + 1;
    green = Math.floor(Math.random() * 255) + 1;
    blue = Math.floor(Math.random() * 255) + 1;
    
    if (results[0].label == "Bark")
    {
        document.getElementById("name").innerHTML = results[0].label;
        dog = dog+1;
        document.getElementById("number").innerHTML = dog;
        document.getElementById("image").src = "images.png"
    }
    else if (results[0].label == "Baa")
    {
        document.getElementById("name").innerHTML = results[0].label;
        sheep = sheep+1;
        document.getElementById("number").innerHTML = sheep;
        document.getElementById("image").src = "download (1).png"
    }
    else if (results[0].label == "Cluck")
    {
        document.getElementById("name").innerHTML = results[0].label;
        chicken = chicken+1;
        document.getElementById("number").innerHTML = chicken;
        document.getElementById("image").src = "download (2).png"
    } 
    else if (results[0].label == "Tweet")
    {
        document.getElementById("name").innerHTML = results[0].label;
        bird = bird+1;
        document.getElementById("number").innerHTML = bird;
        document.getElementById("image").src = "download (3).png"
    }
    else
    {
document.getElementById("name").innerHTML = "";
document.getElementById("number").innerHTML = "";
document.getElementById("image").src = "dd5ed82b-b105-4b93-806f-1f9e718b56ec.png"

    }
}
}