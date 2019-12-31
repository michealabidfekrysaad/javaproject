let btn = document.querySelector('#btn');

btn.addEventListener('click',
  function send(e) {
    e.preventDefault();
    let name = document.querySelector('#name')
    let mail = document.querySelector('#mail')
    let msg = document.querySelector('#msg')
    let sub = document.querySelector('#sub')
    if (name.value != "" && mail.value != "" && sub.value != "" && msg.value != "") {
      const data = {
        name: name,
        email: mail,
        message: msg,
        subject: sub,
      };
      console.log(data)


      let url = "https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us?fbclid=IwAR1KXVoBvdAT9Bxoe0CktNACxUDLoZuQPav6uldZ1rM5_SlgUNhs9exiqI8";

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }
        $(name).val("");
         $(mail).val("");
         $(sub).val("");
         $(msg).val("");
  })


