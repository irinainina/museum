const pictureInnerContainer = document.querySelector('.picture-inner-container');
const n = 15;
const pictureArray = new Array(n).fill(null).map((_, i) => i + 1);
const shuffleArray = pictureArray.sort(() => Math.random() - 0.5);
let imgNum = 0;
let lineBreakNum = 0;
const imgs = [];

shuffleArray.map((el) => {
  const img = document.createElement('img');
  img.classList.add('gallery-img')
  img.src = `assets/img/galery/galery${el}.jpg`;
  img.alt = `picture${el}`;
  pictureInnerContainer.append(img);
  imgs.push(img);
  imgNum += 1;
  if (imgNum > 4 && lineBreakNum < 2) {
    const div = document.createElement('div');
    div.classList.add('line-break');
    pictureInnerContainer.append(div);
    imgNum = 0;
    lineBreakNum += 1;
  }
});

function anim() {
  if(imgs.length < 15) return;
  imgs.forEach(img => {
    const imgTop = img.getBoundingClientRect().top;
    if(imgTop -150 < document.documentElement.clientHeight) {
      img.classList.add('anim')
    } else {
      img.classList.remove('anim')
    }
  })  
}
window.addEventListener("scroll", anim);
window.addEventListener("DOMContentLoaded", anim)


