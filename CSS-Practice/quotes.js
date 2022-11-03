let quotes = [
    `The hallmark of a real man is controlling himself, controlling his emotions, and acting appropriately regardless of how he feels.`,
    `There is an elite club that youre not in and none of those people are arguing about the dumb sh*t youre arguing about.`,
    `I will never apologise because I dont make mistakes.`,
    `Its just about if youre high enough you can throw it all away… If corruption exists, which it does, let us all play.`,
    `What color is your Bugatti?`,
    `How to be successful as a man… First thing, you need is freedom cus you aint a man if youre not free.`,
    `I am the only complete man. I have it all. A knight means nothing without the bishops and rooks. You must have everything. You must be a professional.`,
    `Get important people to recognize your face. That's your way out.`,
    `Stop aiming for the giddish childish joy of a Christmas morning. We're adults. Just be satisfied nobody you love has died today.`,
    `Have you taken advantage of the few things you actually control? Or still hoping to just get lucky?`,
    `How many actually rich people are you speaking to daily? None? One? That is what will actually save you from a slave's existence. Rewire your brain.`,
    `I find that very few men really want freedom. They'd rather play it safe. And take the highest hourly wage they can get their hands on. Hoping that will make them rich when the math clearly doesn't add up.`,
    `Youre hoping and waiting. Thats a dream. I had a plan. Not dreams.`,
    `If the punishment for a 'crime' is a fine. Then it's an activity which is legal for a price.`,
    `If you're known as crazy. Your life is going to go one of two ways. Absolute success, or the absolute bottom. But you can rest assured you most likely won't end up average like the rest`,
    `Listen to rich people. It's that simple.`,
    `Most of you have been down so long that getting up hasn't crossed your mind.`,
    `No exceptional person ever lived like an average person.`,
    `My dad always used to say 'outstanding in the rain' as opposed to simply 'outstanding' when he was impressed.

    I asked him: Dad, why the rain?
    
    And he replied: Son, any jackass can perform when the sun is shining.`,
    `It's who you know that makes what you know important.`,
    `Lacking motivation is not a real problem. Only absolute losers 'suffer' with the inability to strive to become something`,

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