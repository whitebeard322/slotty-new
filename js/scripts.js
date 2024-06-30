const header = document.querySelector('header')
const burger = document.querySelector('.burger')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
	header.classList.toggle('active')
	if (header.classList.contains('active')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = ''
	}
})