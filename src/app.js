/* eslint-disable */


window.onload = function() {
  //write your code here

  let quienes = ["El perro","El gato","El panda"];
  let ques = ["Se comió la tarea","Cazó un pájaro","Rompió la mesa"]
  let cuandos = ["Cuando estaba saltando","Cuando Miraba el arbol","Cuando comía Bamboo"]
  
  let quien = quienes [Math.floor(Math.random() * quienes.length)];
  let que = ques [Math.floor(Math.random() * ques.length)];
  let cuando = cuandos [Math.floor(Math.random() * cuandos.length)];

  let p = document.getElementById('excuse');
  p.innerHTML = quien +" "+que+" "+cuando;
  console.log("Hello Rigo from the console!");
};

