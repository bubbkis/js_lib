/*
 角丸の矩形を描く
 Example: strokeRoundedRect(ctx,10,10,100,80,10);
          strokeRoundedRect(ctx,150,10,100,80,30);
*/
function strokeRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x+radius, y);
  ctx.arcTo(x+width, y       , x+width, y+height, radius);
  ctx.arcTo(x+width, y+height, x      , y+height, radius);
  ctx.arcTo(x      , y+height, x      , y       , radius);
  ctx.arcTo(x      , y       , x+width, y       , radius);
  ctx.stroke();
}
