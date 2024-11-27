//Remove the duplicate values from the array
function RemoveDuplicate(arr){
    let len = arr.length;
    const result = []
    result.unshift(arr[0])
    for(let i = 1 ; i < len ; i++){
        if(arr[i] === arr[i-1]){
            continue;
        }
        result.push(arr[i]);
    }
    return result;
}

const ans = RemoveDuplicate([1,2,2,3,4,4,5]);
console.log(ans);

//find max-min in the array

function MaxMin(arr){
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return `max value is ${max} and min val in arr is ${min}`
}

console.log(MaxMin([3,5,7,2,8,-1,4]));


//Vowels and Consonants in the string

function VowCon(str){
    let vow = new Set(['a' , 'e' , 'i' , 'o' , 'u']);
    const strr = str.toLowerCase();
    const lo = strr.split('')

    let con = 0;
    let owel = 0;
    for(let i = 0 ;  i < lo.length ; i++){
        if(vow.has(lo[i])){
            owel += 1;
        }else if(lo[i] === ' '){
            continue;
        }else{
            con += 1;
        }
     }
     return `Given Num has ${con} consonant and ${owel} no. of vowels`
}
console.log(VowCon("Hello world"))





// Banking system Simulation

// Banking array of Object where object holds the values of each account of user

// obj will Contain {name,deposit details Obj{},withdrawal details obj{},total amount,createInfo};
// Helper function to make the deposit and withdrawal

// when page loads if bank obj is not created then it will be created first 


// window.addEventListener("load",(event)=>{
//     console.log("Page Loaded Successfully!");
//     let Bank = JSON.parse(localStorage.getItem("BankDetails"));
    
//     // !Bank && localStorage.setItem("BankDetails",{})
//     if(!Bank){
//         Bank = {};
//         localStorage.setItem("BankDetails",JSON.stringify(Bank));
//     }
// })

function create(){
    let name = prompt("Give Bank Account name");
    let date = new Date();

    //in case name is not given or empty string is assign then 
    if(!name){
        alert("Account name can't be empty");
        // create();
        return;
    }

    let Bank = JSON.parse(localStorage.getItem("BankDetails"));
    console.log(Bank);

    //check wheather there is any other acc created with the same name in db
    //then show the prompt and call the fun itself so tht process can be started once again for the creation
    for(acc in Bank){
       if(acc.AccName === name){
         alert("already contains the account with this name gimme me some other unique name");
         return;
       }
    }

    //creating and adding the newly created values to the bank

    Bank[name] = {AccName : name,Date :date , DepositDetails : [] , TotalAmount : 0};
    console.log("After creation of acc :",Bank);

    localStorage.setItem("BankDetails",JSON.stringify(Bank));
}


function deposit(){
    let name = prompt("Give your Account Name");
    let amount = Number(prompt("Amount you wanna deposit"));
    
    //in case name is not given or empty string is assign then 
    if(!name){
        alert("Account name can't be empty");
        return;
    }

    //get the bank details from the localhost
    let Bank = JSON.parse(localStorage.getItem("BankDetails"));

    //here we can check wheather there is any key named with the user provided is present in the bank or not 

    const accHolderName = Object.keys(Bank);

    if(!accHolderName .includes(name)){
        alert("can't deposit as there is no acc available with this name,gimme me valid name or create the account");
        return;
    }

    //next get the user with the same accName and add the deposited value
    for(let key in Bank){
        if(Bank[key].AccName === name){
            Bank[key].TotalAmount = Bank[key].TotalAmount + amount;
            Bank[key].DepositDetails = [...Bank[key].DepositDetails,amount];
            break;
        }
    }

    console.log("your updated Bank details are here :",Bank);
    localStorage.setItem("BankDetails",JSON.stringify(Bank))
}


function withdrawal(){
    let name = prompt("Give your Account Name");
    let amount = Number(prompt("Amount you wanna withdraw"));

    //in case name is not given or empty string is assign then 
    if(!name){
        alert("Account name can't be empty");
        return;
    }

    //get the bank details from the localhost
    let Bank = JSON.parse(localStorage.getItem("BankDetails"));

    //here we can check wheather there is any key named with the user provided is present in the bank or not 

    const accHolderName = Object.keys(Bank);

    if(!accHolderName.includes(name)){
        alert("can't withdraw as there is no acc available with this name,gimme me valid name or create the account");
        return;
    }

    //next get the user with the same accName and add the and try to withdraw money and if the amount is less than show it 
    for(let key in Bank){
        if(Bank[key].AccName === name){
            if(Bank[key].TotalAmount > amount - 1){
                Bank[key].TotalAmount = Bank[key].TotalAmount - amount;
                alert(`${amount} has been withdrawn from the bank`);
            }else{
                alert(`Not a sufficent Balance to withdraw ${amount}`);
                return
            }
        }
    }
    localStorage.setItem("BankDetails",JSON.stringify(Bank))
    console.log(localStorage.getItem("BankDetails"));

}





//weather Data Processor

// In this problem we are getting the array of waether data and we need to give the high, low and avg of weather

function weather(arr){
   
    const len = arr.length;
   
    const result = arr.reduce((ans,temp,index)=>{
        // console.log('start',index,ans,temp)
        
         !ans.high ? ans.high = temp : ans.high = Math.max(ans.high,temp);
         !ans.low ? ans.low = temp : ans.low = Math.min(ans.low,temp);
         !ans.avg ? ans.avg = temp : ans.avg = ans.avg + temp;
         if(index === len -1){
            let avggg = ans.avg/len
            ans.avg = avggg.toFixed(2);
         }
        //  console.log('end',index,ans,temp)
        return ans
    },{})
    console.log(result);
}

weather([70,72,68,75,69,74,73]);




//E-Commorce Cart System


// Items data 
 
const products = [
    { name: "Laptop", price: 999, quantity: 5, addItemToCart},
    { name: "Smartphone", price: 699, quantity: 10, addItemToCart},
    { name: "Headphones", price: 199, quantity: 15, addItemToCart},
    { name: "Smartwatch", price: 249, quantity: 8, addItemToCart},
    { name: "Camera", price: 499, quantity: 12, addItemToCart},
    { name: "Tablet", price: 299, quantity: 6, addItemToCart},
    { name: "Keyboard", price: 99, quantity: 20, addItemToCart},
    { name: "Mouse", price: 49, quantity: 25, addItemToCart},
    { name: "Monitor", price: 299, quantity: 4, addItemToCart},
    { name: "Printer", price: 199, quantity: 7, addItemToCart},
    { name: "Router", price: 89, quantity: 14, addItemToCart },
    { name: "Speaker", price: 129, quantity: 10, addItemToCart },
    { name: "Charger", price: 29, quantity: 30, addItemToCart },
    { name: "USB Cable", price: 10, quantity: 50, addItemToCart},
    { name: "Power Bank", price: 39, quantity: 18, addItemToCart},  
  ];

const Cart = {items:[],TotalAmount: 0 , TotalItemsN0 : 0};

//first comes the fun to add the items to the cart 

function addItemToCart(){
    console.log(Cart);
    this.quantity -= 1;
    const {addItemToCart,...newCartItem} = this;
    Cart.items.push(newCartItem);

    Cart.TotalAmount += this.price;
    Cart.TotalItemsN0 += 1;
    console.log(Cart);
}

products[2].addItemToCart();
products[7].addItemToCart();
