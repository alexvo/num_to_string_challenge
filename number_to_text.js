    function numToText(input){
    var inputNumberStr = input;
    //Update this to be a textbox and button. Consider this example where only numbers are allowed in a textbox: http://jsfiddle.net/Lm2hS/
    var digitCount = inputNumberStr.length;
    //Breaks apart digitCount into groups of three. For example, inputNumber=12345 will count one three digit group: '345'
    var digitCountByThrees = Math.floor(digitCount/3);
    var totalGroups = Math.ceil(digitCount/3); 

    //If a group only contains one or two digits, this variable captures that fact. Using the previous example, digitCountRemainder=2
    var digitCountRemainder = digitCount % 3;

    var groupArr = [];
    var groupStr = '';
    var x = digitCount - 1; //used as a counter
    var y = totalGroups; //used as a counter

    //Works on string-ifying each group and pushing to an array
    if (digitCountRemainder > 0){
        for (var i=0; i < digitCountRemainder; i++){
        groupStr += inputNumberStr[i]
        }
    var remainderGroupStr = groupStr;
    groupStr = '';
        for (var j=0; j < digitCountByThrees; j++){
        for (k=0; k < 3; k++){
            groupStr += inputNumberStr[x];
            x--;
        }
        reversePushString(groupStr);
        groupStr = '';
        }
   

        groupArr.unshift(remainderGroupStr);
    
        

    }

    else {
    for (var j=0; j < digitCountByThrees; j++){  
        for (k=0; k < 3; k++){
            groupStr += inputNumberStr[x];
            x--;
        }
        reversePushString(groupStr);
        groupStr = '';
    } 
    }

    function reversePushString(str){
        var splitString = str.split('');
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join('');
        groupArr.unshift(joinArray);
    }

    //console.log(groupArr); Output Example ['12', '345', '678']

    //JSON key=value pairs
    var onesPosition = {0: "", 1: "one ", 2: "two ", 3: "three ", 4: "four ", 5: "five ", 6: "six ", 7: "seven ", 8: "eight ", 9: "nine "};
    var teensPosition = {10: "ten ", 11: "eleven ", 12: "twelve ", 13: "thirteen ", 14: "fourteen ", 15: "fifteen ", 16: "sixteen ", 17: "seventeen ",
                        18: "eightteen ", 19: "ninteen "};
    var tensPosition = {0: "", 2: "twenty ", 3: "thirty ", 4: "fourty ", 5: "fifty ", 6: "sixty ", 7: "seventy ", 8: "eighty ", 9: "ninety "};
    var hundredsPosition = {0: "", 1: "one-hundred ", 2: "two-hundred ", 3: "three-hundred ", 4: "four-hundred ", 5: "five-hundred ", 6: "six-hundred ",
                        7: "seven-hundred ", 8: "eight-hundred ", 9: "nine-hundred "};
    var largerPosition = {1: "", 2: "thousand ", 3: "million ", 4: "billion ", 5: "trillion ", 6: "quadrillion ", 7: "quintillion ", 8: "sextillion ", 
                        9: "octillion ", 10: "nonillion "};

                    //potentially set a character limit in text box to limit it from going beyond a certain number.
                    //for example, character limit of 15 for up to trillions: 999,999,999,999,999

    
    var outputArr = [];

    function outputAnswer(str){ //str will be groupArr[0] to groupArr[totalGroups] for loop
        var strLength = str.length; //must be 1, 2, or 3
        var tempStr = '';
        if (strLength === 1){
        tempStr = onesPosition[str];
        }
        else if (strLength === 2){
            if (str[0] === '1'){
            tempStr = teensPosition[str];
            }
            else {
            tempStr = tensPosition[str[0]] + onesPosition[str[1]];
            }
        }
        else  if (strLength ===3){
        if (str[1] === '1')
        tempStr = hundredsPosition[str[0]] + teensPosition[str[1] + str[2]];
        else {
            tempStr = hundredsPosition[str[0]] + tensPosition[str[1]] + onesPosition[str[2]];
        }
        }
        
        outputArr.push(tempStr + largerPosition[y]);
        y--;
    }

    for (var i=0; i < totalGroups; i++){
        outputAnswer(groupArr[i]);
      }

    var outputString = outputArr.toString();
    outputString = outputString.replace(/,/g , "");
    outputString = outputString.trim();

    console.log("You entered " + inputNumberStr);
    console.log(outputString);
alert(outputString);
    /*

    Fixes needed:
    -entering "00100" will output "  thousand one-hundred   "
    */




    


   }
