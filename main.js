var SpeechRecognition = window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){

    console.log(event);
    var content=event.results[0][0].transcript;

   console.log(content);
   document.getElementById("textbox").innerHTML=content;
if(content=="Take My Selfie"){
    console.log("Taking Selfie");
    speak();
}
};
   function speak() {
var synth = window.speechSynthesis;
speak_data = "Taking Your Selfie In 5 Seconds.";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    Take_snapshot();
Save();
},5000);   
}
   Webcam.set({
       width:360,
       height:250,
       image_format:"png",
       png_quality:90
   });
   camera = document.getElementById("camera");
function Take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
    });
}
function Save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
link.href=image;
link.click();
}