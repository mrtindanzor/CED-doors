const navSectionTitles = document.querySelectorAll('.section-title')

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