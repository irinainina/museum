const radioBtns = document.querySelectorAll('.radio');
const amountBasic = document.querySelector('.amount-item-basic');
const amountSenior = document.querySelector('.amount-item-senior');
const amountBasicCount = amountBasic.querySelector('input');
const amountSeniorCount = amountSenior.querySelector('input');
const amountCount = document.querySelector('.amount-counter'); 
let currentPrice = 20;
let currentAmount = 0;

radioBtns.forEach(el => el.addEventListener('click', () => { 
  getCurrentPrice();
  getCurrentAmount();
}))

function getCurrentPrice() {  
  radioBtns.forEach(el => { 
    if(el.checked) {
      currentPrice = el.dataset.price;
    }  
  });
  return currentPrice;
}

function getCurrentAmount() { 
  const basicAmount = amountBasicCount.value * currentPrice;
  const seniorAmount = amountSeniorCount.value * currentPrice / 2
  currentAmount = basicAmount + seniorAmount;
  amountCount.textContent = `€${currentAmount}`;
}
getCurrentAmount()

amountBasic.addEventListener('click', getCurrentAmount);
amountSenior.addEventListener('click', getCurrentAmount)

