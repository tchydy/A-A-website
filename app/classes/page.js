import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import Prefix from "prefix"
// import { map } from "lodash"
// import Title from "../animations/Title";

export default class Page {
  constructor({ element, elements }) {
    this.element = element;
    this.elements = elements;
    this.el = document.querySelector(element);
    this.nav = document.querySelector('.navigation__wrapper');

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

    this.transformPrefix = Prefix('transform');
    gsap.registerPlugin(ScrollTrigger);

    this.scrollDirection();

    this.tls = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'expo.out',
        duration: 0.1,
      },
    });

    this.animatePartials()

  }

  create() {
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
      move: 0,
    };
    console.log(this.el);
    this.createAnimation();
  }

  /**
   * Events
   */
  onWheel(event) {
    const { deltaY } = event;

    this.scroll.target += deltaY;
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

    if (this.elements.wrapper) {
      this.elements.wrapper.style[
        this.transformPrefix
      ] = `translateY(-${this.scroll.current}px)`;
    }
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
  }

  scrollDirection() {
    this.lastScrollTop = 0;
    this.currentScroll = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener('scroll', this.getDirection.bind(this), false);
    window.addEventListener('touchmove', this.getMobileDirection.bind(this));
  }

  getDirection() {
    // or window.addEventListener("scroll"....
    this.currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (this.currentScroll > this.lastScrollTop) {
      // downscroll code
      this.direction = 'down';
      // if(this.currentScroll >= 200){
      //   console.log('hide');
      // }
      // add a class
    } else {
      // upscroll code
      this.direction = 'up';
      // remove class
    }
    this.lastScrollTop = this.currentScroll <= 0 ? 0 : this.currentScroll;
    // For Mobile or negative scrolling
    // console.log(this.direction, window.pageYOffset)
    if(this.direction === 'down' && window.pageYOffset > 270 ) {
      this.downScroll()
    } else {
      this.upScroll();
    }
  }

  getMobileDirection(e) {
    this.currentPoint = e.clientX || e.touches[0].clientX;
    console.log(this.currentPoint);
    // this.currentPoint = e.originalEvent.changedTouches[0].pageY;

    if (this.lastPoint != null && this.lastPoint < this.currentPoint) {
      // swiped down
      // console.log('you scrolled up');
      this.direction = 'up';
      this.upScroll();
    } else if (this.lastPoint != null && this.lastPoint > this.currentPoint) {
      // swiped up
      // console.log('you scrolled down');
      this.direction = 'down';
      if(this.currentPoint >= 200) {
        console.log('hide');
        this.downScroll()

      }
    }

    this.lastPoint = this.currentPoint;
  }

  animatePartials() {
    this.tls
      // .addLabel('start', '1.5')
      .to(this.elements.left, { x: '-120%', opacity: 0 }, '0')
      .to(this.elements.right, { x: '200%', opacity: 0 }, '0')
      .to(this.elements.middle, { x: '50%' }, '0')
      .to(this.elements.dash, { x: '-1200%' }, '0')
      .to(this.elements.a_right, { x: '-788%' }, '0')
      .to(
        this.elements.nav_menu,
        { y: '-200%',  autoAlpha: 0 },
        '0'
      )
      .to(
        '.socials__links a',
        {
          autoAlpha: 0,
          y: '100%',
          stagger: 0.2,
          ease: 'expo.out',
        },
        '-=1'
      )
      .to(
        '.socials__get__in__touch',
        { autoAlpha: 0, y: '100%', ease: 'expo.out' },
        '-=1'
      );
  }

  downScroll() {
    this.nav.classList.add('hide');
    // this.tls.play();
  }

  upScroll() {
    this.nav.classList.remove('hide');
    // this.tls.reset()
  }

  createAnimation() {
    this.animations = [];
    this.typeSplit = new SplitType('[data-split]', {
      types: 'words, chars',
      tagName: 'span',
    });
    this.elementsTitles = document.querySelectorAll('[data-split="title"]');
    this.elementsParagraph = document.querySelectorAll(
      '[data-split="paragraph"]'
    );

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
