/**
 * Accordion
 */

export default class {
  constructor(AcBtns, AcDatas) {
    this.isResize = true;
    this.w = window.innerWidth;
    this.HeightArray = [];
    this.AcBtns = AcBtns;
    this.AcDatas = AcDatas;

    this.onSwitch = this.onSwitch.bind(this);
    this.init();
  }

  setStyle() {
    this.AcDatas.forEach(ele => {
      let h = ele.children[0].clientHeight
      ele.style.height = 0;

      this.HeightArray.push(h);
    });
  }

  onAllSwitch() {
    this.AcBtns.forEach(ele => {
      var parent = ele.parentNode;
      var next = ele.nextElementSibling;
      if (parent.classList.contains("is-open")) {
        next.style.height = 0;
        parent.classList.remove("is-open");
      }
    });
  }

  onSwitch(ele, i) {
    var parent = ele.parentNode;
    var next = ele.nextElementSibling;

    if (parent.classList.contains("is-open")) {
      this.onAllSwitch();
      next.style.height = 0;
      parent.classList.remove("is-open");
    } else {
      this.onAllSwitch();
      parent.classList.add("is-open");
      next.style.height = this.HeightArray[i] + "px";
    }
  }

  onResize() {
    this.HeightArray.length = 0;

    this.AcDatas.forEach(ele => {
      let h = ele.children[0].clientHeight
      if (ele.parentNode.classList.contains("is-open")) ele.style.height = h + "px";
      this.HeightArray.push(h);
    });
    this.w = window.innerWidth;
  }

  init() {
    this.setStyle();

    window.addEventListener("resize", e => {
      if (this.isResize) {
        requestAnimationFrame(() => {
          this.isResize = true;
          if (this.w != window.innerWidth) {
            this.onResize();
          };
        });
        this.isResize = false;
      };
    });

    this.AcBtns.forEach((ele, i) => {
      ele.addEventListener("click", e => {
        this.onSwitch(ele, i);
      });
    });
  }
}
