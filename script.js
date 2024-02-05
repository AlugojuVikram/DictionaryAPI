var ulcont=document.querySelector(".ul-list")
const inp=document.querySelector("input")
var uData=""

function searchvalue(e){
    uData=e.value
    inp.value=""
    console.log(uData)
}

function fetchdata(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${uData}`)
    .then((res)=>{
    return res.json()
    }).then((data)=>{
        console.log(data[0].meanings[0].definitions)
        createListItems(data[0].meanings[0].definitions)
    })

}

function empty(){
    while(ulcont.hasChildNodes()){
        ulcont.removeChild(ulcont.firstChild)
    }
}

function createListItems(defData){
  empty()
    defData.forEach((val)=>{
        const li = document.createElement("li")
        li.innerHTML=val.definition
        ulcont.appendChild(li)
    })
}

