
var canvas=document.querySelector("canvas");
var c=canvas.getContext("2d");
canvas.height=window.innerHeight;
canvas.width=window.innerWidth/2;
var bgsound=document.querySelector("#bgsound");
var canvasgame=document.querySelector("#game");
var display1=document.querySelector("#display1");
var display2=document.querySelector("#display2");
var playbut=document.querySelector("#playgame");
var body=document.querySelector("body");
var myscore=document.querySelector("#myscore");
var highScore=document.querySelector("#highScore");
var bulletImage=document.querySelector("#bullet");
var newgame=document.querySelector("#newgame");

canvasgame.style.display="none";
display2.style.display="none";
var pausegame=false;
var left=false;
var right=false;
var x=200;
var y=750;
var interval;
var cx;
var i;
var j;
var gameStart=true;
var cc;
var br=7;
var a;
var bdx;
var bdy;
var rdx;
var rdy;
var divide;
var newrocks=[];
var toggle=false;
var score=0;
var highscore;
var arr=[];
var bgsound=new Audio("bgscore.mp3");
var gameOver=new Audio("gameover.wav");

if(!localStorage.getItem("highscore"))
{
	highscore=0;
}
else
{
 highscore=JSON.parse(localStorage.getItem("highscore"));
}

playbut.addEventListener("click",function() 
{ animate();
  game.style.display="";
  interval=setInterval(animate,20);
  display1.style.display="none";
bgsound.play();});

newgame.addEventListener("click",function()
{
   location.reload();
});
function fillscore()
{  c.font="30px Fredoka One";
c.fillText(score,10,30);
c.fillText("high score",canvas.width-180,30);
if(score>highscore)
{
	highscore=score;
}
c.fillText(highscore,canvas.width-120,70);


}


//localStorage here

