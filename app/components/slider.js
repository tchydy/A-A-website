import Prefix from "prefix"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Detection from '../classes/detection'

const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

export default class DragScroll {
  constructor(obj) {
    this.el = document.querySelector(obj.el);
    this.wrap = this.el.querySelector(obj.wrap);
    this.items = this.el.querySelectorAll(obj.item);
    this.bar = document.querySelector(obj.bar);
    this.leftBtn = document.querySelector('.btn__left');
    this.rightBtn = document.querySelector('.btn__right');
    // this.section = document.querySelector('.home__services__gallery');
    this.section = document.querySelector('.home__services');
    this.slider = document.querySelector('.home__services__gallery');
    this.DragText = document.querySelector('.cursor__text1');
    this.progressNumber = document.querySelector(
      '.home__services__nav__progress__progress__number'
    );
    this.init();
    console.log('slider created');

    this.inView = false;
    // keep track of active slide
    this.centerSlide = null

    this.transformPrefix = Prefix('transform');
    gsap.registerPlugin(ScrollTrigger);
    this.scroll();
  }

  init() {
    this.progress = 0;
    // this.minScroll = 0;
    this.speed = 0;
    this.oldX = 0;
    this.x = 0;
    this.playrate = 0;
    //
    this.bindings();
    this.calculate();
    this.activeSlide()
    this.events();
    this.raf();
  }

  bindings() {
    [
      'events',
      'calculate',
      'raf',
      'handleWheel',
      'handleLeftClicks',
      'handleRightClicks',
      'move',
      'raf',
      'handleTouchStart',
      'handleTouchMove',
      'handleTouchEnd',
      'activeSlide',
    ].forEach((i) => {
      this[i] = this[i].bind(this);
    });
  }

  calculate() {
    this.windowWidth = window.innerWidth
    this.wrapWidth = this.slider.getBoundingClientRect().width;
    this.ItemWidth = this.wrapWidth / this.items.length;
    if (Detection.isDesktop() || Detection.isTablet()) {
      this.minScroll = this.wrap.getBoundingClientRect().left - this.ItemWidth;
      this.windowCenter = this.windowWidth / 2 + this.ItemWidth * 0.25;
      this.windowLeft = this.windowWidth / 2 - this.ItemWidth * 0.75;
    }
    if (Detection.isPhone()){
      this.minScroll = this.wrap.getBoundingClientRect().left
      this.windowCenter = this.windowWidth / 2 + this.ItemWidth * 0.25;
      this.windowLeft = this.minScroll - 20;
			console.log(this.windowLeft, this.windowCenter)
    }
      // this.wrap.style.width = `${this.wrapWidth}px`;
      this.maxScroll = this.wrapWidth - this.el.clientWidth - this.minScroll;
    // - this.minScroll;
    this.sectionTop = this.section.getBoundingClientRect().top;
  }

  activeSlide () {
    // Click
    this.items.forEach( (item, index) => {

      this.itemBoundsLeft = item.getBoundingClientRect().left

      // const itemTitleSpans = item.querySelectorAll('span')

      this.isCenter =
        this.itemBoundsLeft < this.windowCenter &&
        this.itemBoundsLeft > this.windowLeft;

      if (this.isCenter) {
        this.centerSlide = item
        this.centerSlideIndex = index;
        this.centerSlide.classList.add('active');
        // console.log(
        //   itemTitleSpans[0].innerHTML,
        //   this.centerSlide,
        //   this.itemBoundsLeft,
        //   this.windowLeft,
        //   this.windowCenter
        // );
        // remove active class from previous and add to current
      } else {
        item.classList.remove('active')
      }

    })
  }

  activeSlideClick () {
      this.items.forEach((item, index) => {
        if (this.rightClick) {
          this.itemBoundsLeft =
            item.getBoundingClientRect().left - this.ItemWidth;
            // console.log('right click');
          } else {
            this.itemBoundsLeft =
            item.getBoundingClientRect().left + this.ItemWidth;
            // console.log('left click');
        }

        // const itemTitleSpans = item.querySelectorAll('span');

        this.isCenter =
          this.itemBoundsLeft < this.windowCenter &&
          this.itemBoundsLeft > this.windowLeft;

        if (this.isCenter) {
          this.centerSlide = item;
          this.centerSlideIndex = index
          this.centerSlide.classList.add('active');
          // console.log(
          //   itemTitleSpans[0].innerHTML,
          //   this.centerSlide,
          //   this.itemBoundsLeft,
          //   this.windowLeft,
          //   this.windowCenter
          // );
        } else {
          item.classList.remove('active');
        }
      });
  }

  handleWheel(e) {
    if (!this.inView) return;
    if (!this.inView) {
      this.progress = 0
    } else {
      this.progress += e.deltaY;
  }
  this.move();
}

handleLeftClicks(e) {
	this.rightClick = false
  this.progress -= this.ItemWidth;
  this.activeSlideClick();

  // if at the start of gallery move to end of slide
  if (this.progress <= (this.minScroll -100 )) {
    console.log('gallery start', this.items[0].getBoundingClientRect().left);
    this.slideEnd = this.items[this.items.length - 1];

    this.progress -= (this.ItemWidth );
    // remove active class
      this.items.forEach( (item, index) => {
      item.classList.remove('active');
     }
     )

     this.progress = 0;

     setTimeout(() => {
       this.progress = this.maxScroll;
       this.slideEnd.classList.add('active')
       this.centerSlideIndex = this.items.length - 1;
      }, 1000);
    }
  }

