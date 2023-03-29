var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["462ac158-ab83-44b6-aa54-4bfd3f1376ff","8fe3ebd1-74da-4e04-8be7-ab4cdd081609","a896833c-47e5-488f-ae91-a3cf025a6a7a","59a0830a-9210-435f-ae4b-176b7c60815b","edec065d-16f4-462a-92eb-14f0edc5f9a4","dabc7430-d898-4c0d-b58d-293ef1444a9f","32749e5b-1867-4413-9279-5c2fc4e54729","860b0696-b7e3-4ef7-86a2-dd4b6d046a28","e3df272e-87a5-45a5-b045-96554eb3a40e"],"propsByKey":{"462ac158-ab83-44b6-aa54-4bfd3f1376ff":{"name":"sprite_0.png_1","sourceUrl":"assets/v3/animations/LsiMbvh5aiDpcVGTT0Xa14MxfR8DmYFGioarc1eH1ZE/462ac158-ab83-44b6-aa54-4bfd3f1376ff.png","frameSize":{"x":15,"y":15},"frameCount":1,"looping":true,"frameDelay":4,"version":"nZh2zWzXfoFGj873PYM9FSWluUYfwDMt","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":15},"rootRelativePath":"assets/v3/animations/LsiMbvh5aiDpcVGTT0Xa14MxfR8DmYFGioarc1eH1ZE/462ac158-ab83-44b6-aa54-4bfd3f1376ff.png"},"8fe3ebd1-74da-4e04-8be7-ab4cdd081609":{"name":"porterias","sourceUrl":null,"frameSize":{"x":100,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"uwC5.YPu_13.eCLCvI8.tFmJ7cINmNMA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":20},"rootRelativePath":"assets/8fe3ebd1-74da-4e04-8be7-ab4cdd081609.png"},"a896833c-47e5-488f-ae91-a3cf025a6a7a":{"name":"porterias2","sourceUrl":null,"frameSize":{"x":100,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"xuG2n3rso57tO_j9kVv4s.9TRIUABlcw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":20},"rootRelativePath":"assets/a896833c-47e5-488f-ae91-a3cf025a6a7a.png"},"59a0830a-9210-435f-ae4b-176b7c60815b":{"name":"portero","sourceUrl":null,"frameSize":{"x":50,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"pjDCTOFwgZDBTIaFsYGevIyqhuF74eVz","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":10},"rootRelativePath":"assets/59a0830a-9210-435f-ae4b-176b7c60815b.png"},"edec065d-16f4-462a-92eb-14f0edc5f9a4":{"name":"portero2","sourceUrl":null,"frameSize":{"x":50,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"N7DsYWRVblfyHThPaCTbs88lU4Xc25f4","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":10},"rootRelativePath":"assets/edec065d-16f4-462a-92eb-14f0edc5f9a4.png"},"dabc7430-d898-4c0d-b58d-293ef1444a9f":{"name":"gradas","sourceUrl":null,"frameSize":{"x":400,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"kRfKYcWduM4t0YjLtFW2Xfi1_5X2FV8r","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":10},"rootRelativePath":"assets/dabc7430-d898-4c0d-b58d-293ef1444a9f.png"},"32749e5b-1867-4413-9279-5c2fc4e54729":{"name":"gradas2","sourceUrl":null,"frameSize":{"x":400,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"2Fy5qEtb61d7dJG8ZVcsbo6ozZvo2gOJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":10},"rootRelativePath":"assets/32749e5b-1867-4413-9279-5c2fc4e54729.png"},"860b0696-b7e3-4ef7-86a2-dd4b6d046a28":{"name":"gradas3","sourceUrl":null,"frameSize":{"x":10,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"F.BOfdSXLzmwD.YDw5.Fo0NPVyPTAMZO","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":400},"rootRelativePath":"assets/860b0696-b7e3-4ef7-86a2-dd4b6d046a28.png"},"e3df272e-87a5-45a5-b045-96554eb3a40e":{"name":"gradas4","sourceUrl":null,"frameSize":{"x":10,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"xB.vnGPLVpjhAtSLdOqCSQbghmHrBV3O","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":400},"rootRelativePath":"assets/e3df272e-87a5-45a5-b045-96554eb3a40e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.setAnimation("porterias")

var goal2=createSprite(200,382,100,20);
goal2.setAnimation("porterias2")

//variable para almacenar diferentes estados del juego
var gameState = "serve";

//hacer la cancha
var boundary1 = createSprite(200,5,400,10);
boundary1.setAnimation("gradas2")
var boundary2 = createSprite(200,395,400,10);
boundary2.setAnimation("gradas")
var boundary3 = createSprite(5,200,10,400);
boundary3.setAnimation("gradas3")
var boundary4 = createSprite(395,200,10,400);
boundary4.setAnimation("gradas4")



//crear objetos y asignarles colores
var striker = createSprite(200,200,15,15);
striker.setAnimation("sprite_0.png_1")

var playerMallet = createSprite(200,50,50,10);
playerMallet.setAnimation("portero")

var computerMallet = createSprite(200,350,50,10);
computerMallet.setAnimation("portero2")

//variables de puntuación
var playerScore=0;
var compScore=0;

function draw() {
  //despejar la pantalla
  background("green");
  
  if(gameState=="serve")
  {
      //mostrar texto
      //Agregar el texto “Presiona espacio para golpear” 
      textSize(22);
      fill ("gold");
      text("Presiona ESPACIO para golpear",45,250);
      
      //servir el delantero cuando se presiona la barra espaciadora
      if (keyDown("space")) {
      striker.velocityX =+10;
      striker.velocityY =+5;
        //cambiar el estado del juego
         gameState="play";}

  }
  if(gameState=="play")
{
  //hacer que la paleta del jugador se mueva con las teclas de flecha
  if(keyDown("left")){
  playerMallet.x = playerMallet.x-10;
  }
  if(keyDown("right")){
  playerMallet.x = playerMallet.x+10;
  }
  if(keyDown("up")){
  if(playerMallet.y>25)
  playerMallet.y = playerMallet.y-10;
  }
  if(keyDown("down")){
  if(playerMallet.y<120)
  playerMallet.y = playerMallet.y+10;
  }
  if(striker.isTouching(goal1)){
  compScore = compScore + 1;
  gameState="serve";
  playerMallet.x=200;
  playerMallet.y=50;
  striker.x=200;
  striker.y=200;
  striker.velocityY=0;
  striker.velocityX=0;
  }
//el movimiento de la computadora
  computerMallet.x = striker.x;
  if (compScore===5){
  gameState="end";
  }}
  
  if(gameState=="end"){
  striker.velocityY=0;
  striker.velocityX=0;
  playerMallet.x=200;
  playerMallet.y=50;
  striker.x=200;
  striker.y=200;
  textSize(25);
  fill("red");
  text("¡Fin del juego!",130,160);
  }
  
  //mostrar puntuaciones
  textSize(22);
  fill("white");
  text(compScore, 25,235);
  text(playerScore,25,185);
  
  //Puntuación
  
     if(striker.isTouching(goal1))
      { 
        compScore = compScore + 1;
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore = playerScore + 1;
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
   

  //dibujar la línea al centro
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //crear límites en los bordes 
  //hacer que el delantero rebote con el borde superior e inferior
  createEdgeSprites();
  
  striker.bounceOff(boundary1);
  striker.bounceOff(boundary2);
  striker.bounceOff(boundary3);
  striker.bounceOff(boundary4);
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(boundary1);
  playerMallet.bounceOff(boundary2);
  playerMallet.bounceOff(boundary3);
  playerMallet.bounceOff(boundary4);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(boundary1);
  computerMallet.bounceOff(boundary2);
  computerMallet.bounceOff(boundary3);
  computerMallet.bounceOff(boundary4);
  computerMallet.bounceOff(edges);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
