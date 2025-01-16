let todoArray = [];
let btnAdd = document.getElementById("addButton");

function onBtnClick() {
    // alert("準備處理");

    //抓INPUT資料
    let input = document.getElementById("todoInput").value;

    //將資料儲存到ARRAY備用
    todoArray.push(input);

    //取得todoList裡面的HTML（innerHTML）
    let html = document.getElementById("todoList").innerHTML;
    html += "<li>" + input + "</li>"; //組合新的html，並用+=加在後面
    document.getElementById("todoList").innerHTML = html;  //

}

btnAdd.addEventListener("click", onBtnClick);