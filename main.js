function startClass()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
classifier = ml5.modelClassifier("https://teachablemachine.withgoogle.com/models/Jnz2NY865/model.json", modelready)
}
function modelready()
{
    classifier.classify(gotResults)
}
function gotResults(error, results)
{
console.log("got results")
}