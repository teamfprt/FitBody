let pushs=
[
    {
        "img":"photos/push/Arnold Press.png",
        "title":"Arnold Press",
    },
    {
        "img":"photos/push/Barbell Bench Press (flat).png",
        "title":"Barbell Bench Press",
    },
    {
        "img":"photos/push/Chest Dips (leaning forward).png",
        "title":"Chest Dips",
    },
    {
        "img":"photos/push/Lateral Raises (dumbbellcable).png",
        "title":"Lateral Raises",
    },
    {
        "img":"photos/push/Machine Shoulder Press.png",
        "title":"Machine Shoulder Press",
    },
    {
        "img":"photos/push/Overhead Press (barbell or dumbbell).png",
        "title":"Overhead Press",
    },
    {
        "img":"photos/push/Overhead Tricep Extension (dumbbell, cable, or rope).png",
        "title":"Overhead Tricep Extension ",
    },
    {
        "img":"photos/push/pec deck fly.png",
        "title":"pec deck fly",
    },
    {
        "img":"photos/push/Push-ups (standard or weighted).png",
        "title":"Push-ups",
    },
    {
        "img":"photos/push/Rope Tricep Pushdown.png",
        "title":"Rope Tricep Pushdown",
    }
]
///////////////////////////
for (let i = 0; i < pushs.length; i++)
{
document.querySelector(".tranings .container").innerHTML+=
`
<div class="card">
    <img src="${pushs[i].img}" alt="">
    <div class="text">
        <div class="desc">
            <h3>
                ${pushs[i].title} 
            </h3>
            <p>
                An exercise that builds chest, shoulder, and triceps strength
            </p>
        </div>
        <form action="">
            <div class="input">
                <input type="text" placeholder="Weights " id="weight">
                <input type="number" placeholder="Sets"  id="set">
                <p>X</p>
                <input type="number" placeholder="Counts" id="count">
            </div>
            <div class="lin">
                <a href=""><i class="fa-solid fa-play"></i> How to play</a>
                <input type="submit" id="submit">
            </div>
        </form>
    </div>
</div>
`
}
////////////////////
let weight=[...document.querySelectorAll("#weight")];
let set=[...document.querySelectorAll("#set")];
let count=[...document.querySelectorAll("#count")];
let submit=[...document.querySelectorAll("#submit")]
// ////
let arraypush=[];
for(let i=0;i<pushs.length;i++)
{
    arraypush.push
    (
        {
            "Wgt":"0",
            "Ct":"0",
            "St":"0",
        }
    )
}
if(localStorage.getItem("Arrpush"))
{
    arraypush=JSON.parse(localStorage.getItem("Arrpush"))
    for(let index=0;index<pushs.length;index++)
    {
        weight[index].value=arraypush[index].Wgt;
        set[index].value=arraypush[index].St;
        count[index].value=arraypush[index].Ct
    }
}
// console.log(arraypush)
// //////
submit.forEach((i,index)=>
    {
        i.addEventListener("click",(event)=>
        {
            event.preventDefault();
            Changevalue(index,weight[index].value,set[index].value,count[index].value);
            get();
            // console.log(arraypush)
        })
    }
    )

function Changevalue(index,W,S,C)
{
    arraypush[index].Wgt=W
    arraypush[index].St=S
    arraypush[index].Ct=C
    localStorage.setItem("Arrpush",JSON.stringify(arraypush))
}
function get() 
{
    arraypush=JSON.parse(localStorage.getItem("Arrpush"))
}