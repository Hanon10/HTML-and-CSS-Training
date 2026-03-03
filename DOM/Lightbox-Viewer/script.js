const gallerys = document.querySelectorAll('.gallery-item');
const lightBox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('#close-btn');
const lightBoxImg = document.querySelector('#lightbox-image');

function removeThumbnail(imgSrc){
    const newImgSrc = imgSrc.split('-')[0] + '.jpg';
    return newImgSrc;
}

gallerys.forEach((gallery) => {
    gallery.addEventListener('click',function() {

        lightBox.style.display = 'flex';

        lightBoxImg.setAttribute('src',
            removeThumbnail(this.getAttribute('src'))
        )
        lightBoxImg.setAttribute('alt','')
        // console.log(lightBoxImg)
    })
})
closeBtn.addEventListener('click',()=>{
    lightBox.style.display = 'none'
})
lightBox.addEventListener('click',() => {
    lightBox.style.display = 'none'
})