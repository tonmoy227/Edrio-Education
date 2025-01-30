/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";

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
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		});
		wow.init();
	};
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
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.ed-scrollup').fadeIn();
		} else {
			$('.ed-scrollup').fadeOut();
		}
	});
	$('.ed-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$('.cart_close_btn, .body-overlay').on('click', function () {
		$('.cart_sidebar').removeClass('active');
		$('.body-overlay').removeClass('active');
	});

	$('.header-cart-btn').on('click', function () {
		$('.cart_sidebar').addClass('active');
		$('.body-overlay').addClass('active');
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
	setTimeout(() => {
		var a = document.querySelectorAll(".btn-spin a");
		a.forEach(function (a) {
			a.addEventListener("mouseover", function () {
				var c, b, d;
				!a.classList.contains("animating") &&
				!a.classList.contains("mouseover") &&
				(a.classList.add("animating", "mouseover"),
					(c = a.innerText.split("")),
					setTimeout(function () {
						a.classList.remove("animating");
					}, (c.length + 1) * 50),
					(b = a.dataset.animation),
					b || (b = "ed-spin"),
					(a.innerText = ""),
					c.forEach(function (b) {
						b == " " && (b = "&nbsp;"), (a.innerHTML += '<span class="letter">' + b + "</span>");
					}),
					(d = a.querySelectorAll(".letter")),
					d.forEach(function (a, c) {
						setTimeout(function () {
							a.classList.add(b);
						}, 50 * c);
					}));
			}),
			a.addEventListener("mouseout", function () {
				a.classList.remove("mouseover");
			});
		});
	}, 100);
	// Select option
	$(document).ready(function() {
		$('.ed-option select').niceSelect();
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){
			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($(".agt_hero_title, .banner_title, .hero_title_2").length) {
					var AGTTitleAni = $(".agt_hero_title, .banner_title, .hero_title_2");
					if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('agt_hero_title') ){
							gsap.set(el.split.chars, {
								x: 100,
								opacity: 0,
							});
						}
						if( $(el).hasClass('agt_hero_title_2') ){
							gsap.set(el.split.chars, {
								x: -100,
								scaleX: 0,
								opacity: 0,
							});
						}
						if( $(el).hasClass('agt_hero_title_3') ){
							gsap.set(el.split.chars, {
								y: 100,
								scaleX: 0,
								opacity: 0,
							});
						}
						if( $(el).hasClass('agt_hero_title_4') ){
							gsap.set(el.split.chars, {
								y: 100,
								scaleX: 0,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							opacity: 1,
							duration: 1,
							stagger: .03,
							delay: .1,
							ease: "power3.inOut",
						});

					});
				}
				const edh1 = gsap.timeline();
				edh1
				.from(".h1-img-wrap .item-img", {  scale: .3, yPercent: 100, opacity: 0, borderRadius: 500, duration: 1.5,  ease: "power2.inOut" })
				.from(".h1-text-wrap .h1-text-area .h1_slug", {   x: 100, opacity: 0, duration: 2.5,  ease: "elastic.out(1,0.5)" }, "<=.2")
				.from(".h1-text-wrap .h1-search-box", {   y: 100, opacity: 0, duration: 1.5,  ease: "power2.inOut" }, "<=.2")
				.from(".h1-img-wrap .ed-img-shape1", { yPercent: 100, scale: .5, opacity: 0, duration: 2,  ease: "elastic.out(1,0.5)" },"<=.3")
				.from(".h1-img-wrap .ed-img-shape2", { yPercent: 100, scale: .5, opacity: 0, duration: 2.5,  ease: "elastic.out(1,0.5)" },"<=.3")
				.from(".h1-img-wrap .ed-img-shape3", { yPercent: 100, scale: .5, opacity: 0, duration: 2.5,  ease: "elastic.out(1,0.5)" },"<=.3")
				.from(".h1-img-wrap .ed-img-shape4", { yPercent: 100, scale: .5, opacity: 0, duration: 2.5,  ease: "elastic.out(1,0.5)" },"<=.3")
				.from(".h1-img-wrap .ed-img-shape5", { yPercent: 100, scale: .5, opacity: 0, duration: 2.5,  ease: "elastic.out(1,0.5)" },"<=.3")
				.from(".ed-hero-section-1 .ed-h-shape3", { yPercent: -100, duration: 1.5,  ease: "power2.inOut" },"<=.1")
				.from(".ed-hero-section-1 .ed-h-shape1", { yPercent: -100, duration: 2,  ease: "power2.inOut" },"<=.1")
				.from(".ed-hero-section-1 .ed-h-shape2", { yPercent: 100, duration: 2,  ease: "power2.inOut" },"<=.1");
				if($('.edh-text').length) {
					var edtextarea = $(".edh-text");

					if(edtextarea.length == 0) return; gsap.registerPlugin(SplitText); edtextarea.each(function(paragraph) {

						gsap.utils.toArray(".edh-text p").forEach(paragraph => {
							let timeline = gsap.timeline({
								scrollTrigger: {
									trigger: paragraph,
									start: "top 90%",
									end: "bottom 60%",
									toggleActions: "play none none none"
								}
							});
							let splitText = new SplitText(paragraph, { type: "lines" });
							gsap.set(paragraph, { perspective: 400 });
							timeline.from(splitText.lines, {
								opacity: 0,
								rotationX: -80,
								transformOrigin: "top center -50",
								force3D: true,
								duration: 1,
								delay: 0.5,
								stagger: 0.1
							});
						});

					});
				}
			}, 700);
		})
	});
	if($('.ed-text').length) {
		var edtextarea = $(".ed-text");

		if(edtextarea.length == 0) return; gsap.registerPlugin(SplitText); edtextarea.each(function(paragraph) {

			gsap.utils.toArray(".ed-text p").forEach(paragraph => {
				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: paragraph,
						start: "top 90%",
						end: "bottom 60%",
						toggleActions: "play none none none"
					}
				});
				let splitText = new SplitText(paragraph, { type: "lines" });
				gsap.set(paragraph, { perspective: 400 });
				timeline.from(splitText.lines, {
					opacity: 0,
					rotationX: -80,
					transformOrigin: "top center -50",
					force3D: true,
					duration: 1,
					delay: 0.5,
					stagger: 0.1
				});
			});

		});
	}
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
// Testimonial Slider	
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
// Course Slider Slider		
	if($(".ed-course-slider-2").length) {
		const swiper = new Swiper(".ed-course-slider-2" , {
			speed: 500,
			loop: true,
			spaceBetween: 18,
			pagination: {
				el: ".ed-course-pagi",
				clickable: true,
			},
			autoplay:  {
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
				1024: {
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
				1800: {
					slidesPerView: 5,
				},
			},
		})
	}
	// Team Slider		
	if($(".ed-team-slider-2").length) {
		const swiper = new Swiper(".ed-team-slider-2" , {
			speed: 500,
			loop: true,
			spaceBetween: 0,
			pagination: {
				el: ".ed-team-pagi",
				clickable: true,
			},
			// autoplay:  {
			// 	delay: 5000,
			// },
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
				},
				1199: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
				1800: {
					slidesPerView: 3,
				},
			},
		})
	}
