var hmap = new Map()
hmap.set('I',1)
hmap.set('V',5)
hmap.set('X',10)
hmap.set('L',50);
hmap.set('C',100);
hmap.set('D',500);
hmap.set('M',1000);

num = document.getElementById('val').value //get number input
s = document.getElementById('roman').value //get roman input

function romanToVal(s){
    var value=0;
    for(var i=0;i<s.length;i++){
        if(i!=s.length-1){
            if(hmap.get(s.charAt(i)) >= hmap.get(s.charAt(i+1))){
                    value += hmap.get(s.charAt(i));
            }else{
                value+= (hmap.get(s.charAt(i+1)) - hmap.get(s.charAt(i)));i++;
            }
        }
        else{
                value += hmap.get(s.charAt(i));
        }
    }
    return value    
}

function valToRoman(num) {
    const roman = {
        1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"
    };

    let result = '';

    while(num>0){
        if(num >= 1000){
            var count = num/1000;
            for(let i=1;i<=count;i++){
                result += roman[1000];num-=1000;
            }
        }
        if(num >= 900){
            result += roman[900];num-=900;
        }
        if(num >= 500){
            result += roman[500];num-=500;
        }
        if(num >= 400){
            result += roman[400];num-=400;
        }
        if(num >= 100){
            var count = num/100;
            for(let i=1;i<=count;i++){
                result += roman[100];num-=100;
            }
        }
        if(num >= 90){
            result += roman[90];num-=90;
        }
        if(num >= 50){
            result += roman[900];num-=900;
        }
        if(num >= 40){
            result += roman[40];num-=40;
        }
        if(num >= 10){
            var count = num/10;
            for(let i=1;i<=count;i++){
                result += roman[10];num-=10;
            }
        }
        if(num >= 9){
            result += roman[9];num-=9;
        }
        if(num >= 5){
            result += roman[5];num-=5;
        }
        if(num >= 4){
            result += roman[4];num-=4;
        }
        if(num >= 1){
            var count = num/1;
            for(let i=1;i<=count;i++){
                result += roman[1];num-=1;
            }
        }
    }

    return result;
}


document.getElementById('numberVal').style.opacity=100;
document.getElementById('numberVal').innerHTML = romanToVal(s)
document.getElementById('romanVal').innerHTML = valToRoman(num)

