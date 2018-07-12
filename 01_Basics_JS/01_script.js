document.querySelector('#myTime').addEventListener('keyup',function() {
   var time = this.value;
   if(time === ''){
       document.getElementById('display').innerHTML = "";

   }
   else{
       if(time >= 0 && time <=12){
           document.getElementById('display').innerHTML = "Good Morning"
       }
       else if(time >12 && time <= 16){
           document.getElementById('display').innerHTML = "Good AfterNoon"
       }
       else if(time >=17 && time <= 24){
           document.getElementById('display').innerHTML = "Good Evening"
       }
       else if(time < 0){
           document.getElementById('display').innerHTML ="wrong choice ";
       }
       else{
           document.getElementById('display').innerHTML = "Please enter proper time"
       }
   }

});



