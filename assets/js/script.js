/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	jQuery(window).on('load', function(){
		jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
		
	});
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .6, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	document.addEventListener("mousemove", function e(t) {
		try {
			t.target;
			gsap.timeline({
				defaults: {
					x: t.clientX,
					y: t.clientY
				}
			}).to(".cursor1", {
				ease: "power2.out"
			}).to(".cursor2", {
				ease: "power2.out"
			}, "-=0.4")
		} catch (o) {
			console.log(o)
		}
	});
	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	// Select option
	$(document).ready(function() {
		$('.ed-option select').niceSelect();
	});
	// Featured Class Slider
	const initializeSwipers = () => {
		var slider = new Swiper('.ed-ft-class-slider', {
			spaceBetween: 30,
			slidesPerView: 4,
			loop: true,
			speed: 1000,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			navigation: {
				prevEl: ".ed-ft-button-prev",
				nextEl: ".ed-ft-button-next",
			},
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1500': {
					slidesPerView: 3,
				},
				'1400': {
					slidesPerView: 3,
				},
				'1300': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'650': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};
	const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
	tabs.forEach(tab => {
		tab.addEventListener('shown.bs.tab', () => {
			initializeSwipers();
		});
	});
	window.addEventListener('load', initializeSwipers);

// Team Class Slider
	if($('.ed-team-slide').length) {
		let slider = new Swiper('.ed-team-slide', {
			loop: true,
			speed: 500,
			spaceBetween: 0,
			spaceBetween: 38,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
				1400: {
					slidesPerView: 5,
				},
				1600: {
					slidesPerView: 5,
				},
			},

		});
	};
	if($('.ed-testimonial-slide').length) {
		let slider = new Swiper('.ed-testimonial-slide', {
			loop: true,
			spaceBetween: 48,
			speed: 700,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 2,
				},
				1400: {
					slidesPerView: 2,
				},
				1600: {
					slidesPerView: 2,
				},
			},

		});
	};
})(jQuery);