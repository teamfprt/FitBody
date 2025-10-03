let legs= [
  {
    img: "photos/Legs/Lunges.png",
    title: "Lunges",
  },
  {
    img: "photos/Legs/Leg Press.png",
    title: "Leg Press",
  },
  {
    img: "photos/Legs/Leg Extension.png",
    title: "Leg Extension",
  },
  {
    img: "photos/Legs/Lying Leg Curl.png",
    title: "Lying Leg Curl",
  },
  {
    img: "photos/Legs/hack squats.png",
    title: "Hack Squats",
  },
  {
    img: "photos/Legs/calf raises.png",
    title: "Calf Raises",
  },
  {
    img: "photos/Legs/glutes.png",
    title: "Glutes",
  }
];
////////////////
for (let i = 0; i < legs.length; i++)
{
document.querySelector(".tranings .container").innerHTML+=
`
<div class="card">
    <img src="${legs[i].img}" alt="">
    <div class="text">
        <div class="desc">
            <h3>
                ${legs[i].title} 
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
let arraylegs=[];
for(let i=0;i<legs.length;i++)
{
    arraylegs.push
    (
        {
            "Wgt":"0",
            "Ct":"0",
            "St":"0",
        }
    )
}
if(localStorage.getItem("Arrlegs"))
{
    arraylegs=JSON.parse(localStorage.getItem("Arrlegs"))
    for(let index=0;index<legs.length;index++)
    {
        weight[index].value=arraylegs[index].Wgt;
        set[index].value=arraylegs[index].St;
        count[index].value=arraylegs[index].Ct
    }
}
// console.log(arraylegs)
// //////
submit.forEach((i,index)=>
    {
        i.addEventListener("click",(event)=>
        {
            event.preventDefault();
            Changevalue(index,weight[index].value,set[index].value,count[index].value);
            get();
            // console.log(arraylegs)
        })
    }
    )

function Changevalue(index,W,S,C)
{
    arraylegs[index].Wgt=W
    arraylegs[index].St=S
    arraylegs[index].Ct=C
    localStorage.setItem("Arrlegs",JSON.stringify(arraylegs))
}
function get() 
{
    arraylegs=JSON.parse(localStorage.getItem("Arrlegs"))
}