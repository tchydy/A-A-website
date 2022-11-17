import gsap from "gsap";
import EventEmiiter from 'events'

import Detection from '../classes/detection'

export default class Preloader extends EventEmiiter {
  constructor() {
    super()

    this.elements = {
      container: document.querySelector('.preloader__logo__container'),
      left: document.querySelector('.preloader__logo__letters__left__span '),
      middle: document.querySelector('.preloader__logo__letters__middle'),
      a_left: document.querySelector('.a__left'),
      dash: document.querySelector('.dash'),
      a_right: document.querySelector('.a__right'),
      right: document.querySelector('.preloader__logo__letters__right__span'),
      images: document.querySelectorAll('[data-src]'),
      progress_bar: document.querySelector(
        '.preloader__progress__bar__wrapper'
      ),
    };

    this.length = 0;
    this.moveDistance = 0

    this.tl = gsap.timeline({
      onRepeat: () => {
        // console.log('repeat');
      },
      repeatDelay: .3,
      defaults: {
        ease: 'expo.out',
        duration: .6,
        delay: .3,
      },
    });

    // this.getMoveDistance();
    this.resize()
    this.createLoader();
    this.animateLogo();
  }

  animateLogo() {
    this.tl.repeat(-1)
    this.tl.yoyo(true)

    gsap.set(this.elements.container, { scale:1})

    this.tl
      .to(this.elements.left, { x: '-120%', opacity: 0, }, '0')
      .to(this.elements.right, { x: '200%', opacity: 0 }, '0')
      .to(this.elements.middle, { x: '50%' }, '0')
      .to(this.elements.dash, { x: '-1200%' }, '0')
      .to(this.elements.a_right, { x: '-788%' }, '0');
  }

  getMoveDistance () {
    // get offset from top because at load it's 100% off screen
    const navLink = document.querySelector('.navigation__link');
    const navWrapper = document.querySelector('.navigation__wrapper');

    const navWrapperHeight = navWrapper.getBoundingClientRect().height;
    const navHeight = navLink.getBoundingClientRect().height;
    // nav link is positioned centerd in height to navwrapper
    const navLinkTop = (navWrapperHeight - navHeight) / 2;

    // const navTop = navLink.getBoundingClientRect().top; // the offset from outside the viewport
    // const loaderTop = this.elements.container.getBoundingClientRect().top;
     let  loaderHeight = 0
     if (Detection.isDesktop() || Detection.isTablet()) {
      loaderHeight = this.elements.container.getBoundingClientRect().height;
     }
    // loader height is smaller because in css we scaled by 0.5 for mobile so i will rescale
    if (Detection.isPhone()) {
       loaderHeight = this.elements.container.getBoundingClientRect().height / 0.5;
    }
    const scaledLoaderHeight = loaderHeight * 0.67;
    // loadertop after scale
    const scaleDiff = (loaderHeight - scaledLoaderHeight) /2;
    this.moveDistance = (this.elements.container.offsetTop + scaleDiff) - navLinkTop;
    // console.log(
    //   this.moveDistance, loaderHeight
    // );
  }

  resize () {
    const self = this;
    window.addEventListener("resize", self.getMoveDistance())
  }

  revertLogo() {
    this.tl.yoyo(false)
    this.tl.repeat(0);


    this.tl
      .to(this.elements.left, { x: '0%', opacity: 1 }, '0')
      .to(this.elements.right, { x: '0%', opacity: 1 }, '0')
      .to(this.elements.middle, { x: '0%' }, '0')
      .to(this.elements.dash, { x: '0%' }, '0')
      .to(this.elements.a_right, { x: '0%' }, '0');
      if (Detection.isPhone()) {
        console.log('phone');
      }
      gsap.timeline()
          .to(this.elements.container, {
            scale: 0.67,
            y:`-${this.moveDistance}px`,
            duration: 0.8,
            onComplete: () => {
              this.emit('completed');
              console.log('preloader completed');

            },
          })
          .to('.preloader__progress__bar__wrapper', { autoAlpha: 0 }, '0');



      // if (Detection.isDesktop()) {
      //   console.log('desktop');
      //   gsap
      //     .timeline()
      //     .to(this.elements.container, {
      //       scale: 0.67,
      //       y: '-569.5%',
      //       duration: 0.8,
      //       onComplete: () => {
      //         this.emit('completed');
      //         console.log('preloader completed');
      //       },
      //     })
      //     .to('.preloader__progress__bar__wrapper', { autoAlpha: 0 }, '0');
      // } else
      // if (Detection.isPhone()) {
      //   console.log('phone');
      //   gsap
      //     .timeline()
      //     .to(this.elements.container, {
      //       scale: 0.67,
      //       y: '-921.0%',
      //       duration: 0.8,
      //       onComplete: () => {
      //         this.emit('completed');
      //         console.log('preloader completed');
      //       },
      //     })
      //     .to('.preloader__progress__bar__wrapper', { autoAlpha: 0 }, '0');
      // }
      // else if (Detection.isTablet()) {
      //   console.log('tablet');
      //   gsap
      //     .timeline()
      //     .to(this.elements.container, {
      //       scale: 0.67,
      //       y: '-1500.0%',
      //       duration: 0.8,
      //       onComplete: () => {
      //         this.emit('completed');
      //         console.log('preloader completed');
      //       },
      //     })
      //     .to('.preloader__progress__bar__wrapper', { autoAlpha: 0 }, '0');
      // }


        // gsap
        //   .timeline()
        //   .to(this.elements.container, {
        //     scale: 0.67,
        //     y: Detection.isDesktop()
        //       ? '-569.5%'
        //       : Detection.isTablet()
        //       ? '-1500.0%'
        //       : Detection.isPhone()
        //       ? '-921.0%'
        //       : '',
        //     duration: 0.8,
        //     onComplete: () => {
        //       this.emit('completed');
        //       console.log('preloader completed');
        //     },
        //   })
        //   .to('.preloader__progress__bar__wrapper', { autoAlpha: 0 }, '0');



  }

  async allLoaded() {
    await this.tl.repeat(5);
    this.revertLogo()
  }

  createLoader() {
    const total = this.elements.images.length;
    const images = [...this.elements.images];
    const imgElements = [];
    const self = this
    images.forEach((img, index) => {
      window.addEventListener('load', (event) => {
        const loadProgress = document.querySelector('.preloader__progress');
        // console.log('page is fully loaded', index);
        const imgElement = new window.Image();

        imgElement.onload = function () {
          imgElements.push(imgElement);

          this.length = imgElements.length;
          const percent = this.length / total;
          const width = Math.round(percent * 100);

          loadProgress.style.width = `${width}%`;
          // console.log('loaded', this.length, percent);

          if (percent === 1) {
            // console.log(self);
            self.allLoaded()
          }

          imgElement.classList.add('loaded');
        };

        imgElement.src = img.getAttribute('data-src');
        img.src = img.getAttribute('data-src');
      });
    });
  }
}
