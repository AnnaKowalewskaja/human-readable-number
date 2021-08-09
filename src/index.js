module.exports = function toReadable (number) {
  
    let first =["zero",
                "one",	
                "two",
                "three",
                "four",	
                "five",	
                "six",
                "seven",	
                "eight",
                "nine",	
                "ten"
            ],
      second =[
                "eleven",	
                "twelve",
                "thirteen",
                "fourteen",
                "fifteen",
                "sixteen",
                "seventeen",
                "eighteen",
                "nineteen",
                "twenty"
      ], 
      third = [
                "ten",
                "twenty",
                "thirty",
                "forty",
                "fifty",
                "sixty",
                "seventy",
                "eighty",
                "ninety"
    
    ]

   
  if ((0 <= number) && (number <= 10)) 
  { 
    return first[number];
  }

  if (number > 10 && number < 20){
    return second[number.toString()[1]-1];
  }else if(number == 20){
    return third[number.toString()[0]-1]
  }

  if (number > 20 && number < 100){
    if (number.toString()[1] == "0"){
      return third[number.toString()[0]-1];
    } else {
      return third[number.toString()[0]-1] + " " + first[number.toString()[1]];
    }
  }

  if (number > 99 && number < 1000){
    if (number.toString()[1] == "0" && number.toString()[2] == "0")
      return first[number.toString()[0]] + " hundred";

    if (number.toString()[1] == "0")
          return first[number.toString()[0]] + " hundred " + first[number.toString()[2]];

      if (number.toString()[1] == "1" && number.toString()[2] == 0) 
          return first[number.toString()[0]] + " hundred ten";
      if (number.toString()[1] == "1") 
          return first[number.toString()[0]] + " hundred " + second[number.toString()[2]-1]
    if (number.toString()[2] == "0")
      return first[number.toString()[0]] + " hundred " + third[number.toString()[1]-1];
    else 
      return first[number.toString()[0]] + " hundred " + third[number.toString()[1]-1] + " " + first[number.toString()[2]];
  }




}





