import './../styles/appStyles.scss';
import './../styles/scss.scss';

let sX;
let minX;
let windowWidth;

window.onload=()=>{  
  document.body.style.transition = "1000ms cubic-bezier(0.23, 1, 0.32, 1)"
  sX = window.scrollX;
  windowWidth = window.innerWidth;
  minX = -1 * document.body.clientWidth + windowWidth;
  console.log("document.body.clientWidth" + document.body.clientWidth);
  console.log("windowWidth" + windowWidth);
  console.log("minX" + minX);
}
window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
      sX -= 20;
      if(sX < minX){sX= minX;}
      let scroll = "translateX(" + sX + "px)";
      document.body.style.transform = scroll;
      
    }
    else if(e.deltaY < 0){
      sX += 20;
      if(0 < sX){sX=0;}
      let scroll = "translateX(" + sX + "px)";
      document.body.style.transform = scroll;
    } 
  //}
});
