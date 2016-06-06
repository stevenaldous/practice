document.addEventListener('DOMContentLoaded',function(){

  document.getElementById('toC').addEventListener('click',function(){
    var int = parseInt(document.getElementById('celsius').value);
    var toC = function(num){
      return parseInt((num -32)/(9/5))
    }
    document.getElementById('temp').innerHTML = toC(int);
  });
  document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('celsius').value = '';
    document.getElementById('temp').innerHTML = '--';
    animate('temp')
  });


  document.getElementById('').addEventListener('onload',function(){
    alert('There is a change!');


  })



 });