function Drawcanon(x,y)
{   this.x=x;
	this.y=y;
	this.dx=15;
	this.r=15;
	this.draw=function(toggle)
	{
	 c.beginPath();
	 c.fillStyle="#3d5c5c";
    c.fillRect(this.x,this.y,50,100);
    c.beginPath();
    c.arc(this.x+25,this.y+100,25,0,Math.PI ,false);
    c.fill();

    c.beginPath();
    c.fillStyle="red";
    c.arc(this.x+25,this.y+128,3,0,Math.PI*2,false);
    c.fill();
    c.beginPath();
    c.fillStyle="#c5e274";
    c.fillRect(0,this.y+145,canvas.width,canvas.height-this.y-145);
    c.fill();
    c.beginPath();
    c.fillStyle="rgba(0,0,0,0.2)";
    c.fillRect(this.x-20,this.y+149,90,10);
    c.fill();

this.w1cx=this.x;
this.w1cy=this.y+135;
this.w2cx=this.x+50;
this.w2cy=this.y+135;
this.toggle=toggle; 


//wheel part
if(this.toggle)
{   c.beginPath();
	c.fillStyle="#996633"; 
	c.arc(this.w1cx,this.w1cy,20,0,Math.PI*2,false);
	c.fill();
	c.beginPath();
	c.fillStyle="#c5e274";
	c.arc(this.w1cx,this.w1cy,15,0,Math.PI*2,false);
	c.fill();
	c.beginPath();
	c.fillStyle="#996633";
	c.arc(this.w1cx,this.w1cy,5,0,Math.PI*2,false);
	c.fill();

	c.beginPath();
	c.translate(this.w1cx,this.w1cy);
    c.rotate(45*Math.PI/180);
	c.fillStyle="#996633";
	c.fillRect(-1,-20,2,40);
	c.fill();
    c.fillStyle="#996633";
	c.fillRect(-20,-1,40,2);
	c.fill();
    c.rotate(45*Math.PI/180);
    c.setTransform(1, 0, 0, 1, 0, 0);
}
    


    if(!this.toggle)
    { c.beginPath(); 
     c.fillStyle="#996633";
	c.arc(this.w1cx,this.w1cy,20,0,Math.PI*2,false);
	c.fill();
	c.beginPath();
	c.fillStyle="#c5e274";
	c.arc(this.w1cx,this.w1cy,15,0,Math.PI*2,false);
	c.fill();
	
	c.beginPath();
	c.fillStyle="#996633";
	c.arc(this.w1cx,this.w1cy,5,0,Math.PI*2,false);
	c.fill();

	
	
	
	c.fillStyle="#996633";
	c.fillRect(this.w1cx-1,this.w1cy-20,2,40);
	c.fill();
    c.fillStyle="#996633";
	c.fillRect(this.w1cx-20,this.w1cy-1,40,2);
	c.fill();
    
   	
    }
  
  if(this.toggle)
{   c.beginPath();
	c.fillStyle="#996633";
	c.arc(this.w2cx,this.w2cy,20,0,Math.PI*2,false);
	c.fill();
	c.beginPath();
	c.fillStyle="#c5e274";
	c.arc(this.w2cx,this.w2cy,15,0,Math.PI*2,false);
	c.fill();
	c.beginPath();
	c.fillStyle="#996633";
	c.arc(this.w2cx,this.w2cy,5,0,Math.PI*2,false);
	c.fill();

	c.beginPath();
	c.translate(this.w2cx,this.w2cy);
    c.rotate(45*Math.PI/180);
	c.fillStyle="#996633";
	c.fillRect(-1,-20,2,40);
	c.fill();
    c.fillStyle="#996633";
	c.fillRect(-20,-1,40,2);
	c.fill();
    c.rotate(45*Math.PI/180);
    c.setTransform(1, 0, 0, 1, 0, 0);
}
    


    if(!this.toggle)
    { c.beginPath();
     c.fillStyle="#996633";
	c.arc(this.w2cx,this.w2cy,20,0,Math.PI*2,false);
	c.fill();
	c.beginPath();
	c.fillStyle="#c5e274";
	c.arc(this.w2cx,this.w2cy,15,0,Math.PI*2,false);
	c.fill();
	
	c.beginPath();
	c.fillStyle="red";
	c.arc(this.w2cx,this.w2cy,5,0,Math.PI*2,false);
	c.fill();

	
	
	
	c.fillStyle="#996633";
	c.fillRect(this.w2cx-1,this.w1cy-20,2,40);
	c.fill();
    c.fillStyle="#996633";
	c.fillRect(this.w2cx-20,this.w1cy-1,40,2);
	c.fill();
    
   	
    }
    //wheel part

//collision part
for(i=0;i<rocks.length;i++)
{
	if(this.x>rocks[i].x+rocks[i].r)
	{
		if(rocks[i].x+rocks[i].r>this.x&&rocks[i].y>this.y&&rocks[i].y<this.y+125)
		{
 			clearInterval(interval);
 			bgsound.pause();
 			gameover();
		}
	}
	else if(rocks[i].x-rocks[i].r>this.x+50)
	{
		if(rocks[i].x-rocks[i].r<this.x+50&&rocks[i].y>this.y&&rocks[i].y<this.y+125)
		{
			clearInterval(interval);
			bgsound.pause();
			gameover();
		}
	}
	else
	{
		if(rocks[i].y+rocks[i].r>this.y)
		{
			clearInterval(interval);
			bgsound.pause();
			gameover();
		}
	}

}
for(i=0;i<newrocks.length;i++)
{
	if(this.x>newrocks[i].x+newrocks[i].r)
	{
		if(newrocks[i].x+newrocks[i].r>this.x&&newrocks[i].y>this.y&&newrocks[i].y<this.y+125)
		{
			clearInterval(interval);
			bgsound.pause();
			gameover();
		}
	}
	else if(newrocks[i].x-newrocks[i].r>this.x+50)
	{
		if(newrocks[i].x-newrocks[i].r<this.x+50&&newrocks[i].y>this.y&&newrocks[i].y<this.y+125)
		{
			clearInterval(interval);
			bgsound.pause();
			gameover();
		}
	}
	else
	{
		if(newrocks[i].y+newrocks[i].r>this.y)
		{
			clearInterval(interval);
			bgsound.pause();
			gameover();
		}
	}

}
 
for(i=0;i<rocks.length;i++)
{   if(rocks[i].x+rocks[i].r<this.w1cx)
	{
	if(rocks[i].x+rocks[i].r>this.w1cx-10&&rocks[i].y+rocks[i].r>this.w1cy-10&&rocks[i].y<this.w1cy+10)
	{
		clearInterval(interval);
		bgsound.pause();
		gameover();
	}
   }
   else if(rocks[i].x-rocks[i].r>this.w2cx)
   {
   	if(rocks[i].x-rocks[i].r<this.w2cx+10&&rocks[i].y+rocks[i].r>this.w1cy-10&&rocks[i].y<this.w1cy+10)
	{
		clearInterval(interval);
		bgsound.pause();
		gameover();
	}
   }
   else{
   	if(rocks[i].y+rocks[i].r>this.w1cy-20)
   	{
   		clearInterval(interval);
   		bgsound.pause();
   		gameover();	
   	}
   }
}
for(i=0;i<newrocks.length;i++)
{   if(newrocks[i].x+newrocks[i].r<this.w1cx)
	{
	if(newrocks[i].x+newrocks[i].r>this.w1cx-10&&newrocks[i].y+newrocks[i].r>this.w1cy-10&&newrocks[i].y<this.w1cy+10)
	{
		clearInterval(interval);
		bgsound.pause();
		gameover();
	}
   }
   else if(newrocks[i].x-newrocks[i].r>this.w2cx)
   {
   	if(newrocks[i].x-newrocks[i].r<this.w2cx+10&&newrocks[i].y+newrocks[i].r>this.w1cy-10&&rocks[i].y<this.w1cy+10)
	{
		clearInterval(interval);
		bgsound.pause();
		gameover();
	}
   }
   else{
   	if(newrocks[i].y+newrocks[i].r>this.w1cy-20)
   	{
   		clearInterval(interval);
   		bgsound.pause();
   		gameover();	
   	}
   }
}


//collision part

}
this.update=function()
{
	// this.draw();
	if(right)
    {
    	this.x=this.x+this.dx;
    	cx=this.x;
    }
    if(left)
    {
    	this.x=this.x-this.dx;
    	cx=this.x;
    }
	if(this.x-20<0)
	{
		this.x=20;
		cx=this.x;
	}
	if(this.x+70>canvas.width)
	{

		this.x=canvas.width-70;
		cx=this.x;
	}
	
}

}

