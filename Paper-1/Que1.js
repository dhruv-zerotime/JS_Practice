//swap 2 num 
function swap (a,b){
    a = a + b ;
    b = a - b ;
    a = a - b ;
    return {'a': a,'b': b}
}


// let a = 15;
// let b = 10;
// console.log(swap(a,b))


//Wheather the no. is prime or not
function primeOrNot (num){
    for(let i = 2 ; i < num ; i++){
        if(num % i === 0){
            return false 
        }
    }
    return true
}

// console.log(primeOrNot(18))
// console.log(primeOrNot(13))


//fibonacci series
function fibo(n){
    let f = 1;
    let f1 = 2;
    while(f < n){
        console.log(f)
        f1 = f1 + f;
        f = f1 - f;
    }
    }


// fibo(200)


//pascal's triangle
function pascal(n){
    pas = new Array(n)
    for(let i = 0 ; i < n ; i++){
        pas[i] = new Array(i+1);
        for(let j = 0 ; j <= i ; j++){

        }
    }

}


//num into character
function numToChar (num){
    const charArr = ['zero','one','two','three','four','five','six','seven','eight','nine']
    n = num.toString();
    let inWords = '';
   
    for(let i = 0; i < n.length ; i++){
        console.log(charArr[n[i]]);
        inWords  = inWords + charArr[n[i]]
    }
    return inWords
}

// let ans = numToChar(345)
// console.log(ans)


//reverse num

function reverseNum (num){
    str = num.toString()
    rev = [...str].reverse().join('');
    return rev
}


// result = reverseNum(12345)
// console.log(result)

// matrix multiply
function printPascalsPyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j = 0; j <= i; j++) {
            output += binomialCoefficient(i, j) + ' ';
        }
        console.log(output);
    }
}

function binomialCoefficient(n, k) {
    let res = 1;
    if (k > n - k) {
        k = n - k;
    }
    for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

printPascalsPyramid(5);

function matrixMulti(arr1, arr2){
   const len = arr1.length
   const result = new Array(len)
   for(let r = 0; r < len ; r++){
        result[r] = new Array(len)
     for (let c = 0 ; c < len; c++){
        result[r][c] = 0;
        for(let m = 0 ; m < len; m++){
            result[r][c] += arr1[r][m] * arr2[m][c];
        }        
     }  
   }
   return result
}

// let a1 = [[2,3],[4,8]];
// let a2 = [[3,2],[8,4]];

// const a3 = matrixMulti(a1,a2)
// console.log(a3)