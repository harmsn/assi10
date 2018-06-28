let a;
let b;
let c;
var fruits = ["cat", "dog", "ball", "Mango","eye","fish","boy","girl","gym","bat"];
function sayhello()
{
	let c=0;
  let i=0;
	while(c<3)
    {
       document.getElementById('di2').innerHTML= '<img src="1.png" height="70px"/>'; 
       c++;
    }
    i++;
    setTimeout(myFunction3, 1000); 
    setTimeout(myFunction2, 2000);
    i++;
    setTimeout(myFunction1,3000);
    i++;
    arr();
    if(i==3)
    {
        
    }
}
function myFunction1() {
    var c=0;
    while(c<3)
    {
      document.getElementById('di2').innerHTML= '<img src="1.png" height="70px"/>'; 
      c++;
    }
    end1();
}
function myFunction2() {
    var c=0;
    while(c<3)
    {
      document.getElementById('di2').innerHTML= '<img src="2.png" height="70px"/>'; 
      c++;
    }
}
function myFunction3() {
    var c=0;
    while(c<3)
    {
      document.getElementById('di2').innerHTML= '<img src="3.png" height="70px"/>'; 
      c++;
    }
}
function end()
{
	alert("please refresh the page to restart the game");
}
function myFunction() {

   var j=0;
   i=0;
   for(j=0;j<1000;j++)
   {
      i++;
   }
}
function ai()
{
	a=Math.random();
	return a;

}
a=ai();
console.log(a);
a=a*10+10;
a=a.toFixed(0);
function slct()
{
	
	b=10;
	b=a%b;
	return b;
	//document.getElementById("di2").innerHTML=fruits[b];
}
b=slct();
function arr()
{
	document.getElementById("di2").innerHTML =fruits[b];
}
function end1()
{  
  c=document.querySelector("#inp1");
  if(c===b)
  {
    alert("time up your score is 100");
  }
  else
  {
    alert("youi loose");
  }
}