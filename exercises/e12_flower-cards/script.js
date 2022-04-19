const flowers = [
    {
      name: "Tulip",
      color: "yellow",
      image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
      name: "Daffodil",
      color: "yellow",
      image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
      name: "Sunflower",
      color: "yellow",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
      name: "Bluebell",
      color: "blue",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
      name: "Rose",
      color: "red",
      image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
  ];
  

  //RENDER FLOWER TO WEBPAGE


  const ul = document.querySelector('ul')


  function renderFlowersToPage(flowers){
    for(i=0; i<flowers.length; i++){
        let list_item= document.createElement('li');
        list_item.classList.add(flowers[i].color,'cards')

        //flower name
        let title = document.createElement("h3");
        title.textContent=flowers[i].name
        //flower color
        let color = document.createElement("p");
        color.textContent=flowers[i].color
        //flower image
        let image = document.createElement("img");
        image.setAttribute("src",flowers[i].image);
        list_item.appendChild(title);
        list_item.appendChild(color);
        list_item.appendChild(image);
        ul.appendChild(list_item);
    }
  }

  renderFlowersToPage(flowers);

  // FILTER FLOWERS BY COLOR

  let filterBtns = document.querySelector('.filters');
  let cards = document.querySelectorAll('.cards');

  console.log(cards);

  function filterFn(event){

    const filterValue = event.target.getAttribute('data-filter');
    
    console.log(filterValue)

    for(let i = 0; i < cards.length;i++){
      console.log(cards[i])
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide');
        cards[i].classList.add('show');
      }else{
        cards[i].classList.add('hide');
        cards[i].classList.remove('show');
      }
    }
  }

  
  filterBtns.addEventListener('click', filterFn)