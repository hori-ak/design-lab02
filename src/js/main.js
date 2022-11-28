// import
import loadWebFont from "./module/loadWebFont";
import observeAnimation from "./module/setAnimation";
//import observeNav from "./module/observeNavigation";
//import { openGlobalNavigation, removeClassOnHTML } from "./module/openGlobalNavigation";
import Accordion from "./module/accordion";
import switchViewport from "./module/fixViewport";
import SmoothScroll from "smooth-scroll";
import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';


const WebFont = ['Source+Sans+Pro','Noto+Serif+JP']; //Googleフォントの指定 (Array)
const minWindowWidth = 375; //最小ウインドウ幅

//スライダー（swiper）
const swiper = new Swiper(".mySwiper", {
	modules: [Navigation, Pagination, Autoplay,Scrollbar],
	slidesPerView: 3,
	spaceBetween: 15,
	autoplay: {
		delay: 1500,
  },
	/*
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		700: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }*/
});

//スムーススクロール
new SmoothScroll('a[href*="#"]',{
  header: '[data-scroll-header]',
	speed: 150,
	updateURL: false, 
	//speedAsDuration: true,
});

//アコーディオン
const AcBtns = document.querySelectorAll(".js-btn"); //ボタン
const AcDatas = document.querySelectorAll(".js-data"); //開かせる要素
const acToggle = new Accordion(AcBtns, AcDatas);

//ナビメニュー
//const menuLinkElement = ".js-nav-menu a";
//const addOpenClassName = "is-open";
//const menuBtnId = "menu-btn";
//const overlayId = "overlay";


//イベント **********************************************************

//ぺージロード時に処理
document.addEventListener("DOMContentLoaded", () => {
	loadWebFont( WebFont );
	observeAnimation();
	//observeNav();
	//openGlobalNavigation(menuLinkElement, addOpenClassName, menuBtnId, overlayId);
	switchViewport( minWindowWidth );
}, false);

// リサイズ時に処理
window.addEventListener('resize', () => {
	switchViewport( minWindowWidth );
	//removeClassOnHTML( addOpenClassName );
}, false);