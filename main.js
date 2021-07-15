nose_x=0;

nose_y=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/QN40jpk9/istockphoto-1192834521-612x612-removebg-preview.png")
s=loadImage("https://i.postimg.cc/436FpgWH/863c421dc200d30f1404a58d52ed9b3f-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,model_loaded);
poseNet.on('pose',gotposes);

}

function model_loaded(){
console.log("model is loaded");
}

function gotposes(result){
if(result.length>0){
    console.log(result);
    nose_x=result[0].pose.nose.x-19;
    nose_y=result[0].pose.nose.y-19;
console.log("nose_x=",result[0].pose.nose.x);
console.log("nose_y=",result[0].pose.nose.y);
}
}

function draw(){
image(video,0,0,300,300);

//fill(0,0,255);
//stroke(0,0,255);
//circle(nose_x,nose_y,20);


image(clown_nose,nose_x,nose_y,40,40);
}

function take_snapshot(){
    save('filters.png');
}




