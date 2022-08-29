var img, backgroundImage, video, screenshot,download, ocultarVideo, count;
var enable = false;
const canvas = document.createElement('canvas');
var format = '.png';
const valor=0;


const init = () => {
    hasGetUserMedia()
    if (enable){
        //box1 = document.getElementById('Container');
        //prompt2 = document.getElementById('prompt2');
        screenshot = document.getElementById('screenshot');
		ocultarVideo = document.getElementById('mostrar');
		
        //clear = document.getElementById('clear');
        //select = document.getElementsByTagName('select')[0]
        count = document.getElementsByTagName('span')[0]
        img = document.getElementsByTagName('img')[0];
        video = document.getElementsByTagName('video')[0];
		//contenedor = document.getElementsByClassName('container')[0];
        //download = document.getElementsByClassName('download')[0]
        //download.addEventListener('click', onDownload)
        //document.getElementsByClassName('capture')[0].addEventListener('click', onCapture)
        screenshot.addEventListener('click', conteo);
		ocultarVideo.addEventListener('click', ocultar1);
		onCapture();
    }  
}

const hasGetUserMedia = () => {
    if (!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia){
        alert('Unable to enable camera.')
    } else {
        enable = true
    }
}

const onCapture = () => {
    navigator.mediaDevices
                .getUserMedia({video: true})
                .then(stream => {
                    video.srcObject = stream
                    //prompt1.style.display = 'none';
                    //prompt2.style.display = 'block';
                    screenshot.disabled = false;
                    //clear.disabled = false;
                })
                .catch(err=>alert('Error occurred: ' + err));
}


const conteo = () => {
    
	count.style.display = 'block'
	totalTime = 5
	updateClock();
	setTimeout(onScreenshot, 5500);
	//window.alert("Pasó code");
	
}

const onScreenshot = () => { 
	count.style.display = 'none'
		
    canvas.width = video.videoWidth;; //canvas.width = video.videoWidth;
    canvas.height = video.videoHeight; //canvas.height = video.videoHeight;
    
	canvas.getContext('2d').drawImage(video, 0, 0);
    //prompt2.style.display = 'none'
	
    img.src = canvas.toDataURL('image/png');
   
    //img.style.display = 'block';
	video.style.display = 'none';
	//img.style.transform:rotate(30deg);
	//document.querySelector("#img").style.transform = "rotate(15deg)";
	//img.style.transform:rotate(30deg);
	
    //download.disabled = false
    //select.style.visibility = 'visible'
    //label.style.visibility = 'visible'
	
	//acá bajo la imagen
	//img.style.transform:rotate(30deg);
	onDownload();
    rotar();
	
	
	
}

const rotar = () => {
    console.log('foto');
    img.style="transform:rotate(30deg)"
    
    
}


const onDownload = () => {
    download = document.createElement('a');
    download.href = img.src;
    download.download = 'yourScreenshot' + '.png';
    //download.style.display = 'none';
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
};


document.addEventListener('DOMContentLoaded', init)


//rutina para conteo regresivo
//window.onload = updateClock;

//acá van la cantidad de segundos
var totalTime = 0;

function updateClock() {
  document.getElementById('countdown').innerHTML = totalTime;
  if(totalTime==0){
    console.log('Final');
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}




//NO OLVIDAR agregar que refresque video cuando muestro de nuevo la etiqueta >> problema tengo que habilitar la cam de nuevo
const ocultar1 = () => {
	//onCapture(); //refresco la captura
    /*window.alert('funciona');*/
	img.style.display = 'none';
	video.style.display = 'block'
		
	/*box1.style.display = 'block';*/
	
};

//detecto si se presiona la tecla enter
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        window.alert('Enter is pressed!');
    }
});



