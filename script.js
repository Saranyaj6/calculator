// percentage
function calculatePercentage(displayvalue) {
    const myString = displayvalue.replace(/[()]/g, ''); 
        const possibleMatches = ["+", "-", "*", "/"];
        let lastIndex = -1;
        for (let i = 0; i < possibleMatches.length; i++) {
          const index = myString.lastIndexOf(possibleMatches[i]);
          if (index > lastIndex) {
            lastIndex = index;
          }
        }
        var start = myString.slice(0, lastIndex);
        var middle = myString.slice(lastIndex, lastIndex + 1);
        var last = myString.slice(lastIndex+1,);
  
      const result = eval(start);
      var sec=parseFloat(last);
  
      switch (middle) {
        case "+":
          var res = result +(result * (sec/100));
          break;
        case "-":
          res = result -(result * (sec/100));
          break;
        case "*":
          res = (result * (sec/100));
          break;
        case "/":
          res = (result / (sec/100));
        break;
        default:
          var expressions=parseFloat(displayvalue);
          console.log(res)
          break;
      }
      document.querySelector(".calculator .display input").value = res.toFixed(2);
    }
    //operators
    function operators(displayvalue, operator){
      
      if(displayvalue.slice(-1) == '+' || displayvalue.slice(-1) == '-' || displayvalue.slice(-1) == '*' || displayvalue.slice(-1) == '/') 
      { 
        document.querySelector(".calculator .display input").value = displayvalue.slice(0, -1) + operator;
      } 
      else 
      { 
        document.querySelector(".calculator .display input").value = displayvalue += operator;
      };
    }
  
    function frontOperator(displayValue, operator){
        if(displayValue ==''){
          if(operator == '*' || operator == "/"){
            document.querySelector(".calculator .display input").value = '';
          }
          else{
          operators(displayValue, operator); 
          }
        }
        else{
          operators(displayValue, operator); 
        }
  }
  
  function togglesign(displayvalue) {
    const myString =displayvalue;
        const possibleMatches = ["+", "-", "*", "/"];
        let lastIndex = -1;
        for (let i = 0; i < possibleMatches.length; i++) {
          const index = myString.lastIndexOf(possibleMatches[i]);
          if (index > lastIndex) {
            lastIndex = index;
          }
        }
        var start = myString.slice(0, lastIndex);
        if (myString.includes("(")) {
          lastIndex = myString.indexOf("(");
          start = myString.slice(0, lastIndex);
          var last_val = myString.slice(lastIndex+1,-1)
          var sign = last_val * -1
          document.querySelector(".calculator .display input").value = start+sign;
        }
        else if(!(lastIndex == -1)){
          var middle = myString.slice(lastIndex, lastIndex + 1);
          var last_val = myString.slice(lastIndex+1,);
          var sign = -1*last_val;
          document.querySelector(".calculator .display input").value = start+middle+"("+sign+")";
        }
        else{
          sign = myString * -1;
          document.querySelector(".calculator .display input").value = "("+sign+")";
        }
  }
  