import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SplitType from "split-type";
// import { wrapLines } from "../utils/utils";
import Lenis from "@studio-freight/lenis";
import Prefix from "prefix"
// import { map } from "lodash"
// import Title from "../animations/Title";

export default class Page {
  constructor({ element, elements, el }) {
    this.element = element;
    this.elements = elements;
    this.el = el;
    this.nav = document.querySelector('.navigation__wrapper');
    this.socials = document.querySelector('.socials');
    // top and bottom overlay overlay elements
    this.overlayRows = [...document.querySelectorAll('.overlay__row')];

    this.elements = {
      container: document.querySelector('.navigation__logo__container'),
      left: document.querySelector('.navigation__logo__letters__left__span '),
      middle: document.querySelector('.navigation__logo__letters__middle'),
      a_left: document.querySelector('.navigation__logo__letter.a__left'),
      dash: document.querySelector('.navigation__logo__letter.dash'),
      a_right: document.querySelector('.navigation__logo__letter.a__right'),
      right: document.querySelector('.navigation__logo__letters__right__span'),
      nav_menu: document.querySelector('.navigation__menu'),
    };

    this.services = document.querySelector('.home__services');
    this.DragText = document.querySelector('.cursor__text1');
    this.transformPrefix = Prefix('transform');
    gsap.registerPlugin(ScrollTrigger);

    // this.animatePartials()
  }

  create() {
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
      move: 0,
    };
    this.createAnimation();
    this.createPreloaders();
    this.scrollDirection();
    if (this.element === '.projects') {
      this.projects = true;
      this.nav.classList.add('hide');
      this.socials.classList.add('hide');
    } else {
      this.projects = false;
      this.nav.classList.remove('hide');
      this.socials.classList.remove('hide');
    }
    if (this.element === '.home') {
      this.home = true;
    } else {
      this.home = false;
    }
  }

  createPreloaders() {
    this.preloaders = document.querySelectorAll('[data-src]');
    this.preloaders.forEach((element) => {
      if (!element.src) {
        element.src = element.getAttribute('data-src');
      }
    } )
  }

  /**
   * Events
   */
  onWheel(event) {
    const { deltaY } = event;

    this.scroll.target += deltaY;
    // console.log(this.scroll.target)
  }

  animateIn() {
    window.scrollTo(0, 0);
    this.el = document.querySelector(this.element);
    console.log('animate page in', this.el);
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power3.inOut',
        },
      })
      .addLabel('start', 0)
      .addLabel('grid', 'start+=0.6')
      .to(
        this.el,
        {
          autoAlpha: 1,
        },
        'start'
      )
      .to(
        '.overlay__row',
        {
          scaleY: 0,
        },
        'grid'
      );


  }

  animateOut() {
    console.log('animate page out', this.el);
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power3.inOut',
        },
      })
      .addLabel('start', 0)
      .addLabel('grid', 'start+=0.6')
      .to(
        '.overlay__row',
        {
          scaleY: 1,
        },
        'start'
      )
      .to(
        this.el,
        {
          autoAlpha: 0,
        },
        'start'
      );

  }

  onResize() {
    // always recalculate the height of wrapper
    if (this.elements.wrapper) {
      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight;
    }
    // document.body.style.height = this.scroll.limit;
    // console.log(this.scroll.limit, document.body.getBoundingClientRect().height)
  }

  /**
   * Loop
   */
  update() {
    this.scroll.target = gsap.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    this.scroll.current = parseFloat(
      gsap.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)
    ).toFixed(2);

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }
    // this.scroll.last += this.scroll.current;
    this.scroll.move = parseFloat(
      this.scroll.target - this.scroll.current
    ).toFixed(2);
    // console.log(this.scroll.target - this.scroll.move, this.scroll.target, );

    // if (this.elements.wrapper) {
    //   this.elements.wrapper.style[
    //     this.transformPrefix
    //   ] = `translateY(-${this.scroll.current}px)`;
    // }
  }

  smoothScroll() {
    console.log('lenis init', this.el);

    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      window.requestAnimationFrame(raf);
    }

    window.requestAnimationFrame(raf);
    this.lenis = lenis;
  }

  scrollDirection() {
    this.lastScrollTop = 0;
    this.currentScroll = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener('scroll', this.getDirection.bind(this), false);
    window.addEventListener('touchmove', this.getMobileDirection.bind(this));
  }

  getDirection() {
    if (this.services) {
      this.servicesInview = this.services.classList.contains('in-view');
    } else {
      this.servicesInview = false;
    }
    // or window.addEventListener("scroll"....
    this.currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (this.currentScroll > this.lastScrollTop) {
      // downscroll code
      this.direction = 'down';
      // add a class
    } else {
      // upscroll code
      this.direction = 'up';
      // remove class
    }
    this.lastScrollTop = this.currentScroll <= 0 ? 0 : this.currentScroll;
    // For Mobile or negative scrolling
    if (
      (this.direction === 'down' && window.pageYOffset > 150) ||
      this.servicesInview ||
      this.projects
    ) {
      this.downScroll();
    } else {
      this.upScroll();
    }
    if (
      window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight &&
       !this.projects
    ) {
      // you're at the bottom of the about page
      console.log('at the bottom');
      this.socials.classList.add('bottom');
      this.socials.classList.remove('hide');
    } else {
      this.socials.classList.add('hide');
      this.socials.classList.remove('bottom');
    }

    // if (this.direction === 'up' && window.pageYOffset > 100) {
    //   this.socials.classList.remove('hide');
    // }
  }

  getMobileDirection(e) {
    if (this.services) {
      this.servicesInview = this.services.classList.contains('in-view');
    } else {
      this.servicesInview = false;
    }
    this.currentPoint = e.clientX || e.touches[0].clientX;
    // this.currentPoint = e.originalEvent.changedTouches[0].pageY;

    if (this.lastPoint != null && this.lastPoint < this.currentPoint) {
      // swiped down
      // console.log('you scrolled up');
      this.direction = 'swiped down';
    } else if (this.lastPoint != null && this.lastPoint > this.currentPoint) {
      // swiped up
      // console.log('you scrolled down');
      this.direction = 'swiped up';
    }
    if (
      (this.direction === 'swiped up' && this.currentPoint > 270) ||
      this.servicesInview ||
      this.projects
    ) {
      this.downScroll();
    } else {
      this.upScroll();
    }

    this.lastPoint = this.currentPoint;
  }

  downScroll() {
    this.nav.classList.add('hide');
    this.socials.classList.add('hide');
  }

  upScroll() {
    this.nav.classList.remove('hide');

  }

  createAnimation() {
    this.animations = [];
    this.elementsTitles = document.querySelectorAll('[data-split="title"]');
    this.elementsParagraph = document.querySelectorAll(
      '[data-split="paragraph"]'
    );
    // this.SplitTypeInstance = new SplitType(this.elementsParagraph, {
    //   types: 'lines',
    // });
    //  wrapLines(this.SplitTypeInstance.lines, 'div', 'oh');

    this.typeSplit = new SplitType('[data-split]', {
      types: 'words, chars',
      tagName: 'span',
    });

    // this.elementsTitles.forEach((title) => {
    //   const words = [...title.querySelectorAll('.word')];
    //   this.animationTitles = map(words, (word, index) => {
    //     // return console.log(new Title({
    //     //   element: word,
    //     //   item: title, }))
    //     return new Title({
    //       element: title,
    //       elements: {
    //         title: word,
    //         index: index,
    //       },
    //     });
    //   });
    //   this.animations.push(...this.animationTitles);
    // });
    // console.log(this.animations)
  }
}
