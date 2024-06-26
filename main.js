function startClassification()
{
    Navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4f-80yW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}