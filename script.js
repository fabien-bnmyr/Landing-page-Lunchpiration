const galleriesContainer = [...document.querySelectorAll('.galleries-container')]
const nxtButton = [...document.querySelectorAll('.nxt-button')]
const preButton = [...document.querySelectorAll('.pre-button')]

galleriesContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtButton[i].addEventListener('click',() =>{
        item.scrollLeft += containerWidth;
    })

    preButton[i].addEventListener('click',() =>{
        item.scrollLeft -= containerWidth;
    })
})

const galleriesImage = document.querySelectorAll(".galleries-image")

const dragging = (e) => {
    console.log(e.pageX)
    galleriesImage.scrollLeft = e.pageX;
}

galleriesImage.forEach(image => {
    image.addEventListener("mousemove", dragging);
});