(function () {

	var modal = document.querySelector(".modal");
	var modalBtn = document.querySelector(".modal-btn");
	var closeButton = document.querySelector(".close-button");

	 toggleModal = () => {
	    modal.classList.toggle("show-modal");
	}

	 windowOnClick = (event) => {
	    if (event.target === modal) {
	        toggleModal();
	    }
	}

	modalBtn.addEventListener("click", toggleModal);
	closeButton.addEventListener("click", toggleModal);
	window.addEventListener("click", windowOnClick);

	//invoke modal in page load
	//toggleModal();

})();