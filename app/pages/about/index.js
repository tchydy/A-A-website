import Page from '../../classes/page';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class About extends Page {
  constructor() {
    super({
      element: '.about',
      el: document.querySelector('.about'),
    });
     this.elements = {
       wrapper: document.querySelector('.home__wrapper'),
       nav: document.querySelector('.navigation'),
       el: document.querySelector('.about'),
       nav_menu: document.querySelector('.navigation__menu'),
       preloader: document.querySelector('.preloader'),
       nav_link: document.querySelector('.navigation__link'),
       preloader__logo: document.querySelector('.preloader__logo__container'),
     };
    }

    create() {
      super.create();
      this.elements.nav.classList.add('hide');
  }

  animatePageIn() {
    console.log('animate about');
    this.tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    this.tl
      .to(this.elements.nav, { y: '0%', autoAlpha: 1, duration: 0.8 })
      .set(this.elements.nav_link, { autoAlpha: 1 })
      .set(this.elements.preloader__logo, { autoAlpha: 0 })
      .to(this.elements.nav_menu, { y: '0%', duration: 0.4, autoAlpha: 1 })
      .to(this.elements.preloader, { y: '-100%', duration: 0.6, delay: 0.4 })
      .to(this.elements.preloader, { autoAlpha: 0, display: 'none' })
      .from(
        '.socials',
        {
          autoAlpha: 0,
          y: '100%',
          duration: 1,
          ease: 'expo.out',
        },
        '-=1'
      )
      .from('.socials__links a ', {
        autoAlpha: 0,
        y: '100%',
        duration: 1,
        stagger: 0.2,
        ease: 'expo.out',
      });
  }

  getDirection() {
    super.getDirection()
    if (
      window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight
    ) {
      // you're at the bottom of the about page
      console.log('at the bottom');
      this.socials.classList.add('bottom');
      this.socials.classList.remove('hide');
    } else {
      this.socials.classList.add('hide');
      this.socials.classList.remove('bottom');
    }
  }
}
