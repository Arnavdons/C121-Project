img1=document.getElementById("img1");
img2=document.getElementById("img2");
img3=document.getElementById("img3");
img4=document.getElementById("img4");
img5=document.getElementById("img5");


function preload(){

}

function setup(){
img1_compare=ml5.imageClassifier("MobileNet",modelLoaded);
//img2_compare=ml5.imageClassifier("MobileNet",modelLoaded);
//img3_compare=ml5.imageClassifier("MobileNet",modelLoaded);
//img4_compare=ml5.imageClassifier("MobileNet",modelLoaded);
//img5_compare=ml5.imageClassifier("MobileNet",modelLoaded);
}

function draw(){
img1_compare.classify(img1,img2,img3,img4,img5,gotResults);
//img2_compare.classify(img2,img1Results);
//img3_compare.classify(img3,img1Results);
//img4_compare.classify(img4,img1Results);
//img5_compare.classify(img5,img1Results);
}

function modelLoaded(){
console.log("Model is Loaded!");
}

previous_result="";

function gotResults(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
if((results[0].confidence>0.5) && (previous_result!=results[0].label)){
console.log(results);
previous_result=results[0].label;
document.getElementById("img1_output").innerHTML=results[0].label;
}
}
}


