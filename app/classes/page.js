import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import Prefix from "prefix"
import { map } from "lodash"
import Title from "../animations/Title";

export default class Page {
  constructor({ element, elements }) {
    this.element = element;
    this.elements = elements;
    this.el = document.querySelector(element);

    this.transformPrefix = Prefix('transform');
    gsap.registerPlugin(ScrollTrigger);

    this.scrollDirection();
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
    } else {
      // upscroll code
      this.direction = 'up';
    }
    this.lastScrollTop = this.currentScroll <= 0 ? 0 : this.currentScroll;
    // For Mobile or negative scrolling
    console.log(this.direction, window.pageYOffset)
  }

  getMobileDirection(e) {
    this.currentPoint = e.clientX || e.touches[0].clientX;
    console.log(this.currentPoint);
    // this.currentPoint = e.originalEvent.changedTouches[0].pageY;

    if (this.lastPoint != null && this.lastPoint < this.currentPoint) {
      // swiped down
      console.log('you scrolled up');
    } else if (this.lastPoint != null && this.lastPoint > this.currentPoint) {
      // swiped up
      console.log('you scrolled down');
    }

    this.lastPoint = this.currentPoint;
  }

  animatePartials() {
    console.log(this.direction, window.pageYOffset)

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
