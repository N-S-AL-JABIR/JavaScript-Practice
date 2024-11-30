function monthlySavings(array, n) {
  if (!Array.isArray(array) || typeof n !== "number") {
    console.log("Invalid input");
    return;
  }

  let total = 0;
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element >= 3000) {
      element -= element * 0.2;
    }
    total += element;
  }

  const save = total - n;
  if (save < 0) {
    console.log("earn more");
  } else {
    console.log(save);
  }
}

let payment = [1000, 2000, 3000]; 
let cost = 5400; 
monthlySavings(payment, cost); 

payment = [1000, 2000, 2500]; 
cost = 5000; 
monthlySavings(payment, cost); 

payment = [900, 2700, 3400]; 
cost = 10000; 
monthlySavings(payment, cost); 

payment = [900, 2700, 3400]; 
cost = "10000"; 
monthlySavings(payment, cost); 

payment = 100;
cost = [900, 2700, 3400]; 
monthlySavings(payment, cost); 
