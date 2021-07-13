module.exports = function toReadable (number) {
  let result = "";
  let first =["one",	
              "two",
              "three",
              "four",	
              "five",	
              "six",
              "seven",	
              "eight",
              "nine",	
              "ten",
              "eleven",	
              "twelve"
           
          ]

  if ((0 < number) && (number < 13)) 
  { result = first[number-1];}

if((13<=number) && (number < 20)){
  if ((number === 13) || (number === 15)){
    (number === 13) ? (result = "thirteen") : (result = "fifteen");
  } else{
    let lastNum = number % 10;
    result = first[lastNum - 1]+"teen";
  }
}

return result;



}
