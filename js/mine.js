let URL ="https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json";
let xhr = new XMLHttpRequest();
let product=[];
let details=[];
let arrDisplay=[];
let count=0;
let countOfItemInCart=0;
xhr.open('GET', URL,true);
xhr.send();

xhr.onload = function() {
    console.log(`onload fn: ${xhr.status}`);
    if(xhr.status !=200){
        alert(`error ${xhr.status}: ${xhr.statusText}`)
    }else {
        console.log(`done onload fn, got ${xhr.response.length} bytes`)
        product= JSON.parse(xhr.response);
             product= product.ProductCollection;
            //  console.log(product[0]);
             //hena masakt el array of object
             localStorage.setItem("arrayOfObject",JSON.stringify(product));
           display()
           
    }
  };
  
  xhr.onerror = function() { // only triggers if the request couldn't be made at all
    alert(`Network Error`);
  };
  
  xhr.onprogress = function(event) { // triggers periodically
    // event.loaded - how many bytes downloaded
    // event.lengthComputable = true if the server sent Content-Length header
    // event.total - total number of bytes (if lengthComputable)
    console.log(`Received ${event.loaded} of ${event.total}`);
  };


  function display (){
      for(let i=0;i<product.length;i++)
      {
        let div=document.createElement('div');
        div.className="col-lg-4  p-2";
        let h4=document.createElement('h5');
        let image=document.createElement('img');
        let link=document.createElement('a');
        link.appendChild(image);
        // image.setAttribute('onclick',`productFunction("`+product[i].ProductId+`")`);
        link.setAttribute('href',`page2.html?`+product[i].ProductId+``);
        link.setAttribute('target','_blank');
       let price=document.createElement('p');
        let btn=document.createElement('button');
        div.appendChild(h4);
        div.appendChild(link);
        div.appendChild(price);
        div.appendChild(btn);
        price.className="mr-5 ml-2 d-inline text-danger"
        btn.innerText="addtocart";
        btn.className="btn colorweb ml-auto";
        btn.setAttribute("id",``+product[i].ProductId+`btn`)
        // console.log(btn);
        btn.setAttribute('onclick',`cartFunction("`+product[i].ProductId+`")`);
        h4.innerHTML=product[i].Name;
        image.setAttribute('src',product[i].ProductPicUrl);
        image.className="d-block";
         image.setAttribute("style","width:80%;height:75%;cursor:pointer");
        price.innerHTML=product[i].Price+" "+ product[i].CurrencyCode;
        // console.log(div)
        $('.row').append(div);
      } 
  }
  
function cartFunction (id){
  let btn =document.querySelector(`#`+id+`btn`);
  btn.disabled = 'disabled';
  btn.innerHTML="Done";
 let spanCount=$(".icon-bar span")[0];
 let spanPrice=$(".icon-bar span")[1];
 console.log(spanPrice);
 console.log(+spanCount.textContent);
 let countToShow=++countOfItemInCart;
 spanCount.innerHTML=countToShow;
 // ana hena gebt el count beta3 el product w 7ashof as3arhom w agmaa3ha
// w a3redha w a5azenhom fe el local storage 3ashan el 7agat teb2a mazbota 3andy


  if(localStorage.getItem("cart")==null)
    {
        details=[];
        rightcart();
    }
else
    {
        details=JSON.parse(localStorage.getItem("cart"));
         console.log(details);
        rightcart();
    }

    function rightcart (){
    for(let i=0;i<product.length;i++){
        if(product[i].ProductId == id){
            let objDetails={
                name:product[i].Name,
                image:product[i].ProductPicUrl,
                price:product[i].Price,
                id:product[i].ProductId,
                Quantity:product[i].Quantity,
                number:++count
            }
            details.push(objDetails);
              // console.log(details);
        }
        
    }
    details.forEach(function(details){
        // console.log("for each click"+details.number);
      });
      localStorage.setItem('cart', JSON.stringify(details));
    }
}


// function  productFunction(id){
//     for(let i=0;i<product.length;i++){
//         if(product[i].ProductId == id){
//             let objDisblay={
//                 name:product[i].Name,
//                 image:product[i].ProductPicUrl,
//                 price:product[i].Price,
//             }
//             // arrDisplay.push(objDisblay);
//             //fe arrDisplay 3ayez amsa7o malhosh lazma fo2 5ales
//               console.log(objDisblay.price);
//               $("#imgShow").attr('src',objDisblay.image)
//               $("#h1Price").text("price is:"+objDisblay.price)
//         }
        
//     }


//}