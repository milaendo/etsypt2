let main= document.querySelector(".items")
let url= "https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop"

  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status)
          return
        }
        response.json().then(function(data) {
          let htmlstr = ``
            data.results.forEach(function(data){
              htmlstr = `
                <div class="items">
                  <div>
                  <img src="${this.url_170x135}">
                  <span>${data.title} </span>
                  </div>
                
                </div>
              `


            })
            main.innerHTML=htmlstr
         })

      })
