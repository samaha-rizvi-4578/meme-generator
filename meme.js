
function downloadCanvas()
{
    let image=canvas.toDataURL();
    var tmpLink = document.createElement( 'a' );  
tmpLink.download = 'image.png';
tmpLink.href = image;  


document.body.appendChild( tmpLink );  
tmpLink.click();  
document.body.removeChild( tmpLink );  
}

    let colour="";
   let top_Text=document.getElementById('topText');
   let bottom_Text=document.getElementById('bottomText');
   let imageInput=document.getElementById('chooseFile');
   let canvas=document.getElementById('memeResult');
   let  generateBtn=document.getElementById('btn');
   let can=canvas.getContext('2d');
   //let btnRed = document.querySelector('#btnRed');
   //let btnBlue = document.querySelector('#btnBlue');
  //let btnGreen = document.querySelector('#btnGreen');

    generateBtn.addEventListener('click', function(){
     let reader=new FileReader();
     reader.onload=function(){
        let img=new Image;
        img.src=reader.result;

        canvas.width=img.width;
        canvas.height=img.height;
    
        can.clearRect(0,0, canvas.width,canvas.height);
        can.drawImage(img,0,0);
    
        let fontSize=canvas.width/15;
        can.font=fontSize+ 'px Impact';
        can.fillStyle=colour;
        can.strokeStyle="black";
        can.lineWidth=fontSize/15;
        
        can.textAlign='center';
    
        can.fillText(top_Text.value,canvas.width/2, fontSize,canvas.width );
        can.strokeText(top_Text.value,canvas.width/2, fontSize,canvas.width );
    
    
        can.fillText(bottom_Text.value,canvas.width/2, canvas.height-10,canvas.width );
        can.strokeText(bottom_Text.value,canvas.width/2, canvas.height-10,canvas.width );


        document.getElementById('dwnbtn').style.display="inline-block";


    

     };

     reader.readAsDataURL(imageInput.files[0]);
     showbutton();



     
    });
    //color changing
    function white(){
        document.getElementById('topText').style.color="black";
        document.getElementById('bottomText').style.color="black";
        colour="white";
    }
    
    function red(){
        document.getElementById('topText').style.color="red";
        document.getElementById('bottomText').style.color="red";
        colour="red";
    }

    function blue(){
        document.getElementById('topText').style.color="blue";
        document.getElementById('bottomText').style.color="blue";
        colour="blue";
    }

    function green(){
        document.getElementById('topText').style.color="green";
        document.getElementById('bottomText').style.color="green";
        colour="green";
    }

    function showbutton()
    {
        let x=getElementById('dwnbtn')
        x.style.display='none';




    }


    

