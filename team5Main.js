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
const dropZoneButton = inputElement.closest(".drop-zone");
const image=document.querySelector('.img');
dropZoneElement.addEventListener("click", (e) => {
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
}
thumbnailElement.dataset.label = file.name;

wrong.addEventListener('click',(e)=>{
    thumbnailElement.classList.remove("drop-zone__thumb");
    wrong.style.display='none';
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