import './../styles/appStyles.scss';
import './../styles/scss.scss';
import $ from 'jquery';

let item;
window.onload=()=>{
  item = document.getElementById('horizontal-list');  
}
window.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) item.scrollLeft += 20;
  else item.scrollLeft -= 20;
});

$(function(){
  $(".block").mouseenter(function(){
    $("div > div:not(:animated)",this).show(1000);
  });
  $(".block").mouseleave(function(){
    $("div > div:not(:animated)",this).hide(1000);
  })
});
