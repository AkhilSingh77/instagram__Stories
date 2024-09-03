const carouselElement = document.querySelector('.wrapper__carousel');
const shiftElements = document.querySelectorAll('.shift');

const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const cancelElement = document.querySelector('.cancel');
const overlayElement = document.querySelector('.overlay');
const overlayCenterVideoElement = document.querySelector('.overlay__center--video');
const overlayLeftElement = document.querySelector(".left--overlay");
const overlayRightElement = document.querySelector(".right--overlay");
const rightMoveOverlay = document.querySelector('.shiftOverlay--right');
const leftMoveOverlay = document.querySelector('.shiftOverlay--left')
const rigthOverlayDiv = document.querySelector('.overlay__side--right');
const leftOverlayDiv = document.querySelector('.overlay__side--left');



cancelElement.addEventListener('click',()=>{
    overlayElement.classList.remove('displayFlex');
})

let centerId;



const mediaItems = [
  {
    id: 1,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2024/06/06/215484_tiny.mp4"
  },
  {
    id: 2,
    imageUrl: "https://cdn.pixabay.com/photo/2024/08/02/21/54/antique-car-8940770_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2022/12/18/143419-782363231_tiny.mp4"
  },
  {
    id: 3,
    imageUrl: "https://cdn.pixabay.com/photo/2023/10/10/15/37/motorcycle-8306765_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2023/10/22/186115-877653483_tiny.mp4"
  },
  {
    id: 4,
    imageUrl: "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2024/07/14/221180_tiny.mp4"
  },
  {
    id: 5,
    imageUrl: "https://cdn.pixabay.com/photo/2024/06/29/10/13/girl-8861154_1280.png",
    videoUrl: "https://cdn.pixabay.com/video/2024/07/27/223461_tiny.mp4"
  },
  {
    id: 6,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2024/03/03/202749-918944227_tiny.mp4"
  },
  {
    id: 7,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2023/10/15/185092-874643408_tiny.mp4"
  },
  {
    id: 8,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2023/10/07/183960-872226574_tiny.mp4"
  },
  {
    id: 9,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2024/07/27/223459_tiny.mp4"
  },
  {
    id: 10,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2020/09/16/50109-459915579_tiny.mp4"
  },
  {
    id: 11,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2022/09/29/132932-755272963_tiny.mp4"
  },
  {
    id: 12,
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/25/10/50/mosque-8531576_1280.jpg",
    videoUrl: "https://cdn.pixabay.com/video/2024/04/18/208442_tiny.mp4"
  }
];

leftMoveOverlay.addEventListener('click',()=>{

  
  let value = centerId -1;
  centerId = value;
   if(value < 1 ){
    value = 1;
    centerId = value;
    return
  }
  else{
    onChange();

    showvideo(value);
  }
  
 
})

rightMoveOverlay.addEventListener('click',()=>{
  let value = centerId + 1;
  centerId = value;
  if(value > arrayLength){
    value = arrayLength;
    centerId = value;
    return
   }
   else{
    onChange();
    showvideo(value);
   }
  

})

rigthOverlayDiv.addEventListener('click',()=>{
  let value = centerId + 1;
  centerId = value;
  if(value > arrayLength){
    value = arrayLength;
    centerId = value;
    return
   }
   else{
    onChange();
    showvideo(value);
   }
  console.log("right")
})



leftOverlayDiv.addEventListener('click',()=>{
  let value = centerId -1;
  centerId = value;
   if(value < 1 ){
    value = 1;
    centerId = value;
    return
  }
  else{
    onChange();
    showvideo(value);
  }
  
})
const arrayLength = mediaItems.length;
console.log(arrayLength);




mediaItems.forEach((single) => {
  const imageSrc = single.imageUrl;

  const liElement = document.createElement('li');
  liElement.classList.add('imgDiv');
  liElement.id = single.id;


  const imgElement = document.createElement('img');

  imgElement.src = imageSrc;
  imgElement.alt = 'image';
  imgElement.classList.add('imgDiv--img');
  imgElement.draggable = false;

  
  liElement.appendChild(imgElement);

  liElement.addEventListener('click',(e)=>{
   
    liElement.classList.add('watched');
  const num = Number(e.currentTarget.id);
  centerId = num;
  onChange();
    showvideo(num);
    overlayElement.classList.add('displayFlex');
   
  })
  
  carouselElement.appendChild(liElement);
});


function showvideo(id){
  
  const mediaItem = mediaItems.find(item => item.id === id);



  const url=  mediaItem.videoUrl;
  overlayElement.classList.remove('displayNone');
  overlayCenterVideoElement.src = url;
 
  overlayCenterVideoElement.removeAttribute('poster');
  overlayLeftElement.removeAttribute('poster');
  overlayRightElement.removeAttribute('poster');

 const leftnum = id-1;
 if(leftnum < 1){
  overlayLeftElement.poster = "pics/Story_Finished.jpeg" ;
 }
 else{

 showleft(leftnum);
 }

 const rightnum = id+1;
 if(rightnum > arrayLength){
  overlayRightElement.poster = " pics/Story_Finished.jpeg" ;
 }
 else{

 showRight(rightnum)
 }
}

function showleft(num){
  const mediaItem = mediaItems.find(item => item.id === num);

  const url=  mediaItem.videoUrl;
  overlayElement.classList.remove('displayNone');
  overlayLeftElement.src = url;
}

function showRight(num){
  const mediaItem = mediaItems.find(item => item.id === num);

  const url=  mediaItem.videoUrl;
  overlayElement.classList.remove('displayNone');
  overlayRightElement.src = url;
}

const singleCardElement = document.querySelector('.imgDiv').offsetWidth;


let isDragging = false;
let startX;
let startScrollLeft;



shiftElements.forEach(single => {
  single.addEventListener('click', () => {
   
    const scrollAmount = singleCardElement * 2; 
   
   carouselElement.scrollLeft += single.id === "left" ? -scrollAmount : scrollAmount;

  });
});

const draggingFunctionStart = (e) => {
  isDragging = true;
  carouselElement.classList.add('dragging');
  startX = e.pageX - carouselElement.offsetLeft;
  startScrollLeft = carouselElement.scrollLeft;
};

const draggingFunction = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carouselElement.offsetLeft;
  const walk = x - startX; 
  carouselElement.scrollLeft = startScrollLeft - walk;
};

const draggingFunctionStop = () => {
  isDragging = false;
  carouselElement.classList.remove('dragging');
};


carouselElement.addEventListener('mousedown', draggingFunctionStart);
carouselElement.addEventListener('mousemove', draggingFunction);
carouselElement.addEventListener('mouseup', draggingFunctionStop);
carouselElement.addEventListener('mouseleave', draggingFunctionStop);


function onChange(){
  const allStories = document.querySelectorAll(".imgDiv");
 allStories.forEach((single)=>{
 console.log(single.id) ;
 const num = Number(single.id);
 if(num === centerId){
  single.classList.add('watched');
 }
 })
}

