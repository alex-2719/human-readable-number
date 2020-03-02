module.exports = function toReadable (number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five','six','seven','eight', 'nine', 'ten',
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let digitNumber = [0,1,10, 100];                   
    let digitsTwo = ['twenty ', 'thirty ', 'forty ',  'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    let digits = [' hundred ', ' thousand ', ' million '];
    if (number < 20 ) {
        return numbers[number];
    }
    else{
        let strNumber = (number+'');
        let length = strNumber.length;
        let firstCharValue = parseInt(strNumber[0])
        if (length == 2){
            let subtractionValue = number - firstCharValue*digitNumber[length];
            return (digitsTwo[firstCharValue - 2] + (subtractionValue != 0 ? toReadable (subtractionValue) : '')).trim();
        }
        if (length == 3){
            firstCharValue = Math.trunc(number / 100);
            let subtractionValue = number % 100;
            return (toReadable(firstCharValue) + digits[0] + (subtractionValue != 0 ? toReadable (subtractionValue) : '')).trim();
        }
        if (length > 3 && length < 7){
            firstCharValue = Math.trunc(number / 1000);
            let subtractionValue = number % 1000;
            return (toReadable(firstCharValue) + digits[1] + (subtractionValue != 0 ? toReadable (subtractionValue) : '')).trim();
        }
    } 
}

