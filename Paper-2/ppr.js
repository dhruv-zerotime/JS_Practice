//factorial of numb
function factorial(num){
    let fac = 1;
    dig = 1
    while(dig < num){
        fac += fac * dig;
        dig += 1;
    }
    return fac
    
}

//palindrome or not

function palindrome(num){
    const n = num.toString();
    const len = n.length;
    let i = 0;
    let j = len -1;
    console.log("@ start",n.charAt(i),"@ end",n.charAt(j))

    while(i < j){
        if(n.charAt(i) !== n.charAt(j)){
            return "not a palindrome"
        }
        i += 1;
        j -= 1;
    }
    return "Num is Palindrome"
   
}

// console.log(palindrome(52235))

//ArmStrong or NOT

function armStrongOrNot(num){
    const n = num.toString();
    const len = n.length;

    sum = 0 ;
    const power = len;
    console.log(power)
    for(let i = 0 ; i < len ; i++){
        sum += Math.pow(Number(n.charAt(i)),power);
        console.log(sum)
    }
    if(sum === num){
        return "Num is armStrong";
    }
    return "Num isn't ArmStrong";

}

// console.log(armStrongOrNot(9474))


//Leap year or not

function leapOrNot (year){
    if(year % 4 === 0){
        if(year % 100 === 0 ){
            if(year % 400 === 0){
                return `${year} is Leap Year`;
            }
        }else if(year % 100 !== 0){
            if(year % 400 !== 0){
                return `${year} is Leap year`;
            }
        }        
    }
    return `${year} is not a Leap Year`
}



function Pattern (lines=5){

let r = lines;
let maxElment = r*2 - 1;
for(let row = 0 ; row < r ; row++){
    let ele = row * 2 + 1 ;
    let b1 = maxElment - ele/2;
    //for 1st half
    for(let f = 0 ; f < b1 ; f++){
        process.stdout.write(" ");
    }
    //for Pattern
    let half = Math.floor(ele/2)
    let ch = 65 ;
    for(let p = 0 ; p < ele; p++){
        if(p < half){
            process.stdout.write(String.fromCharCode(ch));
            ch += 1; 
        }else if(p == half){
            process.stdout.write(String.fromCharCode(ch));
            ch -= 1
        }else{
            process.stdout.write(String.fromCharCode(ch));
            ch -= 1 
        }
    }
    // for(let q = 0 ; q < b1 ; q++){ ///no need for the after loop as it will automatically create the space
    //     process.stdout.write(" ");
    // }
    console.log("\n");
}
}
Pattern(26)



// console.log(leapOrNot(1900))

// Pattern priting

// function Pattern(lines = 5){
//     const totalCol = lines*2-1;
//     const patt = new Array(lines);
//     for (let i = 0; i <= lines-1 ; i++){
//         let ele = i * 2 + 1;
//         let blank = totalCol - ele;
//         let leave1 = blank/2 ;
//         let leave2 = blank/2 ;
//         patt[i] = new Array(totalCol);

//         for(let j = 0 ; j <= totalCol ; j++){
//             if(j == leave1){
//                 patt[i][j] = " ";
//                 leave1 += 1;
//             }
//             else if(j === totalCol - leave2){
//                 patt[i][j] = " ";
//             }
//             else {
//                 patt[i][j] = "*";
//             }

//         }
//     }
//     return patt
// }

// const ans = Pattern();