
// apply coupon start
document.getElementById('apply-conform').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyButton = document.getElementById("btn-apply")
    if(text === "coupon"){
        applyButton.removeAttribute('disabled');
    }
})
document.getElementById('btn-apply').addEventListener('click', function(){
 const secret = document.getElementById('secret-info');
 secret.style.display = 'none';
})
   
// apply coupon end

// seat count start


const allBtn = document.getElementsByClassName('add-btn');

let countAdd = 0;
let countLess = 40;
let price = 550;

for(const btn of allBtn){
    btn.addEventListener('click', function(){
        countAdd = countAdd + 1;
        countLess = countLess - 1;
        price = price + 550;
        document.getElementById('seat-count').innerText = countAdd;
        document.getElementById('seat-less').innerText = countLess;
        document.getElementById('price').innerText = price;
        document.getElementById('sit').innerText = countAdd;
       const seatBtn = document.getElementById('btn');
       seatBtn.add.classList = disable;
    })
}