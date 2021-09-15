var bibione = new Date("Sept 18, 2021 06:00:00").getTime();
var x = setInterval(function(){
  var now= new Date().getTime();
 var distance = bibione-now;
 var days= Math.floor(distance/(1000*60*60*24))
 var hrs = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
 var mins = Math.floor((distance%(1000*60*60))/(1000*60));
 var secs = Math.floor((distance%(1000*60))/1000);
 console.log(days);
 document.getElementById("day").innerHTML=days;
 document.getElementById("hrs").innerHTML=hrs;
 document.getElementById("min").innerHTML=mins;
 document.getElementById("sec").innerHTML=secs;

},1000)
