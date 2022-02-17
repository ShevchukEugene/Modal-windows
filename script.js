function testSite() {
	let button = document.querySelectorAll('.button');
	let popup = document.querySelector('.popup');
	let closePopup = document.querySelector('.close-popup');
	let cross = document.querySelector('.cross');
	let toTop = document.querySelector('.to-top');
	let wrapper = document.querySelector('.wrapper');

	function showPopup() {
		popup.classList.add('popup-active');
		closePopup.classList.add('close-popup-active');
	}

	for (let i = 0; i < button.length; i++) {
		button[i].innerHTML = 'Sign in';
		button[i].addEventListener('click', showPopup);
	}

	function exitPopup() {
		popup.classList.remove('popup-active');
		closePopup.classList.remove('close-popup-active');
	}

	closePopup.addEventListener('click', exitPopup);
	cross.addEventListener('click', exitPopup);

	toTop.addEventListener('click', () => {
		wrapper.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
}
testSite();