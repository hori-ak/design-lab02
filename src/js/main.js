// import
import loadWebFont from "./module/loadWebFont";
import Navigation from "./module/navigation";
// import observeAnimation from "./module/setAnimation";
//import observeNav from "./module/observeNavigation";
//import { openGlobalNavigation, removeClassOnHTML } from "./module/openGlobalNavigation";
// import Accordion from "./module/accordion";
import switchViewport from "./module/fixViewport";
import SmoothScroll from "smooth-scroll";
// import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';

const WebFont = ['Noto+Sans+JP:400,700','Roboto']; //Googleフォントの指定 (Array)
const minWindowWidth = 375; //最小ウインドウ幅

//スライダー（swiper）
// const swiper = new Swiper(".mySwiper", {
// 	modules: [Navigation, Pagination, Autoplay,Scrollbar],
// 	slidesPerView: 3,
// 	spaceBetween: 15,
// 	autoplay: {
// 		delay: 1500,
//   },
// 	/*
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		700: {
//       slidesPerView: 5,
//       spaceBetween: 30
//     }
//   }*/
// });

//ナビゲーションの動き
const menuButton = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menuElement = document.getElementById('nav');
const menuLinkElements = menuElement.querySelectorAll('a');
const navMenu = new Navigation('is-open', 'menu-btn');

navMenu.toggle(menuButton);
navMenu.addCloseEvent(overlay);
menuLinkElements.forEach(elem => { navMenu.addCloseEvent(elem);});

//スムーススクロール
new SmoothScroll('a[href*="#"]',{
  header: '[data-scroll-header]',
	speed: 50,
	updateURL: false, 
	//speedAsDuration: true,
});

//アコーディオン
// const AcBtns = document.querySelectorAll(".js-btn"); //ボタン
// const AcDatas = document.querySelectorAll(".js-data"); //開かせる要素
// const acToggle = new Accordion(AcBtns, AcDatas);

//ナビメニュー
//const menuLinkElement = ".js-nav-menu a";
//const addOpenClassName = "is-open";
//const menuBtnId = "menu-btn";
//const overlayId = "overlay";


  // エレメントを取得
const target = document.querySelector(".l-content");
const buttonElement = document.querySelector(".p-fix-top-button");	

// 発火した時の処理
const handleObserve = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			buttonElement.setAttribute("data-visible", "false");
		} else {
			buttonElement.setAttribute("data-visible", "true");
		}
	});
};

// IntersectionObserverのオプション設定
const observerOptions = {
	root: null,
	rootMargin: "-100px 0px",
	threshold: 0
};

// IntersectionObserverのインスタンス化
const observer = new IntersectionObserver(handleObserve, observerOptions);
	
observer.observe(target);

//イベント **********************************************************

//ぺージロード時に処理
document.addEventListener("DOMContentLoaded", () => {
	loadWebFont( WebFont );
	// observeAnimation();
	//observeNav();
	//openGlobalNavigation(menuLinkElement, addOpenClassName, menuBtnId, overlayId);
	switchViewport( minWindowWidth );
}, false);

// リサイズ時に処理
window.addEventListener('resize', () => {
	switchViewport( minWindowWidth );
	//removeClassOnHTML( addOpenClassName );
	navMenu.close();
}, false);