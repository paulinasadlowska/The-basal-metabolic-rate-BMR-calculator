document.getElementById('results-container').style.display= 'none';


const btn = document.getElementById('calculate');

btn.addEventListener('click', function(e) {  // Runs getValues when form's submit button is clicked.
    e.preventDefault();
  
    calculate();
  })

  function calculate () {

  
const gender = document.getElementsByName('gender'); // This produces a node-list with 2 items, male and female. 
const age = document.getElementById('age').value;
const height = document.getElementById('height').value;
const weight = document.getElementById('weight').value;
const activity = document.getElementById('activity').value;

let result = 0;

// if (gender.checked === 'male') {
// result = (9.99*weight + 6.25*height - 4.92*age + 5)*activity;
// console.log ('male');
// return result
// } else if (gender.checked === 'female') {
//     result = (9.99*weight + 6.25*height - 4.92*age -161)*activity;
//     return result
// } 

    for(i = 0; i < gender.length; i++) { // This checks to see which gender the user checked. If 'male', +5 to finalResult. Else, -161 from finalResult.
      if(gender[i].checked) {
        result = (9.99*weight + 6.25*height - 4.92*age + 5)*activity;
        break;
      } else {
        result = (9.99*weight + 6.25*height - 4.92*age -161)*activity;
        break;
      }
    
    }
    

document.getElementById('results-container').style.display = 'block';
const bmr_result = document.getElementById('bmr-result');
bmr_result.textContent = result;

}

