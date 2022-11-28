//------------------------------------------------------
//   families: ["使用したいgoogleフォント名"]
//------------------------------------------------------

export default fontFamilies => {
	if( !Array.isArray(fontFamilies) ) { 
		console.log('Font data type must be array.');
		return;
	}
	
	window.WebFontConfig = {
		google: { families: fontFamilies },
		active: () => {
				sessionStorage.fonts = true;
		}
	};

	const wf = document.createElement('script');
	wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	const s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
	
}