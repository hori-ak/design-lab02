/**
 * 375px以下のデバイスのviewportを固定
*/

 export default minWidth => {
 	const viewport = document.querySelector('meta[name="viewport"]');
 	const value =
 		window.outerWidth > minWidth ?
 		'width=device-width,initial-scale=1' :
 		'width=375';
 	if (viewport.getAttribute('content') !== value) {
 		viewport.setAttribute('content', value);
 	}
 }