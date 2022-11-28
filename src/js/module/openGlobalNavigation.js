/**
 * スモールデバイス表示のナビゲーションの開閉
 */

export const removeClassOnHTML = className => {
	document.documentElement.classList.remove(className);
}

export const openGlobalNavigation = (menuLinkElement, addOpenClassName, menuBtnId, overlayID) => {

	document.getElementById(menuBtnId).addEventListener('click', () => {
		document.documentElement.classList.toggle(addOpenClassName);
	});
	document.getElementById(overlayID).addEventListener('click', () => {
		removeClassOnHTML(addOpenClassName);
	});

	const menus = document.querySelectorAll(menuLinkElement);
	const len = menus.length;
	for (let i = 0; i < len; i++) {
		menus[i].addEventListener('click', () => {
			removeClassOnHTML(addOpenClassName);
		}, false);
	}

}