function gameover()
{
	canvasgame.style.display="none";
	display2.style.display="";
	
    if(score>highscore)
    {
    	highscore=score;
    }
    gameOver.play();
    myscore.textContent=score;
    highScore.textContent=highscore;
    var strhigh=JSON.stringify(highscore);
localStorage.setItem("highscore",strhigh);


}

function Rocks()
{
	this.r=Math.floor(Math.random()*50+20);
	this.prob=Math.floor(Math.random()*2);
	this.y=Math.floor(Math.random()*50+50);
	this.rdx=Math.floor(Math.random()*2 +1);
	this.rdy=Math.floor(Math.random()*2 +1);
	this.start=false;
	this.pos;
	 this.life=this.r;
	 this.divide=false;
	 this.acc=0.05;
	//true for right ,false for left
	if(this.prob==0)
	{
		this.x=-this.r;
		
		this.pos=true;
	}
	else if(this.prob==1)
	{
		this.x=canvas.width+this.r;
		this.pos=false;

	}
	this.draw=function()
	{
		c.beginPath();
		c.fillStyle="green";
		c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		c.fill();
		c.fillStyle="white";
		c.font="15px Fredoka One";
		c.fillText(this.life,this.x-5,this.y);
		
		
	}
	this.update=function(index)

 	{   this.index=index; 
		if(this.pos)
		{
		this.x+=this.rdx;}
		else
		{
			this.x-=this.rdx;
		}
		this.y+=this.rdy;
		this.rdy+=this.acc;
		this.draw();
	
	   	for(a=0;a<bullets.length;a++)
         {
  
          this.cc=centerDistance(bullets[a].x,bullets[a].y,this.x,this.y);
     if(this.cc<br+this.r)
     {   console.log(this.cc);
     	// clearInterval(interval);
     	this.life=this.life-5; 
     	bullets.splice(a,1);
     	score++;
        

     	
     } 

	}
	if(this.life<0 &&!this.divide)
     {
     	rocks.splice(index,1);
     	this.divide=true;
     	if(this.rdx>0)
        {newrocks.push(new Divrocks(this.x-this.r/2,this.y,this.r/2,-this.rdx));
        newrocks.push(new Divrocks(this.x+this.r/2,this.y,this.r/2,this.rdx));
    }
        else 
        {
          newrocks.push(new Divrocks(this.x-this.r/2,this.y,this.r/2,this.rdx));
        newrocks.push(new Divrocks(this.x+this.r/2,this.y,this.r/2,-this.rdx));	
        }
     }
    	
    	if(this.pos&&this.x-this.r>0)

		{
          this.start=true;
		}
		if(!this.pos&&this.x+this.r<canvas.width)
		{
			this.start=true;
		}
      if(this.start)
      {
           if(this.x+this.r>canvas.width)
           {
           	this.rdx=-this.rdx;
           }
           if(this.x-this.r<0)
           {
           	this.rdx=-this.rdx;
           }
           if(this.y+this.r>y+145)
           {
           	this.rdy=-this.rdy;
           }
       if(this.y-this.r<0)
       {
       	this.rdy=-this.rdy;
       }    
      }
       }
       
} 

