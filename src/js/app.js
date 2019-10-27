import './../styles/appStyles.scss';
import './../styles/scss.scss';
import $ from 'jquery';

let item;
window.onload=()=>{
  item = document.getElementById('horizontal-list');  
}
window.addEventListener('wheel', function(e) {
  if(e.deltaX == 0){
    if (e.deltaY > 0) {
      //item.scrollLeft += 20;
      $("body").css("transition","1000mx 'cubic-bezier(0.23, 1, 0.32, 1)'")
      $("body").css("transform","translateX(-20px)")
      
    }
    else if(e.deltaY < 0) item.scrollLeft -= 20;
  }
});
