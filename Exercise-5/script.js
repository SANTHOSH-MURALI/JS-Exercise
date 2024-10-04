
const sourceLink=[
    "google-logo.png","apple-logo.jpg","adidas logo.png","android-logo.jpg","benz-logo.jpeg",
    "nike-logo.png","jaguar-logo.jpeg","nvidia-logo.jpg","hcl-logo.jpeg","infosys-logo.jpg"
];
var index=0;
const slide = document.getElementById('image');
// console.log(slide)
slide.addEventListener('click',(event) =>{
    const mouseButton = event.button === 0 ? 'Left' : event.button === 1 ? 'Middle' : 'Right';
    switch(mouseButton){
        case 'Left':
            index++;if(index>sourceLink.length)index-=sourceLink.length
            slide.setAttribute('src',sourceLink[index]);
            break;
        case 'Middle':
            index++;if(index>sourceLink.length)index-=sourceLink.length
            break;
        case 'Right':
            index--;if(index<0)index+=sourceLink.length
            break;
    }
})
window.addEventListener('keydown',(event) =>{
    const mouseButton = event.key=='ArrowUp'? 'ArrowUp' : event.key == 'ArrowDown' ? 'ArrowDown':event.key== 'ArrowLeft'?'ArrowLeft' : 'ArrowRight';
    switch(mouseButton){
        case 'ArrowUp':
        case 'ArrowRight':
            index++;if(index>sourceLink.length)index-=sourceLink.length
            slide.setAttribute('src',sourceLink[index]);
            break;
        case 'ArrowLeft':
        case 'ArrowDown':
            index--;if(index<0)index+=sourceLink.length
            slide.setAttribute('src',sourceLink[index]);
            break;
    }
})