function Divrocks(nx,ny,r,dx)
{
	this.dy=Math.floor(Math.random()*3+1);
    this.dx=dx;
    this.x=nx;
    this.y=ny;
    this.acc=0.05;
    this.r=Math.floor(r);
    this.life=this.r;
    this.draw=function()
    {
    	c.beginPath();
    	c.fillStyle="blue";
    	c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    	c.fill();
        c.fillStyle="white";
		c.font="10px Fredoka One";
		c.fillText(this.life,this.x-5,this.y);
		

    }
    this.update=function(i)
    {    this.draw();
         this.index=i;
         this.x+=this.dx;
         this.y+=this.dy;
         this.dy+=this.acc;
	   	for( a=0;a<bullets.length;a++)
         {
  
          this.cc=centerDistance(bullets[a].x,bullets[a].y,this.x,this.y);
     if(this.cc<br+this.r)
     {   console.log(this.cc);
     	// clearInterval(interval);
     	this.life=this.life-5; 
     	bullets.splice(a,1);
     	score++;
        

     	
     } }
     if(this.life<0)
     {
             newrocks.splice(this.index,1);
     }

    	  if(this.x+this.r>canvas.width)
           {
           	this.dx=-this.dx;
           }
           if(this.x-this.r<0)
           {
           	this.dx=-this.dx;
           }
           if(this.y+this.r>y+150)
           {
           	this.dy=-this.dy;
           }
       if(this.y-this.r<0)
       {
       	this.dy=-this.dy;
       }    
    }
}

function Drawbullet(x,y)
{
this.x=x+25;
this.y=y-7;
this.bdy=20;
this.time=0;
this.r=br;
this.draw=function()
{    	   
		
		// c.beginPath();
		// c.fillStyle="black";
		// // c.fillRect(this.x+44,this.y-10,12,10);
		// c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		// c.fill();
		c.drawImage(bulletImage,this.x,this.y-30,10,30);

	}
	this.update=function()
	{   this.draw();
		this.y=this.y-this.bdy;
		
    }
	
}
function centerDistance(x,y,x1,y1)
{
	var d=Math.floor(Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2)));
	return d;
}

document.addEventListener("keydown",function(e)
	{
     if(e.keyCode==39)
     {   console.log("key preesee");
        right=true;
        toggle=!toggle;
     }
     if(e.keyCode==37)
     {
     	console.log("left");
     	this.x-=this.dx;
        toggle=!toggle;
     	left=true;
     }

	});
document.addEventListener("keyup",function(e)
{
	if(e.keyCode==39)
     {   console.log("key preesee");
        right=false;
     }
     if(e.keyCode==37)
     {
     	console.log("left");
     	
     	left=false;
     }
});
function fnpause()
{
clearInterval(interval);
pausegame=true;
bgsound.pause();

}
 function  fnresume()
{
	if(pausegame==true)
	{
interval=setInterval(animate,20);}
pausegame=false;
bgsound.play();

}
document.addEventListener("keydown",function(e){
if(e.keyCode==32)
{ console.log("pause pressed");
  if(gameStart)
  {
  if(pausegame)
  {
    fnresume();
  }
  else
  {
    fnpause();
  }
}}
}  );




var canon=new Drawcanon(x,y);
var bullets=[];
var time=0;
var btime=0;
var rocks=[];





function animate()
{    
	c.clearRect(0,0,canvas.width,canvas.height);
    time++;
    btime=10-Math.floor(score/40);
    if(btime===0)
    {
    	btime=1;
    }

  canon.draw(toggle);
  canon.update();
  fillscore();
  
   if(time%btime==0)
  {bullets.push(new Drawbullet(cx,y));
  }
  for(i=0;i<bullets.length;i++)
  {
  	bullets[i].update();
  }
  if(time%400==0)
  {
  	rocks.push(new Rocks());
  }
  for(j=0;j<rocks.length;j++)
  {
  	rocks[j].update(j);
  }
  for(i=0;i<newrocks.length;i++)
  {
  	newrocks[i].update(i);
  }


}
