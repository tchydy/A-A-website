import Page from "../../classes/page";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Detection from '../../classes/detection';
import AnimateImages from "./animateImages";


export default class Home extends Page {
  constructor() {
    super({
      element: '.home',
    });
    this.elements = {
      wrapper: document.querySelector('.home__wrapper'),
      nav: document.querySelector('.navigation'),
      nav_menu: document.querySelector('.navigation__menu'),
      preloader: document.querySelector('.preloader'),
      nav_link: document.querySelector('.navigation__link'),
      preloader__logo: document.querySelector('.preloader__logo__container'),
    };

    gsap.registerPlugin(ScrollTrigger);

    // const allProjects = require('../../../app.js');
    // console.log(allProjects)
  }

  create() {
    super.create()
    this.animateHomeAbout();

  }


  animatePageIn () {
    console.log('animate home');
    this.tl = gsap.timeline({ defaults: { ease: 'expo.out'} });
    this.tl
      .to(this.elements.nav, { y: '0%', autoAlpha: 1, duration: 0.8 })
      .set(this.elements.nav_link, { autoAlpha: 1 })
      .set(this.elements.preloader__logo, { autoAlpha: 0 })
      .to(this.elements.nav_menu, { y: '0%', duration: 0.4, autoAlpha: 1 })
      .to(this.elements.preloader, { y: '-100%', duration: 0.6, delay: 0.4 })
      .to(this.elements.preloader, { autoAlpha: 0, display: 'none' })
      .from('.home__hero__maintext .word', {
        autoAlpha: 0,
        y: '100%',
        duration: 0.5,
        stagger: 0.2,
        ease: 'expo.out',
      })
      .from('.home__hero__subtext .char', {
        opacity: 0,
        x: '1em',
        duration: 0.4,
        ease: 'power2.out',
        stagger: { amount: 0.2 },
      })
      .from('.home__hero__line__wrapper', {
        scaleY: 0,
        transformOrigin: 'top',
        opacity: 0,
      })
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
      .from(
        '.socials__links a ',
        {
          autoAlpha: 0,
          y: '100%',
          duration: 1,
          stagger: 0.2,
          ease: 'expo.out',
        },
      )
      .from(
        '.home__hero__discover',
        { autoAlpha: 0, y: '100%', duration: 0.4, ease: 'expo.out' },
        '-=0.5'
      );

  }

  animateHomeAbout () {
    // const self = this;
    this.desktop = Detection.isDesktop();
    this.tablet = Detection.isTablet();
    this.phone = Detection.isPhone();
    console.log(this.phone);

    // const mm = gsap.matchMedia()
    // console.log(mm);

    this.AnimateImages = new AnimateImages()


    if (this.phone) {
      this.AnimateImages.isPhone()
    } else {
      this.AnimateImages.isDesktop()
    }


      this.tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.home__about',
          start: 'bottom 80%',
          end: 'bottom 20%',
          toggleActions: 'restart complete resume reset',
          // markers: true,
          // scrub: 1,
        },
      });

      gsap.set('.home__services', {
          opacity: 0,
        })
      this.tl2
        .to('.home__about__transition__white', { scaleY: 1, duration: 0.3, ease: 'power1.out', })
        .to('.home__about__transition__black', { scaleY: 1, duration: 0.3, ease: 'power1.out', })
        .set('.home__about', {
          opacity: 0,
        })
        .to('.home__about__transition__white', {
          scaleY: 0,
          duration: 0.4,
          ease: 'power1.in',
          transformOrigin: 'top',
        })
        .to('.home__about__transition__black', {
          scaleY: 0,
          duration: 0.3,
          ease: 'power1.in',
          transformOrigin: 'top',
        })
        .fromTo(
          '.home__about__scrolltext .word',
          {
            y: '100%',
            opacity: 0,
          },
          {
            y: '0%',
            opacity: 1,
            duration: 0.4,
            ease: 'power1.out',
            stagger: { amount: 0.2 },
          },
          '<'
        );

  }
}
