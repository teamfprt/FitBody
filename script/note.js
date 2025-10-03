let note=document.querySelector(".textArea")
let add=document.querySelector(".sub")
let arrayallnote=[];
let container=document.querySelector(".yournotes .container")
if(localStorage.getItem("Allnotes"))
    arrayallnote=JSON.parse(localStorage.getItem("Allnotes"));
if(note)
    {
        add.addEventListener("click",(event)=>
            {
                event.preventDefault();
                arrayallnote.push
                (
                    {
                        "Note":note.value,
                        "Id":new Date(),
                        "stat":true,
                    }
                )
                note.value="";
                localStorage.setItem("Allnotes",JSON.stringify(arrayallnote));
                arrayallnote=JSON.parse(localStorage.getItem("Allnotes"));
            }
        )
    }
if(container)
    {
        arrayallnote.forEach((i,index)=>
            {
                container.innerHTML+=
                `
                <div class="card">
                    <p>
                        ${i.Note}
                    </p>
                    <div class="btns">
                        <button id="${i.Id}">
                            <i class="fas fa-edit edit"></i>
                        </button>
                        <button id="${i.Id}">
                            <i class="fa-solid fa-delete-left del"></i>
                        </button>
                    </div>
                </div>
                `
            }) 
        container.onclick=(e)=>
            {
                // console.log(e.target)
                if(e.target.classList.contains("del"))
                {
                    (e.target.parentElement.parentElement.parentElement).remove()
                    arrayallnote.forEach((i,index)=>
                        {
                            if(i.Id==e.target.parentElement.id)
                            {
                                console.log("we")
                                console.log(index)
                                arrayallnote[index].stat=false;
                                arrayallnote=arrayallnote.filter(i=>i.stat)
                                localStorage.setItem("Allnotes",JSON.stringify(arrayallnote));
                                arrayallnote=JSON.parse(localStorage.getItem("Allnotes"));
                            }
                        })
                }
                if(e.target.classList.contains("edit"))
                {
                    arrayallnote.forEach((i,index)=>
                    {
                        if(i.Id==e.target.parentElement.id)
                        {
                            let editword=prompt("Edit the note:",i.Note)
                            if(editword!="")
                                {
                                    i.Note=editword
                                    location.reload();
                                }
                            localStorage.setItem("Allnotes",JSON.stringify(arrayallnote));
                            arrayallnote=JSON.parse(localStorage.getItem("Allnotes"));
                        }
                    })
                    
                }
            }
    }  