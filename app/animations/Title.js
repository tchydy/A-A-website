import Animation from "../classes/animation";
import gsap from "gsap";


export default class Title extends Animation {
  constructor({ element, elements }, index) {
    super({
      element,
      elements,
    });
    this.index = index;
  }

  animateIn() {
    // console.log(this.elements);
    gsap.fromTo(
      this.elements.title,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 0.4,
        delay: this.elements.index * 0.2,
        autoAlpha: 1,
        ease: 'power1.out',
      }
    );
  }

  animateOut() {
    gsap.to(this.elements.title, {
      autoAlpha: 0,
      delay: 0.5,
    });
  }
}
