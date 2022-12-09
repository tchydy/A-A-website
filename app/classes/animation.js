// import Components from './components';

export default class Animation {
  constructor( {element, elements} ) {
    this.element = element;
    this.elements = elements;
    // this.elements = document.querySelector(elements);

    this.createObserver();
    // console.log(this.element);
  }

  createObserver() {
    this.options = {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.2,
    };

    this.createObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log('animateIn', entry);
          this.animateIn();
        } else {
          console.log('animateOut');
          this.animateOut();
        }
      });
    };

    this.observer = new window.IntersectionObserver(
      this.createObserver,
      this.options
    );
    this.observer.observe(this.element);
  }

  animateIn() {}

  animateOut() {}

  onResize() {}
}
