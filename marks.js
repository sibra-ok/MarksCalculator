document.getElementById('button').addEventListener('click',function(e){

let Maths=Number(document.getElementById('Maths').value);
let Eng=Number(document.getElementById('Eng').value);
let Hindi=Number(document.getElementById('Hindi').value);
let Science=Number(document.getElementById('Science').value);

let result=Maths+Eng+Hindi+Science
let total=Number(400)
let Percentage=result/total*100

console.log(Percentage)

console.log(result)
 document.getElementById('display').innerText=`You have got ${result} marks out of ${total} and your percentage is ${Percentage}% `


});