const card = document.querySelector(' .card');
const container = document.querySelector(' .container');

const sneaker = document.querySelector(' .sneaker img');
const info = document.querySelector(' .info ');
const sizes = document.querySelector(' .sizes');
const purchase = document.querySelector(' .purchase');

//moving animation event
container.addEventListener('mousemove', (e) => {
  let xPoint = (window.innerWidth / 2 - e.pageX) / 25;
  let yPoint = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xPoint}deg) rotateX(${yPoint}deg) `;
});

//animate in
container.addEventListener('mouseenter', (e) => {
  container.style.transition = 'none';

  //3d effect popout
  sneaker.style.transform = 'rotateZ(-45deg) translateZ(150px)';
  info.style.transform = 'translateZ(125px) ';
  sizes.style.transform = 'translateZ(110px) ';
  purchase.style.transform = 'translateZ(110px) ';
});

//animate out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all .5s ease ';
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;

  //3d popback
  sneaker.style.transform = 'translateZ(150px) rotateZ(0deg)';
  info.style.transform = 'translateZ(0px) ';
  sizes.style.transform = 'translateZ(0px) ';
  purchase.style.transform = 'translateZ(0px) ';
});
