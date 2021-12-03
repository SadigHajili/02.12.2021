// //Task1 Concatente
function combineArray(array1, array2) {
    return [...array1, ...array2];
  }
  
  const Array0 = [1, 2, 3];
  const Array1 = [4, 5, 6, 7];
  console.log(combineArray(Array0, Array1));

  //Task2 Return corresponding month name as a string
  let number = MonthName(Number(prompt("Enter the first number")));
  function MonthName(sadiq){
    switch(sadiq){
      case 1 : 
          return 'January';
      case 2 : 
          return 'February';
      case 3 : 
          return 'March';
      case 4 : 
          return 'April';
      case 5 : 
          return 'May';
      case 6 : 
          return 'June';
      case 7 : 
          return 'July';
      case 8 : 
          return 'August';
      case 9 : 
          return 'September';
      case 10 : 
          return 'October';
      case 11 : 
          return 'November';
      case 12 : 
          return 'December';
      default:
          return '';
    }
  }
  console.log(number);
 

  //Task3
//   const ratings = [1,2,3,4,5];

//   let result = ratings.includes(4); 
//   console.log(result); 
  
//   result = ratings.includes(6); 
//   console.log(result); 
let ratings = prompt("enter the number");
var ratings = [1,2,3,4,5];
    
if(ratings.indexOf("3") !== -1){
    alert("true")
} else{
    alert("false")
}