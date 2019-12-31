
let URL = "https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json";
let xhr = new XMLHttpRequest();
let product = [];
let details = [];
let arrDisplay = [];
let x = 0;
let count = 0;

// let countOfItemInCart=0;
let sumInCart = 0;
// let arrayOfCart=[];
let arrayOfCart = JSON.parse(localStorage.getItem("miniCart"));
let div = document.getElementsByClassName("icon-bar");

if (arrayOfCart == null) {
  arrayOfCart = [0, 0];
}
let spanCount = $(".icon-bar span")[0];
let spanPrice = $(".icon-bar span")[1];
if (arrayOfCart.length > 0) {
  spanCount.innerHTML = arrayOfCart[0]; //hena ba3red 3addad el montagat 3ala el shasha
  spanPrice.innerHTML = arrayOfCart[1] + " $"; //ba3red as3arhom

}
xhr.open('GET', URL, true);
xhr.send();

xhr.onload = function () {

  console.log(`onload fn: ${xhr.status}`);
  if (xhr.status != 200) {
    alert(`error ${xhr.status}: ${xhr.statusText}`)
  } else {
    console.log(`done onload fn, got ${xhr.response.length} bytes`)
    product = JSON.parse(xhr.response);
    product = product.ProductCollection;
    //  console.log(product[0]);
    //hena masakt el array of object
    localStorage.setItem("arrayOfObject", JSON.stringify(product));

    display()

  }
};

xhr.onerror = function () { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};

xhr.onprogress = function (event) { // triggers periodically
  // event.loaded - how many bytes downloaded
  // event.lengthComputable = true if the server sent Content-Length header
  // event.total - total number of bytes (if lengthComputable)
  console.log(`Received ${event.loaded} of ${event.total}`);
};


function display() {
  for (let i = 0; i < product.length; i++) {
    let div = document.createElement('div');
    div.className = "col-lg-4  p-2 mt-5";
    let h4 = document.createElement('h5');
    let image = document.createElement('img');
    let divSpecific = document.createElement('a');
    divSpecific.appendChild(image);
    // image.setAttribute('oncdivck',`productFunction("`+product[i].ProductId+`")`);
    divSpecific.setAttribute('href', `page2.html?` + product[i].ProductId + ``);
    //kan hena feh divnk w ana 3amalto divSpecific
    let price = document.createElement('p');
    let btn = document.createElement('button');
    div.appendChild(h4);
    div.appendChild(divSpecific);
    div.appendChild(price);
    div.appendChild(btn);
    price.className = "mr-5 ml-2 d-indivne text-danger"
    btn.innerText = "Add To Cart";
    btn.className = "btn colorweb ml-auto";
    btn.setAttribute("id", `` + product[i].ProductId + `btn`)
    // console.log(btn);
    btn.setAttribute('onclick', `cartFunction("` + product[i].ProductId + `")`);
    h4.innerHTML = product[i].Name;
    image.setAttribute('src', product[i].ProductPicUrl);
    image.className = "d-block";
    image.setAttribute("style", "width:80%;height:75%;cursor:pointer");
    price.innerHTML = Math.floor(product[i].Price) + " $" ;
    // console.log(div)
    $('.row').append(div);
  }
}



function cartFunction(id) {
  let btn = document.querySelector(`#` + id + `btn`);
  btn.disabled = true;
  btn.innerHTML = "Done";
  btn.style.color="white";
  let countOfItemInCart = 0;
  let countToShow = ++countOfItemInCart;



  if (localStorage.getItem("cart") == null) {
    details = [];
    console.log("this is" + typeof (details));

    rightcart();
  }
  else {
    details = JSON.parse(localStorage.getItem("cart"));
    console.log("this is else" + details);
    rightcart();
  }

  function rightcart() {
    for (let i = 0; i < product.length; i++) {
      if (product[i].ProductId == id) {
        let objDetails = {
          name: product[i].Name,
          image: product[i].ProductPicUrl,
          price: product[i].Price,
          id: product[i].ProductId,
          Quantity: product[i].Quantity,
          number: 1
        }
        details.push(objDetails);
        x = arrayOfCart[1] + (Math.floor(product[i].Price));
        // console.log(parseInt("x"));
        count = arrayOfCart[0] + 1;
        arrayOfCart = [count, x];
        localStorage.setItem("miniCart", JSON.stringify(arrayOfCart));
        spanCount.innerHTML = arrayOfCart[0]; //hena ba3red 3addad el montagat 3ala el shasha
        spanPrice.innerHTML = arrayOfCart[1] + " $"; //hena ba3red as3ar el montagat 3ala el shasha

      }

    }
    localStorage.setItem('cart', JSON.stringify(details));
  }
}

//edit at 30/12 6:20 pm
function myFunction() {
  // Declare variables
  var input, filter, row, div, h5 = [], i, headerValue,priceValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  row = document.getElementById("myrow");
  console.log(row);
  div = row.getElementsByTagName('div');
  // console.log(div);

  // Loop through all divst items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    h5 = div[i].getElementsByTagName("h5")[0];
    p = div[i].getElementsByTagName("p")[0];
    // console.log("this is h5 " + h5)
    headerValue = h5.textContent || h5.innerText;
    priceValue = p.textContent || p.innerText;
    if (headerValue.toUpperCase().indexOf(filter) > -1 || priceValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }

}

