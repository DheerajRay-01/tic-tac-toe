let winName = document.querySelector("#win")
let msg = document.querySelector(".msg")
let btn = document.querySelector(".btn")
let cross = document.querySelector(".cross")
let newG = document.querySelector(".new")
let boxes =  document.querySelectorAll(".boxes")
cnt = 0;
bool = 1;
win = 0;
console.log(boxes);
let arr = {
    box1 : -1,
    box2 : -1,
    box3 : -1,
    box4 : -1,
    box5 : -1,
    box6 : -1,
    box7 : -1,
    box8 : -1,
    box9 : -1
}
function detectWin() {
    if((arr.box1 === arr.box2 && arr.box2 === arr.box3 && arr.box1 !== -1) ||
       (arr.box4 === arr.box5 && arr.box5 === arr.box6 && arr.box4 !== -1) ||
       (arr.box7 === arr.box8 && arr.box8 === arr.box9 && arr.box7 !== -1) ||
       (arr.box1 === arr.box5 && arr.box5 === arr.box9 && arr.box1 !== -1) ||
       (arr.box3 === arr.box5 && arr.box5 === arr.box7 && arr.box3 !== -1) ||
       (arr.box1 === arr.box4 && arr.box4 === arr.box7 && arr.box1 !== -1) ||
       (arr.box2 === arr.box5 && arr.box5 === arr.box8 && arr.box2 !== -1) ||
       (arr.box3 === arr.box6 && arr.box6 === arr.box9 && arr.box3 !== -1)) {
        return true
    } else {
        return false
    }
}
function showwinner(){
    if(win){
    let winner;
    if(bool){
        winner = "O"
    }
    else
        winner = "X"
    
    winName.classList.remove("hide")
    winName.innerHTML = `<i class="fa-solid fa-trophy winic"></i> Player '${winner}' won <i class="winic fa-solid fa-award"></i>`
    }
    msg.classList.remove("hide")
    win = 0;
    return
}

function updateArr(e){
    let id = e.target.id
    arr[id] = bool;
}

function filledCheck(e){
    let id = e.target.id    
    if(arr[id] == -1)
        return true
    else
    return false
}


function changeIcon(e){
    let id = `#${e.id}`
    let div =  document.querySelector(id)
    console.log(div)
    if(bool == 1){
        div.innerHTML=`<i class="fa-solid fa-xmark x-icon icon"></i>`
        bool = 0
    }
    else{
        div.innerHTML=`<i class="fa-solid fa-o o-icon icon"></i>`
        bool = 1
    }
}

function check(){
    if(cnt < 9)
        return 1
    else
    return 0
}
function newGame(){
    winName.classList.add("hide")
    msg.classList.add("hide")
    newG.classList.add("hide")
    cnt = 0;
    bool = 1;
    for (let key in arr) {
        arr[key] = -1;
    }
    boxes.forEach(val=>{
        val.innerHTML = ``
    })
}

btn.addEventListener("click" ,newGame)
newG.addEventListener("click",newGame)
cross.addEventListener("click",()=>{
    msg.classList.add("hide")
    newG.classList.remove("hide")
})


boxes.forEach(val => {
    val.addEventListener("click" ,(e)=>{
      if(check() && filledCheck(e)){
        changeIcon(e.target)
        updateArr(e)
        if(detectWin()){
            win = 1
            cnt = 9     
            showwinner()
            return
        }
        cnt++
      }
      if(!check()){
        showwinner()
      }
    })
});

