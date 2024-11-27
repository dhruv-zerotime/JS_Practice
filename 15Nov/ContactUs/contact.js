

function saveAndRedirect(event){
    event.preventDefault();
    console.log("save and redirect")

    const FN = document.getElementById("firstName").value;
    const LN = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("txtarea").value;

    console.log(FN,LN,email,msg);


    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("txtarea").value = "";

    window.location.assign(
        "http://127.0.0.1:5500/15Nov/Crud/index.html",
    );

}



// const reg = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";

    // const checkEmail = reg.exec(email);

    // if(!checkEmail){
    //     alert("Plz do add the valid email")
    // }


// window.addEventListener("load",function(){

//     const FN = document.getElementById("firstName").value;
//     const LN = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;
//     const msg = document.getElementById("txtarea").value;

//     if(FN){
//         document.getElementById("firstName").value = "";
//     }
//     if(LN){
//         document.getElementById("lastName").value = "";
//     }
//     if(email){
//         document.getElementById("email").value = "";
//     }
//     if(msg){
//         document.getElementById("txtarea").value = "";  
//     }
    
    
// })w