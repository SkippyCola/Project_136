Status = "";


function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide()
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("name_of_objects").getValue;
}

function modelLoaded()
{
    console.log("The model has Loaded");
    Status = true;
}

function draw()
{
    image(video,0,0,480,380);
}

