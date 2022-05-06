img = "";
Status = "";
object = [];
function preload(){
    img = loadImage("dog_cat.jpg");
    
 }
 function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting"
 }
 function draw(){
     image(img,0,0,640,420);
     

     if(Status = ""){
        for (i == 0; i< object.length; i++){
           document.getElementById("status").innerHTML = "Status : Done";
           fill("#FF0000");
           percent = floor(object[i].confidence*100);
           text(object[i].label+" "+persent + "%", object[i].x+15,object[i].y+15);
           noFill();
           stroke("#FF0000")
           rect(object[i].x,object[i].y,object[i].height,object[i].width);
        }
     }

    
    }
    function modelLoaded(){
   console.log("modelLoaded!");
   Status = true;
   objectdetector.detect(img , gotresult);
    }
function gotresult(error,results){
   if(error){
      console.log(error);
   }
   console.log(results);
   object = results;
}
    