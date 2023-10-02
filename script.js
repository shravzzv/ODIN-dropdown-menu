const triggerEl = document.querySelector('.trigger')

const handleDropDown = () => {
  triggerEl.classList.toggle('active')
}

triggerEl.addEventListener('click', handleDropDown)
