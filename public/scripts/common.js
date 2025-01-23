const navSectionTitles = document.querySelectorAll('.section-title')
const cart = document.querySelector('cart')
const cartBtn = document.querySelector('.cart-btn')
for(const sectionTitle of navSectionTitles){
  const section = sectionTitle.parentElement
  const sectionMenu = section.querySelector('ul')
  sectionTitle.addEventListener('click', function(){
    navSectionTitles.forEach(el => {
      const newSection = el.parentElement
      if(newSection == section) return
      const newSectionMenu = newSection.querySelector('ul')
      newSectionMenu.classList.contains('active') ? newSectionMenu.classList.remove('active') : ''
    })
    sectionMenu.classList.contains('active') ? sectionMenu.classList.remove('active') : sectionMenu.classList.add('active')
  })
}

cartBtn.addEventListener('click', function(){
  cart.classList.toggle('active')
})

document.body.addEventListener('click', function(e){
  if(e.target !== navSectionTitles[0] && e.target !== navSectionTitles[1]){
    navSectionTitles.forEach(el => {
      const newSection = el.parentElement
      const newSectionMenu = newSection.querySelector('ul')
      newSectionMenu.classList.contains('active') ? newSectionMenu.classList.remove('active') : ''
    })
  }
})
