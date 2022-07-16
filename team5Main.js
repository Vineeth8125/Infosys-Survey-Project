function feedback(){
	document.getElementById("feedback").style.display="none"
	document.getElementById("feedback1").style.display="block"
	document.querySelector(".transparent5").style.display="block"
}
function feedback1(){
	document.getElementById("feedback").style.display="block"
	document.getElementById("feedback1").style.display="none"
	document.querySelector(".transparent5").style.display="none"
}
var wrong=document.getElementById('x');
let filename=document.querySelector('.filename');
let imagediv=document.querySelector('.img')
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
const dropZoneElement = inputElement.closest(".drop-zone");
const dropZoneButton = document.querySelector(".drop");
const msg=document.querySelector('.team5-div1_1');
dropZoneButton.addEventListener("click", (e) => {
    inputElement.click();
});

inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
    updateThumbnail(dropZoneElement, inputElement.files[0]);

    }
});

dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
});

["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
    dropZoneElement.classList.remove("drop-zone--over");
    });
});

dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
    inputElement.files = e.dataTransfer.files;
    updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
});
});

function updateThumbnail(dropZoneElement, file) {
let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

// First time - there is no thumbnail element, so lets create it
if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    filename.appendChild(thumbnailElement);
    wrong.style.display='block';
    document.getElementById("drop-display").disabled= true;
    document.getElementById("submit").disabled = false;
	document.getElementById("d1").style.color="rgba(0, 0, 0, 0.5)";
	document.getElementById("d2").style.color="rgba(0, 0, 0, 0.5)";
    document.getElementById('team5-div1_1').style.display='block';
    document.getElementById('progressbar').style.display='block';
    document.getElementById('img5').style.display='block';
    document.getElementById('uploaded-after').style.display='block';
    document.getElementById("file-size").style.display='block';
    document.getElementById("file-size").innerHTML=formatBytes(file.size);
    setTimeout((e)=>{
        document.getElementById('progressbar').value='50';
    },1000)
    setTimeout((e)=>{
        document.getElementById('progressbar').value='100';
    },1000)

    setTimeout((e)=>{
        document.getElementById('team5-div1_1').innerHTML=file.name+' file added';
    },1000)
    setTimeout((e)=>{
        document.getElementById('team5-div1_1').style.display='none';
	document.getElementById('team5-div1_1').innerHTML='';
    },3000)
}



function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

thumbnailElement.dataset.label = file.name;

wrong.addEventListener('click',(e)=>{
    thumbnailElement.classList.remove("drop-zone__thumb");
    document.getElementById("drop-display").disabled = false;
    document.getElementById("submit").disabled = true;
    document.getElementById("d1").style.color="rgba(0, 0, 0, 1)";
	document.getElementById("d2").style.color="rgba(0, 0, 0, 1)";
    document.getElementById('img5').style.display='none';
    document.getElementById('progressbar').style.display='none';
    wrong.style.display='none';
    document.getElementById('uploaded-after').style.display='none';
    document.getElementById("file-size").style.display='none';
})
// Show thumbnail for image files
if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
    imagediv.style.backgroundImage = `url('${reader.result}')`;
    };
} else {
    imagediv.style.backgroundImage = null;
}
}
function validate(){
	document.getElementById("error1").style.display="none"
	document.getElementById("error").style.display="none"
	if(document.getElementById("drop-display").files.length=="0"){
		document.getElementById("error").style.display="block"
		return false
	}
	else{
		let size=document.getElementById("drop-display").files[0].size
		size=size/1024
		size=size/1024
		if(size>5){
			document.getElementById("error1").style.display="block"
			return false
	}
	}
	

}