document.body.addEventListener('keydown', function(event) {
    console.log(event.key);
    console.log(event.keyCode);
    let keycodeval = event.keyCode;
    if(keycodeval==65){
        document.getElementsByTagName('audio')[0].play()
        document.getElementsByClassName('button-container')[0].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==83){
        document.getElementsByTagName('audio')[1].play()
        document.getElementsByClassName('button-container')[1].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==68){
        document.getElementsByTagName('audio')[2].play()
        document.getElementsByClassName('button-container')[2].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==70){
        document.getElementsByTagName('audio')[3].play()
        document.getElementsByClassName('button-container')[3].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==71){
        document.getElementsByTagName('audio')[4].play()
        document.getElementsByClassName('button-container')[4].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==72){
        document.getElementsByTagName('audio')[5].play()
        document.getElementsByClassName('button-container')[5].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==74){
        document.getElementsByTagName('audio')[6].play()
        document.getElementsByClassName('button-container')[6].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==75){
        document.getElementsByTagName('audio')[7].play()
        document.getElementsByClassName('button-container')[7].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
   else if(keycodeval==76){
        document.getElementsByTagName('audio')[8].play()
        document.getElementsByClassName('button-container')[8].style.boxShadow ='0px 0px 10px 5px darkgoldenrod';
    }
    });

    document.body.addEventListener('keyup', function(event) {
      let allelements = document.querySelectorAll('.button-container');
      for(i=0;i<allelements.length;i++)
      {
        allelements[i].style.boxShadow ='none';
      }
      // document.getElementsByClassName('button-container')[0].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[1].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[2].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[3].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[4].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[5].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[6].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[7].style.boxShadow ='none';
      // document.getElementsByClassName('button-container')[8].style.boxShadow ='none';
      console.log(event)
    })
        //   s83,d68,f70,g71,h72,j74,k75,l76,;186,  