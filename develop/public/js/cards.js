class Slider {
	constructor(slider) {
		this.currentImg = 0;
		this.speed = 500;

		this.keyboardHandler = this.keyboardHandler.bind(this);

		this.slider = slider;
		this.slider.parentNode.tabIndex = 0;
		this.slider.parentNode.addEventListener("focus", this.keyboardHandler);
		this.slider.parentNode.addEventListener("blur", this.keyboardHandler);
		this.slider.parentNode.addEventListener("click", this.keyboardHandler);

		this.maxImages = this.slider.children.length;
		this.IMG_WIDTH = this.slider.offsetWidth / this.maxImages;
		this.slider[Symbol.for("slider")] = this;
	}

	keyboardHandler(event) {
		if (event.type === "focus") {
			document.addEventListener("keydown", this.keyboardHandler);
		} else if (event.type === "blur") {
			document.removeEventListener("keydown", this.keyboardHandler);
		} else if (event.type === "keydown") {
			if (event.keyCode === 37) this.previousImage();
			if (event.keyCode === 39) this.nextImage();
		} else {
			this.slider.parentNode.focus();
		}
	}

	scrollImages(distance, duration) {
		this.slider.style.cssText += `
        transition-duration: ${(duration / 1000).toFixed(1)}s;
        transform: translate(${-100 * distance / this.maxImages}%, 0);
      `;
	}

	previousImage() {
		this.currentImg = Math.max(this.currentImg - 1, 0);
		this.scrollImages(this.currentImg, this.speed);
	}

	nextImage() {
		this.currentImg = Math.min(this.currentImg + 1, this.maxImages - 1);
		this.scrollImages(this.currentImg, this.speed);
	}
}





class SinglePointer extends EventTarget {
	constructor() {
		super();
		var x,
			y,
			dx,
			dy,
			isActive = false,
			target,
			pointer = this,
			event;

		function handler(event) {
			switch (event.type) {
				case "touchstart":
					x = event.touches[0].screenX;
					y = event.touches[0].screenY;
					isActive = true;
					target = event.target;
					pointer.dispatchEvent(new SinglePointerEvent("start"));
					break;

				case "touchmove":
					if (!isActive) return;
					dx = event.touches[0].screenX - x;
					dy = event.touches[0].screenY - y;
					pointer.dispatchEvent(new SinglePointerEvent("move"));
					break;

				case "touchend":
					if (!isActive) return;
					pointer.dispatchEvent(new SinglePointerEvent("end"));
					isActive = false;
					target = null;
					break;

				case "mousedown":
					x = event.screenX;
					y = event.screenY;
					isActive = true;
					target = event.target;
					pointer.dispatchEvent(new SinglePointerEvent("start"));
					break;

				case "mousemove":
					if (!isActive) return;
					dx = event.screenX - x;
					dy = event.screenY - y;
					pointer.dispatchEvent(new SinglePointerEvent("move"));
					break;

				case "mouseup":
					if (!isActive) return;
					pointer.dispatchEvent(new SinglePointerEvent("end"));
					isActive = false;
					target = null;
					break;
			}
		}

		addEventListener("mousedown", handler);
		addEventListener("mousemove", handler);
		addEventListener("mouseup", handler);
		addEventListener("touchstart", handler);
		addEventListener("touchmove", handler);
		addEventListener("touchend", handler);

		class SinglePointerEvent extends Event {
			get target() {
				return target;
			}
			get dx() {
				return dx;
			}
			get dy() {
				return dy;
			}
		}
	}
}


//Variable con el maximo de tamaño que se pueda mover en px
const maximum = 1024 //px

//obtenemos el ancho de la pantalla
const screenWidth = window.screen.width


if (screenWidth < maximum) {

	const pointer = new SinglePointer();

	pointer.addEventListener("start", ({ target }) => {
		Slider.activeElement = (
			target.matches(".slider") && target
			|| target.closest(".slider")
			|| {}
		)[Symbol.for("slider")];
	});

	pointer.addEventListener("move", ({ dx }) => {
		if (!Slider.activeElement) return;

		Slider.activeElement.scrollImages(
			Slider.activeElement.currentImg - dx / Slider.activeElement.IMG_WIDTH,
			0
		);
	});

	pointer.addEventListener("end", ({ dx }) => {
		if (!Slider.activeElement) return;

		if (dx > 90) {
			Slider.activeElement.previousImage();
		} else if (dx < -90) {
			Slider.activeElement.nextImage();
		} else {
			Slider.activeElement.scrollImages(Slider.activeElement.currentImg, Slider.activeElement.speed);
		}

		Slider.activeElement = null;
	});

	for (const element of document.querySelectorAll(".slider")) {
		new Slider(element);
	}


}




