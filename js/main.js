$(function () {
	/* ========================================= */
	/* - - - - Initialisation de scripts - - - - */
	/* ========================================= */
	/* =============================== */
	/* - - - - Fonctionaliti�s - - - - */
	/* =============================== */
	/* - - - - MENU BURGER V1 - - - - */
	$("#btn-menuBurger").on('click', function (e) {
		e.preventDefault();
		$("body").toggleClass('js-menu-ouvert');
	});
	/* Sous-menu */
	$("#menuBurger").find(".avecSousMenu > .menuBurger_lnk, .avecSousMenu > .sousMenu_lnk").on('click', function () {
		$(this).parent().parent().find(".avecSousMenu a").not($(this)).removeClass('js-sousMenu-ouvert');
		$(this).toggleClass('js-sousMenu-ouvert');
		$(this).parent().parent().find(".avecSousMenu a").not($(this)).next("ul").slideUp(300);
		$(this).next(".menuBurger_sousMenu").slideToggle(600);
		return false;
	});
	/* - - - - /FIN MENU BURGER - - - - */
	/* - - - Evite le double-submit - - - */
	$('form').on('submit', function (e) {
		var $form = $(this);
		if ($form.data('submitted') === true) {
			e.preventDefault();
		} else {
			$form.data('submitted', true);
		}
	});
	$(".erreur").on('keydown', function (event) {
		$(this).removeClass('erreur');
	});
	$(".erreur").on("change", function () {
		$(this).removeClass('erreur');
	});
	/* Renvoie une image par d�faut � la place des images bris�es */
	$('img').one('error', function () { this.src = 'gx/00/defaut.jpg'; });
	$(document).on("focusin", ".form input:not([type=checkbox]):not([type=radio]):not([type=file]), .form textarea, input[name=champRech]", function () { champRempli($(this)); });
	$(document).on("blur", ".form input:not([type=checkbox]):not([type=radio]):not([type=file]), .form textarea, input[name=champRech]", function () { champRempli($(this)); });
	/* ========================= */
	/* - - - - Animation - - - - */
	/* ========================= */
	/* - - - Smooth scroll (Lien Haut de page) - - - */
	$('a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({ scrollTop: target.offset().top }, 750);
				return false;
			}
		}
	});
});
/* ====================== */
/* - - - - Resize - - - - */
/* ====================== */
$(window).on('resize', function () {
});
/* - - - Avoir le libell� d'un champ avec le visuel correspondant - - - */
function champRempli(element) {
	element.each(function () {
		if ($(this)[0].value.length > 0) {
			$(this).addClass("rempli");
		} else {
			$(this).removeClass("rempli");
		}
	})
}
$(window).on('load', function () {
	champRempli($('.form input:not([type=checkbox]):not([type=radio]):not([type=file]), .form textarea, input[name=champRech]'));
});
/* Pour enlever les console.log lorsqu'aucune console n'est disponible */
(function () { var e; var t = function () { }; var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"]; var r = n.length; var i = window.console = window.console || {}; while (r--) { e = n[r]; if (!i[e]) { i[e] = t } } })()
/* ====================== */
/* - - - - menu change on scroll - - - - */
/* ====================== */
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 50) {
		$('body').addClass('activeMenu');
	} else {
		$('body').removeClass('activeMenu');
	}
});
/*Toggle portal btn*/
$(".menu-portal__btn").on("click ", function (event) {
	event.preventDefault();
});
/*
$(".menu-portal__btn").on("mouseout ", function (event) {
	event.preventDefault();
	$(".menu-portal").removeClass("menu-portal--active");
}); */
$("#nouvellesCat, #nouvelleAuteur, #archiveCat").on('change', function () {
	location = $(this).val();
});
/* ========================================= */
/* - - - - FAQ : Si affichage Toggle - - - - */
/* ========================================= */
if (p == '05_100' || p == '01_100') {
	$('.btQuestion').attr('href', 'javascript:;');
	$('.btQuestion').on('click', function () {
		$(this).parent().parent().toggleClass('actif');
		$('#' + $(this).attr('rel')).slideToggle();
	});
}
if (p == '01_100') {
	$(document).ready(function () {
		console.log(document.getElementsByClassName("swiper-slide").length);
		if (document.getElementsByClassName("swiper-slide").length > 1) {
			var swiper = new Swiper('.swiper-container', {
				loop: true,
				autoplay: {
					delay: 5000,
				},
				speed: 1000,
				slidesPerView: 1,
				spaceBetween: 0,
				centeredSlides: true,
				/* autoplay: {
					delay: 5000
				}, */
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpointsInverse: true,
				breakpoints: {
					420: { slidesPerView: 1 },
					768: { slidesPerView: 3 },
					992: { slidesPerView: 3 }
				}
			});
			$('.swiper-slide').on('mouseover', function () {
				swiper.autoplay.stop();
			});
			$('.swiper-slide').on('mouseout', function () {
				swiper.autoplay.start();
			});
		} else {
			/*hide arrows*/
			document.querySelector(".swiper-button-next").style.display = "none";
			document.querySelector(".swiper-button-prev").style.display = "none";
		}
	});
}
/*Add/remove class when close to bottom of page*/
var piedPageHeight = $('.piedPage').outerHeight();
$(window).on('resize', function () {
	piedPageHeight = $('.piedPage').outerHeight();
});
$(window).on('scroll', function () {
	$(".banniereHome__btn_wp").removeAttr("style");
	if ($(window).scrollTop() + $(window).height() > ($(document).height() - 1)) {
		//you are at bottom
		$(".banniereHome__btn_wp").css("bottom", piedPageHeight);
	}
});
if (p == '04_100') {
	$(document).ready(function () {
		if ($(this).width() < 1022) {
			var heightNav = 50;
		} else {
			var heightNav = 180;
		}
		$(window).on('resize', function () {
			if ($(this).width() < 1022) {
				var heightNav = 50;
			} else {
				var heightNav = 180;
			}
		});
		var anchor_position = ($(window.location.hash).offset().top) - heightNav;
		$('html,body').animate({
			scrollTop: anchor_position
		});
	});
}
$(document).ready(function () {
	$('table').wrap("<div class='responsive-table'></div>");
});