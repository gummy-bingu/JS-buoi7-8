let numbers = [];
function addNumber(){
    let number = +document.getElementById("number").value;
    numbers.push(number);
    console.log(numbers)
}

function tongSoDuong(){
    let sum = 0;
    for (let i = 0; i < numbers.length;i++){
        sum += numbers[i];
    }
    document.getElementById("tongSoDuong").innerHTML = sum;
}

function demSoDuong(){

   let count = 0;
for(let i = 0; i < numbers.length; ++i){
    if(numbers[i] > 0)
        count++;
}
    document.getElementById("demSoDuong").innerHTML  = count;
}

function timSoDuongNhoNhat(){
    let min = numbers[0];
    if (min != 0  && min > 0 ){
        for( let i = 0; i < numbers.length; ++i){
            if (min > numbers[i]) { 
                min = numbers[i];
            }
        }
    }
    else {
        min = "<p> Không có số dương" + "</p>";
    }

document.getElementById("timSoDuongNhoNhat").innerHTML = min;
}
function timSoNhoNhat(){
        let min =  numbers[0];
        
        for (let i = 1; i < numbers.length; ++i) {
            if (min > numbers[i]) { 
                min = numbers[i];
            }
        }
        document.getElementById("timSoNhoNhat").innerHTML  = min;
}


function timSoChanCuoiCung(){  
let arr = numbers;
let even = [];
arr.forEach(number=> {
  if (number % 2 === 0) {
    even.push(number);
  }
});
console.log (even[even.length-1]);
document.getElementById("timSoChanCuoiCung").innerHTML= even;
}

addNumber(tongSoDuong);
addNumber(demSoDuong);
addNumber(timSoNhoNhat);
addNumber(timSoChanCuoiCung);
addNumber(timSoDuongNhoNhat);