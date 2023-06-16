
document.addEventListener("DOMContentLoaded", function() {

// Convierte la dataURL a un File, necesario para la api share
function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length,
        u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }
  // -------------

var btnCompartir = document.getElementById('btnCompartir');
var myCanvas = document.getElementById('myCanvas');
    myCanvas.width = 1080;
    myCanvas.height = 1920;
var ctx = myCanvas.getContext("2d");



const img = new Image(); // Create new img element
img.addEventListener(
  "load",
  () => {
    // execute drawImage statements here
    ctx.drawImage(img, 0, 0);

    // Dorsal
    ctx.font = "120px Arial";
    var dorsal = "210";
    ctx.fillText(dorsal, myCanvas.width/2 - ctx.measureText(dorsal).width/2, 690);

    // Distancia
    ctx.font = "100px Arial";
    var distance = "10k";
    ctx.fillText(distance, myCanvas.width/2 - ctx.measureText(distance).width/2, 890);

    // Nombre
    ctx.font = "80px Arial";
    var name = "APELLIDO, Nombre"
    ctx.fillText(name, myCanvas.width/2 - ctx.measureText(name).width/2, 1050);

    // Tiempo
    ctx.font = "90px Arial";
    var time = "00:00:00"
    ctx.fillText(time, myCanvas.width/2 - ctx.measureText(time).width/2, 1220);

    // Categoría
    ctx.font = "70px Arial";
    ctx.fillStyle = "#FFF";
    var category = "003"
    ctx.fillText(category, myCanvas.width/2 - ctx.measureText(category).width/2, 1450);

    // General
    ctx.font = "70px Arial";
    ctx.fillStyle = "#FFF";
    var general = "020"
    ctx.fillText(general, myCanvas.width/2 - ctx.measureText(general).width/2, 1590);

    // Información general
    ctx.font = "40px Arial";
    ctx.fillStyle = "#2b2b2b";
    var info = "Grupos deportivos Holmberg";
    ctx.fillText(info, myCanvas.width/2 - ctx.measureText(info).width/2, 1875);




  },
  false
);
img.src = "./images/flokoob-template.svg"; // Set source path


    
    

btnCompartir.addEventListener('click', function(){
    console.log('Compartiendo...');

    const dataURL = myCanvas.toDataURL('image/jpg');
    const file = dataURLtoFile(dataURL, 'story.jpg');
  
    const story = {
        title: 'Flokoob',
        text: `Resultados de ${name}`,
        url: 'https://epontoni.github.io',
        files: [file],
    };
  
  // https://www.youtube.com/watch?v=FRQCQrpe1GE
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
  if(navigator.share) {
    navigator
      .share(story)
      .then(() => console.log('Ok'))
      .catch(error => console.log('Error', error));
  } else {
    console.log('No hay soporte para compartir.')
  }
});


});