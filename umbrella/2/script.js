"use strict";
// меню
var toggleMenuBtn = document.querySelector(".show-btn--menu");
var navMenu = document.querySelector(".base-header__menu");

toggleMenuBtn.addEventListener('click', function(){
	navMenu.classList.toggle("visible");
});

// слайдер
var sliderSwitch = document.querySelectorAll(".slider__switch");

var sliderSwitcher = document.querySelectorAll(".slider__switch .slider__switcher");

for (var i = 0; i < sliderSwitcher.length; i++) {
	sliderSwitcher[i].addEventListener('click', ((n) => { 

    return function() {
      var sliderSwitcherActive = document.querySelector(".slider__switcher--active");
      var sliderItemVisited = document.querySelector(".slider__list-item--visited");
      var sliderItem = document.querySelectorAll(".slider__list-item");

      sliderSwitcherActive.classList.remove("slider__switcher--active");
      this.classList.add("slider__switcher--active");

      sliderItemVisited.classList.remove("slider__list-item--visited");
      sliderItem[n].classList.add("slider__list-item--visited");
    }

  })(i))
}
