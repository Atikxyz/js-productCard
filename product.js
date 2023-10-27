function productInfo(info) {
  const { image, title, price, description } = info;

  return `
     <div class="product">
         <img src="${image}" alt="">
          <h3>${price}$</h3>
          <h2>${title.length>20?title.slice(0,20)+"...":title}</h2>
          <p>${description.length>60?description.slice(0,60)+"... ":description}de</p>
     </div>
    `
}

export default productInfo;