  handleRightClicks(e) {
		this.clicked = true;
		this.rightClick = true;
    this.progress += this.ItemWidth;
    this.activeSlideClick();
    // if at the end of gallery move to start of slide
    if (this.progress >= this.maxScroll) {
      this.slideStart = this.items[0];

      // remove active class
      this.items.forEach((item, index) => {
        item.classList.remove('active');
      });

      this.progress = this.maxScroll;

      setTimeout(() => {
        this.progress = this.minScroll;
        this.slideStart.classList.add('active');
        this.centerSlideIndex = 0
      }, 1000);
    }
    // console.log('gallery end', this.items[0]);
  }

  handleTouchStart(e) {
    e.preventDefault();
    if(!this.inView) return;
    this.dragging = true;
    this.startX = e.clientX || e.touches[0].clientX;
    this.el.classList.add('dragging');
    this.DragText.classList.add('none')
    this.click = false
  }

  handleTouchMove(e) {
    this.click = false
    if(!this.inView) return;
    if (!this.dragging) return false;
    // const x = e.touches ? e.touches[0].clientX : e.clientX;
    const x = e.clientX || e.touches[0].clientX;
    this.progress += (this.startX - x) * 2.5;
    this.startX = x;
    this.move();
    // console.log(this.progress);
  }

  handleTouchEnd() {
    this.click = false;
    if(!this.inView) return;
    this.dragging = false;
    this.el.classList.remove('dragging');
    this.DragText.classList.remove('none');
  }


  move() {
    this.click = false;
    this.progress = clamp(this.progress, this.minScroll, this.maxScroll);
      this.activeSlide();

  }

  events() {
    // if(!this.inView) return;if(!this.inView) return;
    window.addEventListener('resize', this.calculate);
    window.addEventListener('wheel', this.handleWheel);
    //
    this.rightBtn.addEventListener('click', this.handleRightClicks);
    this.leftBtn.addEventListener('click', this.handleLeftClicks);
    //
    this.el.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleTouchEnd);
    //
    window.addEventListener('mousedown', this.handleTouchStart);
    window.addEventListener('mousemove', this.handleTouchMove);
    window.addEventListener('mouseup', this.handleTouchEnd);
    document.body.addEventListener('mouseleave', this.handleTouchEnd);

  }

  scroll() {
    const self = this;
    this.slideY = this.wrapWidth + this.ItemWidth - window.innerWidth;
    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.home__about',
        start: 'bottom 10%',
        toggleActions: 'restart complete none reset',
        // markers: true,
        onEnterBack: function () {
          // console.log('add none');
          self.DragText.classList.add('none');
        },
      },
    });
    this.tl
      .set('.home__about__scrolltext .word', {
        y: '100%',
        opacity: 0,
        duration: 0.5,
      })
      .to('.home__services', {
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: 'expo.out',
        onComplete: function () {
          self.inView = true;
          self.DragText.classList.remove('none');
          // console.log('opacity 1', self.inView);
        },
      });

     this.tl1 = gsap.timeline({
       scrollTrigger: {
         trigger: '.home__services',
         start: 'top top',
         //  end: `+=${this.wrapWidth} bottom`,
         end: `+=${this.slideY}`,
         toggleActions: 'restart complete none reset',
         markers: true,
         pin: true,
         scrub: 1,
         onLeave: function () {
          // console.log('add none');
           self.DragText.classList.add('none');
         },
         onEnterBack: function () {
          // console.log('add none');
           self.DragText.classList.remove('none');
         },
       },
     });
     this.tl.to('.home__services__gallery ', {
       y: this.wrapWidth,

     });

  }

  moveSlider () {
    this.sectionTop = this.section.getBoundingClientRect().top;
    // console.log(this.progress, this.maxScroll, this.sectionTop);
    this.raf()

  }

  raf() {
    // console.log(this.inView);
    if(!this.inView) return
    this.x = lerp(this.x, this.progress, 0.1);
    // console.log(this.x, this.progress)
    this.playrate = this.x / this.maxScroll;
    // this.progressNum = Math.round((0.18 + this.playrate * 0.82) * 7);
    this.progressNum = this.centerSlideIndex + 1;
    // console.log(this.centerSlideIndex + 1);
    //
    this.progressNumber.innerHTML = `0${this.progressNum}/07`
    //
    this.wrap.style[this.transformPrefix] = `translateX(${-this.x}px)`;
    this.bar.style[this.transformPrefix] = `scaleX(${0.18 + this.playrate * 0.82})`;
    //
    this.speed = Math.min(100, this.oldX - this.x);
    this.oldX = this.x;
    //
    this.scale = lerp(this.scale, this.speed, 0.1);
    this.items.forEach((i) => {
      i.style[this.transformPrefix] = `scale(${1 - Math.abs(this.speed) * 0.002})`;
      i.querySelector('img').style[this.transformPrefix] = `scaleX(${
        1 + Math.abs(this.speed) * 0.004
      })`;
    });
  }
}

/**
 * Instances
 */





/**
 * One raf to rule em all
 */



