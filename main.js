function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3N1A2INbg/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}