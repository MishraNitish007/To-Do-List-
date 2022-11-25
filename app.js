showNotes();


let addbtn= document.getElementById('addbtn');
addbtn.addEventListener("click" ,function(e){ // If we will click on addbtn than this below will start eqecuting
 
let addtxt= document.getElementById("addtxt");
let notes =localStorage.getItem("notes");  // forming local storage 
if(notes ==null){
    notesobj =[];  //Empty array 

}else{
    notesobj= JSON.parse(notes); // , we created the array of name notesobj ,This will store notes object data to array of NOTESOBJ
}
notesobj.push(addtxt.value);     //this will send data of addtxt  to notesobj , if we will click the addbtn button 

localStorage.setItem("notes",JSON.stringify(notesobj))
addtxt.value = "";
console.log(notesobj);

showNotes();

});

function showNotes(){
    let notes =localStorage.getItem("notes");  // forming local storage 
    if(notes ==null){
        notesobj =[];  //Empty array 
    
    }else{
        notesobj= JSON.parse(notes); // , we created the array of name notesobj ,This will store notes object data to array of NOTESOBJ
    }

    let html =  "";
    notesobj.forEach(function(element,index){

        html +=` <div class =" notecard   my-2 mx-2 card" style ="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note </button>
      </div>
  </div>    
  `
        
    });

    let notesEle = document.getElementById("notes"); 
    if(notesobj.length!=0){
        notesEle.innerHTML=html;
    }else {
        notesEle.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;

}
}


// <!-- function to delete  -->

   function deleteNote(index){
    // console.log("I am Deleting" ,index);
   
   let notes =localStorage.getItem("notes");  // forming local storage 
   if(notes ==null){
       notesobj =[];  //Empty array 
   
   }else{
       notesobj= JSON.parse(notes); // , we created the array of name notesobj ,This will store notes object data to array of NOTESOBJ
   }

   notesobj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesobj)); 

   showNotes();
}


let = search= document.getElementById('searchTxt')
search.addEventListener("input",function(){
let inputval=search.value.toLowerCase();
    console.log('Input Event Fires!',inputval); 
    let notecards =document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtext=element.getElementsByTagName("p")[0].innerText ;
        console.log(cardtext);
        if (cardtext.includes(inputval)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }


    })
})