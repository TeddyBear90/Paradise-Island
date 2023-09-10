const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const NavBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section') // zaznacz wszystkie elementy, które mają .section - dlatego ALL
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	NavBars.classList.remove('black-bars-color')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

// Funckja, która obserwuje na jakiej sekci jesteśmy. Dzięku temu zmienia kolor navbara

const handleObserver = () => {
	const currentSection = window.scrollY
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			NavBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			// !section... -> jeżeli sekcja nie posiada klasy .contains = negacja
			NavBars.classList.remove('black-bars-color')
		}
	})
}

// Funkcja wywołująca datę w footerze
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener('click', handleNav)
handleCurrentYear()
window.addEventListener('scroll', handleObserver) // nadajemy nasłuch na całą przeglądarkę, w momencie kiedy zostanie wykryty scroll strony to wywołujemy funkcję