// Animation		
	gsap.utils.toArray('.ed_left_img').forEach((el, index) => { 
		let edImg3 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 60%",
				end: "buttom 20%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		edImg3
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1, rotateZ: -45, scale: 0.5, x: "-=200"}, {opacity: 1,  rotateZ: 0, scale: 1, x: 0, duration: 1, immediateRender: false})
	})
	gsap.utils.toArray('.ed_top_img').forEach((el, index) => { 
		let edImg4 = gsap.timeline({
			scrollTrigger: {
				trigger: ".ed-top-rate-content",
				scrub: 1,
				start: "top 50%",
				end: "buttom 10%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		edImg4
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1, rotateY: -45, scale: 0.5, yPercent: 100}, {opacity: 1,  rotateY: 0, yPercent: 0, scale: 1, x: 0, duration: 1, immediateRender: false})
	})
	gsap.utils.toArray('.ed_top_img_2').forEach((el, index) => { 
		let edImg5 = gsap.timeline({
			scrollTrigger: {
				trigger: ".ed-top-rate-content",
				scrub: 1,
				start: "top 50%",
				end: "buttom 10%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		edImg5
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  scale: 1.2, yPercent: -100}, {opacity: 1,   yPercent: 0, scale: 1, x: 0, duration: 1, immediateRender: false})
	})
// Animation
	if($('.ed-sec-tt-anim').length) {
		var edtitle = $(".ed-sec-tt-anim");

		if(edtitle.length == 0) return; gsap.registerPlugin(SplitText); edtitle.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			if( $(el).hasClass('ed-has-anim') ){
				gsap.set(el.split.words, {
					opacity: .3,
					y: "100",
				});
			}
			el.anim = gsap.to(el.split.words, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					markers: false
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .4,
				stagger: 0.15,
			});

		});
	}
	// Animation 2
	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 80%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0,  x: "-=30"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
	});
})(jQuery);