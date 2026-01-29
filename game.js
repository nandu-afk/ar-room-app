let cube = document.getElementById("cube");
let score = 0;

function addCube() {
  cube.setAttribute("visible", true);
  cube.setAttribute("position", {x:0, y:0.5, z:0});
}

function changeWallColor() {
  let colors = ["#FF0000","#00FF00","#0000FF","#FFFF00"];
  let color = colors[Math.floor(Math.random()*colors.length)];
  document.getElementById("floor").setAttribute("color", color);
}

function measureObject() {
  // Simple mock measurement: random between 50-150 cm
  let measurement = Math.floor(Math.random()*100)+50;
  alert("Object measured: "+measurement+" cm");
  score += Math.floor(measurement/10);
  document.getElementById("score").innerText = "Score: "+score;
}
