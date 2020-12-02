var named=document.getElementById('name').value;
var array1=[
             "Most likely.",
             "Better not tell you now.",
             "Outlook not so good.",
             "Without a doubt.",
             "Ask again later.",
             "Dont count on it.",
             "You may rely on it.",
             "Very doubtful."
             ];

function welcome()
{
	var named=document.getElementById('name').value;
    document.getElementById("displayName").innerHTML="Welcome ! "+named;
    document.getElementById("confirm").style.display="block";
    document.getElementById("div_input1").style.display="none";
    document.getElementById("button1").style.display="none";

}

function confirmation()
{   
	var named=document.getElementById('name').value;
	document.getElementById("displayName").style.display="none";
	if(yesProceed.checked==true)
	{
        document.getElementById("chooseQuestion").style.display="block";
    }
    else
    { 	
        document.getElementById("terminate").innerHTML="No issue "+named+". We wish you Good Luck ! ";
    }
    document.getElementById("confirm").style.display="none";
}

function getAnswer()
{
    if(ques1.checked==true)
    	document.getElementById("ques1").innerHTML="Ques: "
    else if(ques2.checked==true)
    	document.getElementById("ques2").innerHTML="Ques: "
    else if(ques3.checked==true)
    	document.getElementById("ques3").innerHTML="Ques: "
    else if(ques4.checked==true)
    	document.getElementById("ques4").innerHTML="Ques: "
    else if(ques5.checked==true)
    	document.getElementById("ques5").innerHTML="Ques: "
    else if(ques6.checked==true)
    	document.getElementById("ques6").innerHTML="Ques: "
    else if(ques7.checked==true)
    	document.getElementById("ques7").innerHTML="Ques: "
    else
    	document.getElementById("ques8").innerHTML="Ques: "
       

    var array1=[
             "Ans:&nbsp;&nbsp;Most likely.",
             "Ans:&nbsp;&nbsp;Better not tell you now.",
             "Ans:&nbsp;&nbsp;Outlook not so good.",
             "Ans:&nbsp;&nbsp;Without a doubt.",
             "Ans:&nbsp;&nbsp;Ask again later.",
             "Ans:&nbsp;&nbsp;Dont count on it.",
             "Ans:&nbsp;&nbsp;You may rely on it.",
             "Ans:&nbsp;&nbsp;Very doubtful."
             ];
   document.getElementById("chooseQuestion").style.display="none";
   var rn=Math.floor(Math.random()*8);
   document.getElementById("qst").innerHTML=localStorage.getItem("question");
   document.getElementById("randomNumber").innerHTML=array1[rn];
   document.getElementById("randomNumber").style.display="block";
   document.getElementById("qst").style.display="block";
   document.getElementById("askNext").style.display="block";

}

function knowMore()
{ 
	document.getElementById("chooseQuestion").style.display="block";
	document.getElementById("askNext").style.display="none";
	document.getElementById("randomNumber").style.display="none";
	document.getElementById("qst").style.display="none";
}

function termination()
{
	var named=document.getElementById('name').value;
	document.getElementById("randomNumber").style.display="none";
	document.getElementById("button4").style.display="none";
	document.getElementById("button5").style.display="none";
	document.getElementById("terminate").innerHTML="Welcome again "+named;
	document.getElementById("qst").style.display="none";
}
function abc(z)
{
	localStorage.setItem("question",z);
	document.getElementById("ques").value=localStorage.getItem("question");
}