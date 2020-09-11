document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#mainForm').onsubmit = function(){

    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then (response => response.json())
    .then (data =>  {
      const currency = document.querySelector('#currency').value.toUpperCase();
      const amount = document.querySelector('#amount').value;
      rate = data.rates[currency];
      finalRate = rate * amount;
      if(isNaN(amount)) {
        document.querySelector('.firstDiv').innerHTML = 'Please enter only numbers in the first box';
      } else {
        if(rate == undefined ){
          document.querySelector('.firstDiv').innerHTML = 'The currency entered is not supported 😞';
        } else {
          document.querySelector('.firstDiv').innerHTML = `${amount} USD = ${finalRate.toFixed(3)} ${currency}`
        } 
      }
    });

  return false;
  }
});


//Timer

if (!localStorage.getItem('counter')) {
  localStorage.setItem ('counter', 0);
}

// let counter = 0;  -- disabled to test localstorage...

if (!localStorage.getItem('counter')) {
  localStorage.setItem('counter', 0);
}

let counter = 0;

function count() {
  let counter = localStorage.getItem('counter');
  counter++;
  document.querySelector('.secondDiv').innerHTML = `👏 Thank you! You have spent ${counter} seconds on my site.`;
  localStorage.setItem('counter', counter);
  counter.style.color = 'red';
  
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.secondDiv').innerHTML = localStorage.getItem(counter);
  document.querySelector('button').onclick = count ;
  setInterval(count, 1000);
  return false;
});




 