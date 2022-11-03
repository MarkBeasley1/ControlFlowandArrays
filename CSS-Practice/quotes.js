let quotes = [
  `The hallmark of a real man is controlling himself, controlling his emotions, and acting appropriately regardless of how he feels.`,
    `There is an elite club that youre not in and none of them people are arguing about the dumb sh*t youre arguing about.`,
    `I will never apologise because I dont make mistakes.`,
    `Its just about if youre high enough you can throw it all away… If corruption exists, which it does, let us all play.`,
    `What color is your Bugatti?`,
    `How to be successful as a man… First thing, you need freedom cus you aint a man if youre not free.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  
    
  
    
  document.querySelector('#main-title').textContent = 'Top G Speaks'
    
  document.querySelector('body').style.backgroundColor = 'blue'
  
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
  
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
  
  document.querySelectorAll('#past-fights > li').forEach((item) => {
    if(item.textContent.trim() === 'Romania'){
      document.querySelector('#past-fights').removeChild(item)
    }
  })

  const li = document.createElement('li')
  li.textContent = 'Luton'
  document.querySelector('#past-fights').appendChild(li)
  
  
  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  heading.textContent = 'Luton'
  const pEl = document.createElement('p')
  pEl.textContent = 'England'
  
  document.querySelector('.main').appendChild(blogPost)
  
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)
  
  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('red')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('black')
    })
  })
  
  });