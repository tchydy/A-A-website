import Page from '../../classes/page'
import Gallery from '../../components/gallery';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class Projects extends Page {
  constructor() {
    super({
      element: '.projects',
      el: document.querySelector('.projects'),
    });
    this.elements = {
      wrapper: document.querySelector('.home__wrapper'),
      nav: document.querySelector('.navigation'),
      nav_menu: document.querySelector('.navigation__menu'),
      preloader: document.querySelector('.preloader'),
      nav_link: document.querySelector('.navigation__link'),
      preloader__logo: document.querySelector('.preloader__logo__container'),
      // selecting outer and inner img, position attr, caption
      imgInner: document.querySelectorAll('.column__item-img'),
      imgOuter: document.querySelectorAll('.column__item-imgwrap'),
      caption: document.querySelectorAll('figcaption'),
    };

    this.columns = document.querySelectorAll('.col');
    this.columnItem = document.querySelectorAll('.column__item');
    this.allService = document.querySelectorAll('.home__services__service');
    this.projectsWrapper = document.querySelector('.projects__wrapper');
    this.allBtn = document.querySelector(
      '.home__services__nav__projects__link'
    );

    gsap.registerPlugin(ScrollTrigger);

    // console.log(this.el);
  }

  create() {
    super.create();
    this.colScroll();
    this.createGallery();
    this.nav.classList.add('hide');
    this.socials.classList.add('hide');
  }

  createGallery() {
    if(this.el) {
      this.gallery = new Gallery(this.el);

    }
  }

  animateIn () {
    super.animateIn()
    this.createGallery()
  }

  animatePageIn() {
    console.log('animate Projects');
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

    // this.scrollUpdate();
  }

  onResize() {
    this.colScroll();
  }

  colScroll() {
    // console.log(this);
    this.columns = document.querySelectorAll('.col');
    this.columnItem = document.querySelectorAll('.column__item');
    this.projectsWrapper = document.querySelector('.projects__wrapper');

    this.columnItemY = this.columnItem[0].getBoundingClientRect().height;
    this.columnY = this.columns[0].getBoundingClientRect().height;
    this.columnHeight = this.columnY + this.columnItemY / 2;
    console.log(this.columnHeight, this.columnItemY);
    this.projectsWrapper.style.height = `${this.columnHeight}px`;
  }

  update() {
    // this.colScroll()
    this.columns.forEach((column, i) => {
      // Change direction for odd columns
      const direction = i % 2 !== 0 ? 'up' : 'down';
      // console.log(column, direction);
      if (direction === 'up') {
        column.style.transform = `translateY(${-window.scrollY}px)`;
      } else {
        column.style.transform = `translateY(${window.scrollY}px)`;
      }
    });
  }
}
