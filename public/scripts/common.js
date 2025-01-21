const navSectionTitles = document.querySelectorAll('.section-title')

for(const sectionTitle of navSectionTitles){
  const section = sectionTitle.parentElement
  const sectionMenu = section.querySelector('ul')
  sectionTitle.addEventListener('click', function(){
    navSectionTitles.forEach(el => {
      const section = sectionTitle.parentElement
      const sectionMenu = section.querySelector('ul')
      sectionMenu.classList.contains('dp-f fl-dr-c gap-20') ?  sectionMenu.classList.remove('dp-f fl-dr-c gap-20') : ''
    })
    sectionMenu.classList.contains('dp-n') ? (sectionMenu.classList.remove('dp-n') , sectionMenu.classList.add('dp-f fl-dr-c gap-20')) : sectionMenu.classList.add('dp-n')
  })
}