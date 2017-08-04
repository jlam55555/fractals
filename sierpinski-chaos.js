var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;
var vertices = {
  v1: {x: 0, y: height},
  v2: {x: width, y: height},
  v3: {x: width/2, y: height-(Math.sqrt(3)/2*height)}
};

ctx.fillRect(0, 0, width, height);

var iterations = 1e6;
var point = {};
point.x = Math.random()*width;
point.y = height-Math.random()*(-Math.abs((Math.sqrt(3)*height/width)*(point.x-width/2))+Math.sqrt(3)*width/2);
for(var i = 0; i < iterations; i++) {
  var vertex;
  switch(Math.floor(Math.random()*3)) {
    case 0:
      vertex = vertices.v1;
      break;
    case 1:
      vertex = vertices.v2;
      break;
    case 2:
    default:
      vertex = vertices.v3;
  }
  ctx.fillStyle = "#" + Math.floor(i*16777216/iterations).toString(16);
  ctx.fillRect(point.x, point.y, 1, 1);
  point = {x: (point.x+vertex.x)/2, y: (point.y+vertex.y)/2};
}
