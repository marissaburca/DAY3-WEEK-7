fetch('https://striveschool-api.herokuapp.com/books')
.then((res)=>{ 
    if(res.ok){
    return res.json()
} else{
    throw new Error('Server Error')
}
})
.then((datasource)=>{
    console.log(datasource);
    datasource.forEach(element => {
    const books = document.getElementById('collection')
    const book = document.createElement('div')
    book.classList.add('col','g-1')
    
    
    const details = document.createElement('div')/* elemento a cui appendere dettagli card */
    details.classList.add('card','mb-2')
    
    const photo = document.createElement('img')
    photo.classList.add('card-img-top')
    photo.src = element.img
    details.appendChild(photo)
    const body= document.createElement('div')
    body.classList.add('card-body')
   
    details.appendChild(body)
    const title = document.createElement('h5')
    title.classList.add('card-title','fs-5')
    title.textContent = element.title
    
    const price = document.createElement('p')
    price.classList.add('card-text')
    price.innerText= element.price +' €'
    
    const discard= document.createElement('a')
    discard.classList.add('btn','btn-warning','m-3')
    discard.innerText= 'Discard'
    discard.addEventListener('click',()=>{
     book.style.display = "none"
    })
 
    body.appendChild(discard)
    const buy= document.createElement('a')
    buy.classList.add('btn','btn-success')
    buy.innerText= 'Add to cart'
    buy.addEventListener('click',()=>{
        const addToCart = document.getElementById('cart')
        const added = document.createElement('li')
        added.classList.add('nav.item')
        added.innerText =element.title
        addToCart.appendChild(added)
        const remove = document.createElement('a')
        remove.classList.add('btn','btn-danger')
        remove.innerText = 'Discard'
        added.appendChild(remove)
       })
    body.appendChild(title)
    body.appendChild(price)
    body.appendChild(discard)
    body.appendChild(buy)
    
    book.appendChild(details)
    books.appendChild(book)
    
    
    
    
    
    
    
   
    body.appendChild(buy)
    
    book.appendChild(details)
    

    });
   
})
.catch((err)=>{
    alert('Server Error')
})