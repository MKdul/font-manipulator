var right_wrist = 0;
var left_wrist = 0;
var difference = 0;


function preload()
{
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 600);
    canvas = createCanvas(550, 450);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized.");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        right_wrist = results[0].pose.rightWrist.x;
        left_wrist = results[0].pose.leftWrist.x;
        difference = floor(left_wrist - right_wrist);
        console.log("Right Wrist x: " + right_wrist + "Left Wrist x: " + left_wrist + "Difference: " + difference);
    }
}

function draw()
{
    background('#12100f');
    textSize(difference);
    fill('#fafafa');
    text('Hello', 10, 90);
}