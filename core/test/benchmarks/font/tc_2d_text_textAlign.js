ctx.fillStyle = '#000000';
ctx.strokeStyle = "blue";
ctx.moveTo(125*ratio, 10*ratio);
ctx.lineTo(125*ratio, 300*ratio);
ctx.stroke();
ctx.font = 15*ratio+"px Arial-MT";
ctx.textAlign = "start";
ctx.fillText("textAlign=start", 125*ratio, 10*ratio);
ctx.textAlign = "end";
ctx.fontSize = 15**ratio+'px';
ctx.fillText("textAlign=end", 125*ratio, 50*ratio);
ctx.textAlign = "left";
ctx.fillText("textAlign=left", 125*ratio, 100*ratio);
ctx.textAlign = "center";
ctx.fillText("textAlign=center", 125*ratio, 150*ratio);
ctx.textAlign = "right";
ctx.fillText("textAlign=right", 125*ratio, 200*ratio);
