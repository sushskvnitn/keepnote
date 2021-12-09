const addButton = document.querySelector("#add");

const updateLSDATA =()=>{
const textAreadata = document.querySelectorAll('textarea');
const notes=[];

textAreadata.forEach((note)=>{
    return notes.push(note.value);
})
//to store data to local storage 

localStorage.setItem('notes',JSON.stringify(notes))


}

const addNewNote = (text ="") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
<div class="operation">
    <button class="edit btn btn-warning" id="edit"><i class="fas fa-edit"></i></button>
    <button class="delete2 btn btn-danger" id="delete2"><i class="far fa-trash-alt"></i></button>
</div>
<div class="main ${text ?" ":"hidden"}"></div>
<textarea class="${text ?"hidden":" "}" name="" ></textarea>
`;
note.insertAdjacentHTML('afterbegin',htmlData);

//gettting referances  
const editbtn = note.querySelector('#edit');
const deltbtn = note.querySelector('#delete2');
const maindiv = note.querySelector('.main');
const textarea = note.querySelector('textarea');

//deleting the node
deltbtn.addEventListener('click',()=>{
    note.remove();
    updateLSDATA();
})
//toggle using edit btn 
textarea.value = text;
maindiv.innerHTML = text;


editbtn.addEventListener('click', ()=>{
   maindiv.classList.toggle('hidden') ;
   textarea.classList.toggle('hidden');
})

textarea.addEventListener('change',(event)=>{ //using change we can get text after completng text
    const value = event.target.value;
    console.log(value)
    maindiv.innerHTML = value;
     updateLSDATA();
})
document.body.appendChild(note);
};

///getting data back from localstorage

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes){
    notes.forEach((note)=>addNewNote(note))
}


addButton.addEventListener("click", () => addNewNote());