document.querySelector('#toggle').addEventListener('click', function() {
	this.classList.toggle("is-active");
	document.getElementById('menu').classList.toggle("open");
  })