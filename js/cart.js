let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let miniCart = JSON.parse(localStorage.getItem("miniCart") || "[]");
let valueOfTotal=0;

window.onload = () => {
    display(0);
    let totalPrice = document.querySelector('#totalPrice');
    for (i = 0; i < cart.length; i++) {
        // console.log(cart[i].price * cart[i].number);
        valueOfTotal +=cart[i].price * cart[i].number;
    }
    totalPrice.innerHTML="$ "+Math.floor(valueOfTotal);
}
function display(remove) {

    if (remove == true) {
        var elem = document.getElementById('row');
        // elem.parentNode.removeChild(elem);
        // console.log(elem.parentNode.removeChild(elem));
        elem.innerHTML = "";
        console.log("inside the truw remove of the fn to chage  "+miniCart[1]);
    }
    for (let i = 0; i < cart.length; i++) {
        let row = document.getElementById("row");
        let image = document.createElement("img");
        let pName = document.createElement('p');
        let pPrice = document.createElement('p');
        var input = document.createElement('input');
        let pTotal = document.createElement('p');
        let btnDel = document.createElement('button');
        let divOuter = document.createElement('div');
        let rowDivOuter = document.createElement('div');
        let div1Inner = document.createElement('div');
        let div2Inner = document.createElement('div');
        let div3Inner = document.createElement('div');
        let div4Inner = document.createElement('div');
        let div5Inner = document.createElement('div');

        divOuter.className = "col-12 p-4 ";
        rowDivOuter.className = "row";
        div1Inner.className = "col-sm-4 col-3 text-left ";
        div2Inner.className = "col-sm-2 col-3 text-center ";
        div3Inner.className = "col-sm-2 col-3 text-center ";
        div4Inner.className = "col-sm-2 col-3 text-center ";
        div5Inner.className = "col-sm-2 col-12 text-center ";
        // hr.setAttribute("style","border-top: 2px solid rgba(154, 219, 22, 0.9);")
        image.setAttribute("src", cart[i].image);
        image.setAttribute("style", "width:50px");//fe 7aga 3,alat fe el ma2asat lazem azbotha w el responsive kaman
        // image.className="";
        pName.innerHTML = cart[i].name;
        pName.className = " pl-1 d-none d-sm-inline";
        pPrice.innerHTML = "$ " + Math.floor(cart[i].price);
        pPrice.className = "text-danger font-weight-bold pt-3";
        pPrice.setAttribute("id", `price` + i + ``);
        input.setAttribute("type", "number");
        input.setAttribute("min", "1");
        input.setAttribute("max", `` + cart[i].Quantity + ``);
        input.setAttribute("id", `` + cart[i].id + ``);
        input.setAttribute("onkeyup", `inputChange("` + cart[i].id + `","` + i + `")`)
        input.setAttribute("value",``+cart[i].number+``)
        input.className = "rounded mt-3 ml-3  w-75 text-left";
        pTotal.innerHTML = "$ " + (Math.floor(cart[i].price) * cart[i].number );
        pTotal.className = "font-weight-bold pt-3";
        pTotal.setAttribute("id", `total` + i + ``)
        btnDel.className = "btn btn-outline-danger mt-2 ";
        btnDel.setAttribute("onclick", `del("` + cart[i].id + `")`);
        // btnDel.setAttribute("type","button");
        btnDel.innerHTML = "Remove";
        div1Inner.append(image);
        div1Inner.append(pName);
        div2Inner.append(pPrice);
        div3Inner.append(input);
        div4Inner.append(pTotal);
        div5Inner.append(btnDel);
        divOuter.append(rowDivOuter);
        rowDivOuter.append(div1Inner);
        rowDivOuter.append(div2Inner);
        rowDivOuter.append(div3Inner);
        rowDivOuter.append(div4Inner);
        rowDivOuter.append(div5Inner);
        row.append(divOuter);

    }
}

function del(id) {
    let priceOfItem;
    let remove = true;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            // delete cart[i];
            priceOfItem = Math.floor(cart[i].price);
            console.log("price of single removed item: " + cart[i].price);
            cart.splice(i, 1);
            let x=totalPrice.innerHTML;
            var split = x.split(" ");
            console.log("in delete "+split[1]);
            totalPrice.innerHTML="$ "+Math.floor((+split[1])-priceOfItem);
             let u = document.querySelector(`#total` + i + ``).innerHTML;
             var split2 = u.split(" ");
            console.log("item * number "+split2[1]);
    
        }

    }
    localStorage.setItem('cart', JSON.stringify(cart));

    let removeNumCart = miniCart[0] - 1;
    console.log(miniCart[1]+" -- "+ split2[1])
    let removePriceCart = miniCart[1] - split2[1];
    

    console.log(" number keep in the miniCart "+removePriceCart);
    miniCart = [removeNumCart,removePriceCart]
    localStorage.setItem("miniCart", JSON.stringify(miniCart));
    console.log(miniCart);
    totalPrice.innerHTML="$ "+Math.floor(miniCart[1]);

    display(remove);
}


function inputChange(id, i) {
    let input = document.querySelector(`#` + id + ``);
    let inputValue = + input.value;
    let pTotal = document.querySelector(`#total` + i + ``);
    let pPrice = document.querySelector(`#price` + i + ``).innerHTML;
    var result = pPrice.split(" ");
    let maxInput = input.max;
    if (inputValue > maxInput) {
        alert(`your maximum quantity of this product is ` + maxInput + ` not ` + inputValue );
        input.value = maxInput;
        pTotal.innerHTML = `$ ` + input.value * (+result[1]) + ``;

    }
    else if (inputValue == 0) {
        input.value = "";
        pTotal.innerHTML = `$ ` + (+result[1]) + ``;
    }
    else {
        pTotal.innerHTML = `$ ` + inputValue * (+result[1]) + ``;

    }
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        let x = document.querySelector(`#total` + i + ``).innerHTML;
        var split = x.split(" ");
        // console.log(typeof (split[1]));
        sum += (+split[1]);
        // console.log(sum);
        // console.log("no of items "+miniCart[0]);
        
        miniCart = [miniCart[0], sum]
        localStorage.setItem("miniCart", JSON.stringify(miniCart));
        
        totalPrice.innerHTML ="$ "+ Math.floor(sum);

    }



}
