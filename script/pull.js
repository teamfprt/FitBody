let pulls = [
  {
    img: "photos/pull/Back Extension.png",
    title: "Back Extension",
  },
  {
    img: "photos/pull/Chest-Supported Row.png",
    title: "Chest-Supported Row",
  },
  {
    img: "photos/pull/Dumbbell Curl.png",
    title: "Dumbbell Curl",
  },
  {
    img: "photos/pull/Dumbbell Row.png",
    title: "Dumbbell Row",
  },
  {
    img: "photos/pull/lat pull dawn.png",
    title: "Lat Pull Dawn",
  },
  {
    img: "photos/pull/pull down x machine.png",
    title: "Pull Down Machine",
  },
  {
    img: "photos/pull/Reverse Pec Deck.png",
    title: "Reverse Pec Deck",
  },
  {
    img: "photos/pull/Seated Cable Row.png",
    title: "Seated Cable Row",
  },
  {
    img: "photos/pull/Shrugs.png",
    title: "Shrugs",
  },
  {
    img: "photos/pull/T-Bar Row.png",
    title: "T-Bar Row",
  },
  {
    img: "photos/pull/vertical row machine.png",
    title: "Vertical Row Machine",
  }
];

////////////////
for (let i = 0; i < pulls.length; i++)
{
document.querySelector(".tranings .container").innerHTML+=
`
<div class="card">
    <img src="${pulls[i].img}" alt="">
    <div class="text">
        <div class="desc">
            <h3>
                ${pulls[i].title} 
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
let arraypull=[];
for(let i=0;i<pulls.length;i++)
{
    arraypull.push
    (
        {
            "Wgt":"0",
            "Ct":"0",
            "St":"0",
        }
    )
}
if(localStorage.getItem("Arrpull"))
{
    arraypull=JSON.parse(localStorage.getItem("Arrpull"))
    for(let index=0;index<pulls.length;index++)
    {
        weight[index].value=arraypull[index].Wgt;
        set[index].value=arraypull[index].St;
        count[index].value=arraypull[index].Ct
    }
}
// console.log(arraypull)
// //////
submit.forEach((i,index)=>
    {
        i.addEventListener("click",(event)=>
        {
            event.preventDefault();
            Changevalue(index,weight[index].value,set[index].value,count[index].value);
            get();
            // console.log(arraypull)
        })
    }
    )

function Changevalue(index,W,S,C)
{
    arraypull[index].Wgt=W
    arraypull[index].St=S
    arraypull[index].Ct=C
    localStorage.setItem("Arrpull",JSON.stringify(arraypull))
}
function get() 
{
    arraypull=JSON.parse(localStorage.getItem("Arrpull"))
}