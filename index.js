
function text(){
  inputString = document.getElementById('input').value;
  targetString = document.getElementById('target').value;

  // /g means global, it finds all the cases, not only first one
  //replace multiple spaces with one space
  cleanedInput = inputString.replace(/  +/g, ' ');
  cleanedTarget = targetString.replace(/  +/g, ' ');
  
  // split each factor and save in new array
  elementsCleanedInput =  cleanedInput.split(" ");
  elementsCleanedTarget = cleanedTarget.split(" ");


  //find difference and make the element tomato color
  for(i=0; i<elementsCleanedTarget.length; i++){
    if(elementsCleanedInput[i] != elementsCleanedTarget[i]){
      console.log(elementsCleanedTarget[i])
      elementsCleanedTarget[i] = "<span>"+elementsCleanedTarget[i]+"</span>"
    } else {
      document.getElementById('targetResult').style.color = 'black';
    }
  }

  console.log(elementsCleanedInput)
  console.log(elementsCleanedTarget)

  //join



  //Print out the result
  document.getElementById('inputResult').innerHTML= elementsCleanedInput.join(' ');
  document.getElementById('targetResult').innerHTML= elementsCleanedTarget.join(' ');

  var result = document.getElementById('targetResult')
  //diffs is array
  var diffs = result.querySelectorAll('span')

  //add tomato color to each elements
  diffs.forEach((element)=> 
    element.classList.add('tomato')
  );

}

