status="";

function setup(){
    canvas=createCanvas(640,420)
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting Objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img, gotresult);
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img, gotresult);
}


function gotresult(error,result){
    if (error) {
        console.log(error);
    }
    console.log(result)
}