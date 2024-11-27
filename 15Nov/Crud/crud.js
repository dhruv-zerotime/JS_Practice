
//Initial fun trigger on load
window.addEventListener("load",(event)=>{
    let Notes = JSON.parse(localStorage.getItem("Notes"));
    
    //check notes not there then create in locastorage
    if(!Notes){
        Notes = [];
        JSON.stringify(localStorage.setItem("Notes",JSON.stringify(Notes)));
        console.log(JSON.parse(localStorage.getItem("Notes")))
    }

    const NotesSection = document.getElementById("AllNotes");


    //maping over the notes to display 
    Notes && Notes.map((note)=>{
      const div = document.createElement("div");
      const divId = document.createAttribute("id");
      div.setAttribute("style","width:16rem ; height:6rem ;padding : 6px;  border-radius:6px ; border-color:black; background-color:rgb(230, 198, 190); display:flex ; flex-direction: column;")
      divId.value = note.id;

      const txt = document.createElement("p");
      const txtNode = document.createTextNode(note.noteHead);
      txt.setAttribute("style","width:full")
      
      txt.appendChild(txtNode);

      //creating the update button for each note
      const Updbtn = document.createElement("button");
      Updbtn.innerText = "Update";
      Updbtn.setAttribute("style"," padding: 2px ; width: fit-content ; background-color:rgb(99, 167, 113); color:azure; border-radius: 2px; border-color: azure;")
      Updbtn.addEventListener('click',function(){
        UpdateNoteTrigger(note.id);
      });  

      //creating the dlt button for each note
      const Dltbtn = document.createElement("button");
      Dltbtn.innerText = "Delete";
      Dltbtn.setAttribute("style"," padding: 2px ; width: fit-content ; background-color:rgb(230, 57, 14); color:azure; border-radius: 2px; border-color: azure;")
      Dltbtn.addEventListener('click',function(){
        DeleteNote(note.id)
      })

      //creating the read button for each note
      const Readbtn = document.createElement("button");
      Readbtn.innerText = "Read";
      Readbtn.setAttribute("style"," padding: 2px ; width: fit-content ; background-color:rgb(100, 160, 248); color:azure; border-radius: 2px; border-color: azure;");
      Readbtn.addEventListener('click',function(){
        read(note.id);
      })
      //adding the notes to the each note div 
      div.appendChild(txt);
      
      //adding the btn actions to dlt or update
      const buttons = document.createElement("div");
      buttons.setAttribute("id","buttonActions");
      buttons.setAttribute("style","display:flex justify-content: space-around");

      buttons.appendChild(Updbtn);
      buttons.appendChild(Dltbtn);
      buttons.appendChild(Readbtn);

      div.appendChild(buttons)
      
      //adding div to the main div 
      NotesSection.appendChild(div);
    })
    
})


//shows the create notes form
function showCreateForm (){
     document.getElementById("AllNotes").style.display = "none";
    //  document.getElementById("Update").style.display = "none";
    const updateDiv = document.getElementById("Update");

    //only if the update div exits then only change the style to none
    if(updateDiv){
        document.getElementById("Update").style.display = "none";
    }
   
     document.getElementById("Create").style.display = "flex";
     
}

//creates the form
function CreateNewNote(event){
    event.preventDefault();
    const createdNote = document.getElementById("createNote").value ;
    const noteContent = document.getElementById("NoteContent").value;

    let Notes = JSON.parse(localStorage.getItem("Notes"));
        let id = null;
        
        id = Notes.length + 1
       
        Notes.push({id,noteContent: noteContent ,noteHead:createdNote});
        localStorage.setItem("Notes",JSON.stringify(Notes));
        
        reaload();
}

function UpdateNoteTrigger(id){
    document.getElementById("AllNotes").style.display = "none";

    let Notes = JSON.parse(localStorage.getItem("Notes"));

    //here we can do this way to find the proper index and
    // also id-1 can give us the as we have assigned the id on the basis on index
    const index = Notes.findIndex((n)=>n.id === id);

    //pre setting the input value and showing the update form
    document.getElementById("UpdateNote").value = Notes[index].noteHead;
    document.getElementById("UpdateContent").value = Notes[index].noteContent;
    const txtAreaContent = document.getElementById("UpdateContent");
    
    txtAreaContent.setAttribute('class',`${Notes[index].id}`);
    document.getElementById("Update").style.display = "flex";

}


//updates the notes values
function UpdateNotes(event){
    event.preventDefault();
   
    const Ncon = document.getElementById("UpdateContent");
    const id = Ncon.getAttributeNode("class");      //taking the id we have saved the value of the update id 
    
    const UpNote = document.getElementById("UpdateNote").value;
    const con = Ncon.value;


    const Notes = JSON.parse(localStorage.getItem("Notes"));
    
    const index = Notes.findIndex((n)=>n.id === parseInt(id.value));

    Notes[index].noteHead = UpNote;             //updating the content
    Notes[index].noteContent = con;

     
    localStorage.setItem("Notes",JSON.stringify(Notes));

    reaload();  
}   


function DeleteNote(id){
    let Notes = JSON.parse(localStorage.getItem("Notes"));
    
    const newNotes = Notes.filter((n)=> n.id !== id);

    localStorage.setItem("Notes",JSON.stringify(newNotes));
    reaload();
}

function DeleteAll(){
    localStorage.setItem("Notes",JSON.stringify([]));
    reaload();
}

function read(id){
    const Notes = JSON.parse(localStorage.getItem("Notes")); //access the LS notes 

    const index = Notes.findIndex((n)=>n.id === id); //get the id of note to be shown
 
    const readdiv = document.getElementById("indiNotes") //select the indi div to show the single note
    
    const h1 = document.createElement("h1");
    const p = document.createElement("p");      //creating the tag

    h1.innerHTML = Notes[index].noteHead;       //adding content of notes to created tags
    
    p.innerText =  Notes[index].noteContent;    
   
    readdiv.appendChild(h1);                    //appending the tags to indi dev
    readdiv.appendChild(p);
   
    document.getElementById("AllNotes").style.display = "none";
    readdiv.setAttribute("style","display:flex;");

}

function showAllNotes(){
    console.log("show all notes");
    const updateDiv = document.getElementById("Update");
    const createDiv = document.getElementById("Create");

    //only if the update div and created div exits then only change the style to none
    if(updateDiv){
        updateDiv.style.display = "none";
    }
    if(createDiv){
        createDiv.style.display = "none"
    }
   
     
    document.getElementById("AllNotes").style.display = "flex";
}


// function simply empty all the inputs and reaload the page 
function reaload(){
    document.getElementById("UpdateNote").value = "";
    document.getElementById("UpdateContent").value = "";
    document.getElementById("createNote").value = ""
    document.getElementById("NoteContent").value = ""

    location.reload();
}








//Depricated version code


// function create(){
//     const noteMsg = prompt("Write the note to be added");

//     if(!noteMsg){
//         alert("can't add blank note");
//         return;
//     }

//     let Notes = JSON.parse(localStorage.getItem("Notes"));
//     let id = null;
    
//     id = Notes.length + 1
   
//     Notes.push({id,noteMsg});
//     console.log(Notes);
//     localStorage.setItem("Notes",JSON.stringify(Notes));
    
//     location.reload();
// }