import Page from "../../classes/page";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Detection from '../../classes/detection';
import AnimateImages from "./animateImages";
import DragScroll from '../../components/slider';
// import Service from '../service/index'


export default class Home extends Page {
  constructor() {
    super({
      element: '.home',
      el: document.querySelector('.home'),
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
    this.desktop = Detection.isDesktop();
    this.tablet = Detection.isTablet();
    this.phone = Detection.isPhone();

    this.clientsGallery = document.querySelector('.clients__gallery');
    this.clients = document.querySelectorAll('.gallery__item');

    // const allProjects = require('../../../app.js');
    // console.log(allProjects)
  }

  create() {
    super.create();
    this.animateHomeAbout();
    this.createSlider();
    // this.clientSlider()
  }

  animatePageIn() {
    console.log('animate home');
    this.tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
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
      .from('.socials__links a ', {
        autoAlpha: 0,
        y: '100%',
        duration: 1,
        stagger: 0.2,
        ease: 'expo.out',
      })
      .from(
        '.home__hero__discover',
        { autoAlpha: 0, y: '100%', duration: 0.4, ease: 'expo.out' },
        '-=0.5'
      );
  }

  animateHomeAbout() {
    this.AnimateImages = new AnimateImages();

    if (this.phone) {
      this.AnimateImages.isPhone();
    } else {
      this.AnimateImages.isDesktop();
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

    gsap.set('.home__services__wrapper', {
      opacity: 0,
    });
    this.tl2
      .to('.home__about__transition__white', {
        scaleY: 1,
        duration: 0.3,
        ease: 'power1.out',
      })
      .to('.home__about__transition__black', {
        scaleY: 1,
        duration: 0.3,
        ease: 'power1.out',
      })
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

  createSlider() {
    this.sliderScroll = new DragScroll({
      el: '.home__services__gallery__wrapper',
      wrap: '.home__services__gallery',
      item: '.home__services__service',
      bar: '.home__services__nav__progress__progress__bar__progress',
    });

    this.allServices = [
      ...document.querySelectorAll('.home__services__service'),
    ];

    // this.allServices.forEach((service) => {
    //   service.addEventListener('click', () => {

    //     return new Service({element: service})
    //   })
    // })
  }

  update() {
    this.sliderScroll.moveSlider();
    // this.clientSlider();
  }

  getDirection() {
    super.getDirection();
    if (
      window.innerHeight + window.scrollY + 10 >=
      document.body.offsetHeight
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

  clientSlider() {
    console.log(
      this.clientsGallery.getBoundingClientRect().left,
      this.clients[0].getBoundingClientRect().left +
        this.clients[0].getBoundingClientRect().width,
      this.clientsGallery.getBoundingClientRect().width
    );
    this.clients.forEach((e, index) =>{
      e.style.left = 20 * index + "%";
    })

    gsap.to('.gallery__item', {
      left: '-=400%',
      duration: 20,
      onUpdate: (e) => {
        // console.log(e);
        if (this.clients[0].getBoundingClientRect().left < 0) {
          console.log(e);
          // e.style.left = `${this.clientsGallery.getBoundingClientRect().width}px`;
          // gsap.to(e, {
          //   left: this.clientsGallery.getBoundingClientRect().width,
          //   duration: 0,
          // });

          // gsap.to(e, { left: '-=400%', duration: 20 });
        }
      },
    });
  //   setInterval(()=>{
  //     console.log("move");
  //     this.clients.forEach((e)=>{
  //     if (
  //       e.getBoundingClientRect().x < 0
  //     ) {
  //       // e.style.left = `${this.clientsGallery.getBoundingClientRect().width}px`;
  //       gsap.to(e, {
  //         left: this.clientsGallery.getBoundingClientRect().width,
  //         duration: 0,
  //       });
  //       if(e.getBoundingClientRect().x === this.clientsGallery.getBoundingClientRect().width ) {
  //         console.log("move again");
  //       }
  //       // gsap.to(e, { left: '-=400%', duration: 20 });
  //     }
  //     })
  //   }, 2000)
  }

  onResize() {
    super.onResize();
    // this.createSlider();
  }
}
