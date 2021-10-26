marks=[
  {
      carMark:"toyota",
      CarName:'Toyota'
  },
  {
      carMark:"kia",
      CarName:'Kia'
  },
  {
      carMark:"tesla",
      CarName:'Tesla'
  },
  {
      carMark:"mercedes",
      CarName:'Mercedes'
  },
  {
      carMark:"bmw",
      CarName:'BMW'
  },
  {
      carMark:"volkswagen",
      CarName:'Volkswagen'
  },
  {
      carMark:"hyundai",
      CarName:'Hyundai'
  }
]


images=[
  {
      mark:"toyota",
      src:'images/toyota-1.jpg',
    
  },
  {
      mark:"mercedes",
      src:'images/benz-1.jpg',
     
  },
  {
      mark:"volkswagen",
      src:'images/wolks-1.jpg',
     
  },
  {
      mark:"kia",
      src:'images/kia-1.jpg',
     
  },
  {
      mark:"hyundai",
      src:'images/hyundai-1.jpg',
     
  },
  {
      mark:"bmw",
      src:'images/bmw-1.jpg',
      
  },
  {
      mark:"tesla",
      src:'images/tesla-2.jpg',
      
  },
  {
      mark:"toyota",
      src:'images/toyota-2.webp',
    
  },
  {
      mark:"mercedes",
      src:'images/benz-2.jpg',
     
  },
  {
      mark:"volkswagen",
      src:'images/volks-2.jpg',
     
  },
  {
      mark:"kia",
      src:'images/kia-2.jpg',
     
  },
  {
      mark:"hyundai",
      src:'images/hyundai-2.jpg',
     
  },
  {
      mark:"bmw",
      src:'images/bmw-2.jpg',
      
  },
  {
      mark:"toyota",
      src:'images/toyota-3.jpg',
    
  },
  {
      mark:"mercedes",
      src:'images/benz-3.jpg',
     
  },
  {
      mark:"kia",
      src:'images/kia-3.jpg',
     
  },
  {
      mark:"hyundai",
      src:'images/hyundai-3.jpg',
     
  },
  {
      mark:"bmw",
      src:'images/bmw-3.jpg',
      
  },
  {
      mark:"tesla",
      src:'images/tesla-4.jpg',
     
  },
  {
      mark:"toyota",
      src:'images/toyota-4.jpg',
      
  },
 

]




const buttons=document.querySelector('.buttons');
const galleryImages =document.querySelector('.pictures');

marks.forEach((element)=>{
  txt=`
  <span class="item" data-name='${element.carMark}'>${element.CarName}</span>
 `
  buttons.innerHTML+=txt;
});

images.forEach((element)=>{
  txt=`
  <div class="image" data-name='${element.mark}'><span><img src="${element.src}" alt=""></span></div>
 `
 galleryImages.innerHTML+=txt;
});
const filterImg = document.querySelectorAll(".pictures .image");
buttons.onclick = (selectedItem)=>{ 
  if(selectedItem.target.classList.contains("item")){ 
      buttons.querySelector(".active").classList.remove("active");
    selectedItem.target.classList.add("active");

    let filterName = selectedItem.target.getAttribute("data-name"); 
    filterImg.forEach((image) => {
      let filterImges = image.getAttribute("data-name"); 
      if((filterImges == filterName) || (filterName == "all")){
        image.classList.remove("hide"); 
        image.classList.add("show"); 
      }else{
        image.classList.add("hide"); 
        image.classList.remove("show"); 
      }
    });
  
  }

}
for (let i = 0; i < filterImg.length; i++) {
  filterImg[i].setAttribute("onclick", "preview(this)"); 
}

const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
document.querySelector("body").style.overflow = "hidden";
let selectedPrevImg = element.querySelector("img").src; 
let selectedImgCategory = element.getAttribute("data-name"); 
previewImg.src = selectedPrevImg; 
categoryName.textContent = selectedImgCategory; 
previewBox.classList.add("show"); 
shadow.classList.add("show"); 
closeIcon.onclick = ()=>{ 
  previewBox.classList.remove("show"); 
  shadow.classList.remove("show"); 
  document.querySelector("body").style.overflow = "auto"; 
}
}






