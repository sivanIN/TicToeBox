
 let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 
 
 let items = document.querySelectorAll('.grid-item');
 items.forEach(item => {
   item.addEventListener('mouseover', () => {
     item.style.backgroundColor = `${randomColor()}`;
   });
 });

 function reset(){

items.forEach(item => {
    
      item.style.backgroundColor = "";
    
  });
 }
