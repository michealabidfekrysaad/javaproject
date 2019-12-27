
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    let specificId;
    let specificItem;
    for (let i = 0; i < queries.length; i++) {
    //   console.log(queries[i]);
      specificId = queries[i];
      //de betgeble el id beta3 el product mn el page el ra2esy
      //3n tare2 el url beta3 el saf7a
    }
    users = JSON.parse(localStorage.getItem("arrayOfObject") || "[]");
    for (let i = 0; i < users.length; i++) {
      if (users[i].ProductId == specificId) {
        // console.log(users[i]);  
        specificItem = {
          name: users[i].Name,
          image: users[i].ProductPicUrl,
          descripe: users[i].Description,
          price: users[i].Price,
          width:users[i].Width,
          height:users[i].Height,
          Status:users[i].Status
        }
        //hena ana masek el product ale ana 3amalt 3aleh click 3ashan ashof el details beta3to
        break;
      }
    }
    //hena ba2asem el saf7a le div9 3ala el shemal w div 3 3ala el yemen 
    //el div9 ana me2asemo div4left w div8right
    //div4left gowah el sora w div8right gowah el kalam
    //w div3 ale 3ala el yemen ana 3amel gowaha card
    row = document.getElementById('row');
    div9 = document.createElement('div');
    div4left = document.createElement('div');
    div4right = document.createElement('div');
    div3 = document.createElement('div');
    image = document.createElement('img');
    h5=document.createElement('h5');
    p=document.createElement('p');
    p1=document.createElement('p');
    p2=document.createElement('p');
    p3=document.createElement('p');
    rowdiv9=document.createElement('div');
    div9.className = "col-md-9 ";
    div4left.className = "col-md-4 text-sm-center";
    div4right.className = "col-md-8  mt-3 text-sm-left";
    div3.className = "col-md-3 mt-3";
    rowdiv9.className="row";
    image.setAttribute("src",specificItem.image);
    image.className="img-fluid border border-primary rounded-circle";
    h5.innerHTML=specificItem.name;
    h5.className="text-primary text-capitalize";
    p1.className="text-primary ";
    p2.className="text-danger font-weight-bold";
    p3.className="text-primary ";
    p.innerHTML=specificItem.descripe;
    p1.innerHTML="width is: "+specificItem.width+" mm";
    p3.innerHTML=" height is: "+specificItem.height+" mm";
    p2.innerHTML="item price is: "+specificItem.price+" $";
    p.appendChild(p1);
    p.appendChild(p3);
    p.appendChild(p2);   
    div9.append(rowdiv9);
    rowdiv9.append(div4left);
    rowdiv9.append(div4right);
    div4left.append(image);
    row.append(div9);
    row.append(div3);
    div4right.append(h5);
    div4right.append(p);
    //card initiallization start here
    divCard=document.createElement('div');
    divCard.className="card text-left"
    divCardBody=document.createElement('div');
    divCardBody.className="card-body";
    divCard.append(divCardBody);
    pCard=document.createElement('p');
    pCard.className="card-title text-primary";
    span=document.createElement('span');
    // console.log(span);
    span.className="font-weight-bold";
    span.setAttribute("style","color:green;")
    span.innerHTML=specificItem.Status;
    pCard.innerHTML="Availability: ";
    pCard.appendChild(span);
    divCardBody.append(pCard);
    p2Card=document.createElement('p');
    p2Card.className="card-text font-weight-bold";
    p2Card.setAttribute("style","font-size:30px");
    p2Card.innerHTML="$ "+specificItem.price;
    divCardBody.append(p2Card);
    // divCardBody.append(hr)
    p3Card=document.createElement('p');
    p3Card.innerHTML="quantity:";
    divCardBody.append(p3Card);
    hr=document.createElement('hr');
    divCardBody.append(hr);
    input=document.createElement('input');
    input.className="form-control";
    input.setAttribute("type","number");
    input.setAttribute("min","1");
    divCardBody.append(input);
    a=document.createElement('a');
    // console.log(a);
    a.setAttribute("href","index.html");
    a.setAttribute("target","_blank");
    a.className="btn btn-outline-primary mt-3 text-center";
    a.innerHTML="Add To Cart";
    divCardBody.append(a);
    div3.append(divCard);

