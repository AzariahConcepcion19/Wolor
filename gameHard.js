function ready(){var a,b=Math.floor(6*Math.random()),c=Math.floor(6*Math.random());0===b?a="RED":1===b?a="BLUE":2===b?a="GREEN":3===b?a="YELLOW":4===b?a="VIOLET":5===b?a="ORANGE":void 0;0===c?document.getElementById("problem").style.color="rgb(255,0,0)":1===c?document.getElementById("problem").style.color="rgb(47,89,223)":2===c?document.getElementById("problem").style.color="rgb(255,255,0)":3===c?document.getElementById("problem").style.color="rgb(25,162,58)":4===c?document.getElementById("problem").style.color="rgb(128,0,128)":5===c?document.getElementById("problem").style.color="#ff8c00":void 0;document.getElementById("problem").innerHTML=a;var d=document.getElementById("problemCont").style.backgroundPosition;document.getElementById("problemCont").style.backgroundPosition="left center"==d?"right":"left",hardFactor()}var hardPicker;function hardFactor(){var a=document.getElementById("word"),b=document.getElementById("color");hardPicker=Math.floor(2*Math.random());0===hardPicker?(a.style.opacity="1",a.style.backgroundPosition="left",b.style.opacity=".3",b.style.backgroundPosition="right"):1===hardPicker?(b.style.opacity="1",b.style.backgroundPosition="left",a.style.opacity=".3",a.style.backgroundPosition="right"):void 0}function chosenBox(a,b){var c,d,e=document.getElementById("problem").style.color,f=document.getElementById("problem").innerHTML,g=hardPicker,h=1;0==g?(c=b,d=f.toLowerCase()):1==g&&(c=a,d=e),10>=document.getElementById("countdown").value&&(h=2),d==c?(document.getElementById("score").value-=150<=document.getElementById("score").value?-4*h:120<=document.getElementById("score").value?-3*h:105<=document.getElementById("score").value?-2*h:-1*h,document.getElementById("score").style.backgroundColor="#32cd32",document.getElementById("score").style.borderColor="#32cd32"):(document.getElementById("score").value-=150<=document.getElementById("score").value?4*h:120<=document.getElementById("score").value?3*h:105<=document.getElementById("score").value?2*h:1*h,document.getElementById("score").style.backgroundColor="#ff1818",document.getElementById("score").style.borderColor="#ff1818"),document.getElementById("score").style.color="white",ready()}var time=30;let interval=setInterval(countdown,1e3);function countdown(){if(time-=1,document.getElementById("countdown").value=time,document.getElementById("countdown").style.backgroundColor=0==time%2?"#ff1818":"#ffcccb",10>=time&&(document.getElementById("highRisk").style.backgroundPosition="left",document.getElementById("highRisk").style.color="black"),0==time){clearInterval(interval);var a=document.getElementById("score").value;document.getElementsByClassName("choices").disabled=!0,document.getElementById("gameOver").style.display="block",document.getElementById("finalScore").innerHTML=a}}var time2=30;let interval2=setInterval(fastReaction,100);function fastReaction(){105<=document.getElementById("score").value?(document.getElementById("plusTwoScore").style.backgroundPosition="left",document.getElementById("plusTwoScore").style.color="black"):(document.getElementById("plusTwoScore").style.backgroundPosition="right",document.getElementById("plusTwoScore").style.color="white"),120<=document.getElementById("score").value?(document.getElementById("plusThreeScore").style.backgroundPosition="left",document.getElementById("plusThreeScore").style.color="black"):(document.getElementById("plusThreeScore").style.backgroundPosition="right",document.getElementById("plusThreeScore").style.color="white"),150<=document.getElementById("score").value?(document.getElementById("plusFourScore").style.backgroundPosition="left",document.getElementById("plusFourScore").style.color="black"):(document.getElementById("plusFourScore").style.backgroundPosition="right",document.getElementById("plusFourScore").style.color="white")}function playAgain(){document.getElementById("gameOver").style.display="none",ready(),document.getElementsByClassName("choices").disabled=!1,interval=setInterval(countdown,1e3),time=30,document.getElementById("highRisk").style.backgroundPosition="right",document.getElementById("highRisk").style.color="white",document.getElementById("countdown").value="30",document.getElementById("score").value="100"}