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
    book.classList.add('col')

    const details = document.createElement('div')/* elemento a cui appendere dettagli card */
    details.classList.add('card','mb-5','text-center')
    
    const photo = document.createElement('img')
    photo.classList.add('card-img-top')
    photo.src = element.img
    details.appendChild(photo)
    const body= document.createElement('div')
    body.classList.add('card-body','d-flex','flex-column','pb-0')
   
    details.appendChild(body)
    const title = document.createElement('h6')
    title.classList.add('card-title','mb-3','flex-grow-1')
    title.textContent = element.title
    
    const price = document.createElement('p')
    price.classList.add('card-text')
    price.innerText= element.price +' €'
    
    const discard= document.createElement('a')
    discard.classList.add('btn','btn-warning','mb-2','mx-auto','px-5',)
    discard.innerText= 'Discard'
    discard.addEventListener('click',()=>{
     book.style.display = "none"
    })
 
    body.appendChild(discard)
    const buy= document.createElement('a')
    buy.classList.add('btn','btn-success','mb-2','mx-auto','px-5')
    buy.innerText= 'Add to cart'
    buy.addEventListener('click',()=>{
        const addToCart = document.getElementById('cart')
        const added = document.createElement('li')
        added.classList.add('nav.item')
        added.innerText =element.title
       
        addToCart.appendChild(added)
        const remove = document.createElement('a')
        remove.classList.add('btn','btn-danger','bi','bi-trash3','m-3')
        remove.addEventListener('click', ()=>{
            added.style.display ='none'
        })
       
        added.appendChild(remove)
       })
    body.appendChild(title)
    body.appendChild(price)
    body.appendChild(buy)
    body.appendChild(discard)
   
    
    book.appendChild(details)
    books.appendChild(book)
   });
   
})
.catch((err)=>{
    alert('Server Error')
})

const now= ()=>{
    const name = document.querySelectorAll('#cart > li ')
    const result = name.values
    result.forEach((elem)=>{
        sessionStorage.setItem('newTitle',elem)
    })
}