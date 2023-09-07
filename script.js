var navvbar=document.querySelectorAll('.navv a');

for(var i=0;i<navvbar.length;i++){
    navvbar[i].addEventListener('click',function(event){
      event.preventDefault();
      var targetsectionid=this.textContent.trim().toLowerCase();
       console.log(targetsectionid);
       var targetsection=document.getElementById(targetsectionid);
       console.log(targetsection);
       var scrollinterval=setInterval(function(){
        var cordinates=targetsection.getBoundingClientRect();
           if(cordinates.top<0){
                clearInterval(scrollinterval);
                return;
            }
               window.scrollBy(0,50);
    
          },30)

    
    })
}


var progressbars=document.querySelectorAll('.skill-progress >div');
var skillcontainer=document.getElementById('skill-container');
var animationdone=false;
window.addEventListener('scroll',checkscroll);

   function insitilisebars(){
    for(let bar of progressbars){
        bar.style.width = 0 + '%';
     }
   }
   insitilisebars();

   function fillbars(){
      for(let bar of progressbars){
           let tragetwidth=bar.getAttribute('data-bar-width');
           let currwidth=0;
           let interval=setInterval(function(){
                 if(currwidth>tragetwidth){
                    clearInterval(interval);
                    return;
                 }
                 currwidth++;
                 bar.style.width=currwidth +'%';

               },8);
       }
   }

 
function checkscroll(){
    var cordinates=skillcontainer.getBoundingClientRect();
    if(!animationdone && cordinates.top <= window.innerHeight){
            animationdone=true;
            console.log("hey i am in skill section");        
            fillbars()
    }else if(cordinates.top>window.innerHeight){
        animationdone=false;
        insitilisebars();
    }
}


function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

var scrl=document.getElementsByClassName('scrl-no');
  window.addEventListener('scroll', function(){
         scrl[0].textContent=Math.round(getScrollPercent())+"%";
        //  console.log(getScrollPercent());
  })
  
 

// var eduse=document.getElementById("education");

// var cordinates=eduse.getBoundingClientRect();




