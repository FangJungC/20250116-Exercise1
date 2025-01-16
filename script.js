//找DOM
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset")
let counter=document.getElementById("counter");

//綁事件
increment.addEventListener("click", onIncrementCLick);
decrement.addEventListener("click", onDecrementCLick);
reset.addEventListener("click", onResetCLick);

//寫事件
function onIncrementCLick() {
    //3.1 找值
    //3.2 改
    counter+=1;
    //3.3 放回

}

