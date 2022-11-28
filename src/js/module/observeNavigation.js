/**
 * ナビゲーションの現在地表示
 */

 export default () => {

	const observerOptions = {
    root: null,
    rootMargin: "-49.9% 0px",
    threshold: 0
  };

	const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`.c-global-nav__item a[href="#${id}"]`).parentElement.classList.add('current');
      } else {
        document.querySelector(`.c-global-nav__item a[href="#${id}"]`).parentElement.classList.remove('current');
      }
    });
  },observerOptions );
 
  document.querySelectorAll("[id^='content']").forEach((section) => {
    observer.observe(section);
  });
};
