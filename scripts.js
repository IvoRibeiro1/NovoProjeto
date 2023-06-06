
//chamar API sempre com retorno

async function getData(place){
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=4ab624b28be145628b635427c9af3958&location=${place}` 
    

// espaço reservado para varios tipos de dados

const res=await fetch(url)
const data=await res.json()
time= await data.datetime

document.getElementById("time").innerText=`${place} = ${time} ${data.timezone_abbreviation} `

}

document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover",function(){
        window.onmouseover=function(j){
            //posição do cursor
            x= j.clientX
            y= j.clientY
            document.getElementById("name").style.top=y-60+"px"
            document.getElementById("name").style.left=x+10+"px"
        }


        //qunando passar o rato mostra nome e preenche o pais a rosa
        e.style.fill="pink"
        document.getElementById("namep").innerText=e.id
        document.getElementById("name").style.opacity=1

    })


    //quando o rato sair do sitio o mapa volta ao normal
    e.addEventListener("mouseleave",function(){
        e.style.fill="#ececec"
        document.getElementById("name").style.opacity=0
    })

    //buscar hora 
    e.addEventListener("click",function(){
        getData(e.id)
    })


})