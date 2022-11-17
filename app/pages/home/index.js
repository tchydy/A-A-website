import Page from "../../classes/page";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Detection from '../../classes/detection';


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
      .from('.socials__links a', {
        autoAlpha: 0,
        y: '100%',
        duration: 1,
        stagger: 0.2,
        ease: 'expo.out',
      },'-=1')
      .from(
        '.socials__get__in__touch',
        { autoAlpha: 0, y: '100%', duration: 1, ease: 'expo.out' },
        '-=1'
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
    console.log(this.desktop);
    this.homeAbout = document.querySelector('.home__about');
    this.mainText = document.querySelector('.home__about__maintext');
    this.subWords = document.querySelectorAll('.home__about__subtext .word');
    this.Medias = document.querySelectorAll('.about__idea__media');
    this.phone = Detection.isPhone();

    if (this.phone) {
      gsap.set(this.Medias, { opacity: 0, scale: 0.1 });
      gsap.set('.home__about__scrolltext .word', {
        y: '100%',
        opacity: 0,
      });

      const time = 1.5;

      this.tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.home__about',
          start: 'top top',
          end: '2500 bottom',
          toggleActions: 'restart complete restart reset',
          // markers: true,
          // scrub: 1,
          // pin: '.home__about',
        },
        onComplete: () => {
          // console.log('about end');
          gsap.set('.home__services__wrapper', { opacity: 0 });
        },
        onStart: () => {
          const cursorText = document.querySelector('.cursor__text');
          cursorText.classList.remove('none');
          setTimeout(() => {
            cursorText.classList.add('none');
          }, 1000);
        },
      });
      this.tl1
        .addLabel('imgT', '+=2.5')
        .addLabel('time', '1.5')
        .from('.home__about__maintext .word', {
          yPercent: 100,
          duration: 0.6,
          ease: 'power1.out',
          stagger: { amount: 0.2 },
        })
        .from('.home__about__subtext .char', {
          opacity: 0,
          x: '1em',
          duration: 0.6,
          ease: 'power2.out',
          stagger: { amount: 0.4 },
        })
        .to(
          this.Medias,
          {
            delay: 0.5,
            duration: 1.5,
            opacity: 1,
            scale: 1,
          },
          '-=1.5'
        )
        .to(
          this.Medias[0],
          {
            duration: time,
            width: '82%',
            height: '52%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[1],
          {
            duration: time,
            width: '76%',
            height: '52%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[2],
          {
            duration: time,
            width: '82%',
            height: '50%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[3],
          {
            duration: time,
            width: '82%',
            height: '48%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[4],
          {
            duration: time,
            width: '70%',
            height: '48%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[5],
          {
            duration: time,
            width: '79%',
            height: '47%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[6],
          {
            duration: time,
            width: '85%',
            height: '48%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[7],
          {
            duration: time,
            width: '79%',
            height: '49%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          '.home__about__maintext .word',
          {
            yPercent: 100,
            duration: 0.6,
            delay: 0.5,
            ease: 'power1.out',
            stagger: { amount: 0.2 },
          },
          '-=0.5'
        )
        .to(
          '.home__about__subtext .word',
          {
            yPercent: 100,
            duration: 0.6,
            ease: 'power1.out',
            stagger: { amount: 0.2 },
          },
          '-=0.2'
        )
        .to('.home__about__movingtext', {
          autoAlpha: 1,
          left: 0,
          duration: 1.5,
        })
        .to('.home__about__movingtext', { x: '-15%', duration: 6 });
    }


    if(this.desktop || this.tablet) {
      gsap.set(this.Medias, { opacity: 0, scale: 0.1 });
      gsap.set(
        '.home__about__scrolltext .word',
        {
          y: '100%',
          opacity: 0,
        }
      );

      const time = 1.5

      this.tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.home__about',
          start: 'top top',
          end: '2500 bottom',
          toggleActions: 'restart complete restart reset',
          // markers: true,
          scrub: 1,
          pin: '.home__about',
          onLeave: () => {
            // console.log('this.tl1 end')
            // this.tl2.play();
          },
          onEnterBack: () => {
            // console.log('this.tl1 reverse')
            // this.tl2.reverse();
          },
        },
        onComplete: () => {
          // console.log('about end');
          gsap.set('.home__services__wrapper', { opacity: 0 });
        },
        onStart: () => {
          const cursorText = document.querySelector('.cursor__text');
          cursorText.classList.remove('none');
          setTimeout(() => {
            cursorText.classList.add('none');
          }, 1000);
        },
      });
      this.tl1
        .addLabel('imgT', '+=2.5')
        .addLabel('time', '1.5')
        .from('.home__about__maintext .word', {
          yPercent: 100,
          duration: 0.6,
          ease: 'power1.out',
          stagger: { amount: 0.2 },
        })
        .from('.home__about__subtext .char', {
          opacity: 0,
          x: '1em',
          duration: 0.6,
          ease: 'power2.out',
          stagger: { amount: 0.4 },
        })
        .to(
          this.Medias,
          {
            delay: 0.5,
            duration: 1.5,
            opacity: 1,
            scale: 1,
          },
          '-=1.5'
        )
        .to(
          this.Medias[0],
          {
            duration: time,
            width: '32%',
            height: '90%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[1],
          {
            duration: time,
            width: '29.6%',
            height: '90%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[2],
          {
            duration: time,
            width: '32%',
            height: '90%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[3],
          {
            duration: time,
            width: '32%',
            height: '83%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[4],
          {
            duration: time,
            width: '27%',
            height: '83%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[5],
          {
            duration: time,
            width: '30%',
            height: '82%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[6],
          {
            duration: time,
            width: '33%',
            height: '84%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          this.Medias[7],
          {
            duration: time,
            width: '30.5%',
            height: '78%',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
          },
          'imgT'
        )
        .to(
          '.home__about__maintext .word',
          {
            yPercent: 100,
            duration: 0.6,
            delay: 0.5,
            ease: 'power1.out',
            stagger: { amount: 0.2 },
          },
          '-=0.5'
        )
        .to(
          '.home__about__subtext .word',
          {
            yPercent: 100,
            duration: 0.6,
            ease: 'power1.out',
            stagger: { amount: 0.2 },
          },
          '-=0.2'
        )
        .to('.home__about__movingtext', { autoAlpha: 1, left: 0, duration: 1.5 })
        .to('.home__about__movingtext', { x: '-15%', duration: 6 });

      }

      this.tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.home__about',
          start: 'bottom 80%',
          end: 'bottom 20%',
          toggleActions: 'restart complete reverse reset',
          // onEnter: () => this.tl2.restart(),
          // onEnterBack: () => this.tl2.restart(),
          markers: true,
          // scrub: 1,
        },
        onUpdate: function () {
          // console.log('scroll', window.pageYOffset);
        },
      });

      this.tl2
        .to('.home__about__transition__white', { scaleY: 1, duration: 0.3 })
        .to('.home__about__transition__black', { scaleY: 1, duration: 0.3 })
        .set(
          '.home__about__idea__images__wrapper, .home__about__movingtext',
          {
            opacity: 0,
          }
        )
        .to('.home__about__transition__white', {
          scaleY: 0,
          duration: 0.4,
          transformOrigin: 'top',
        })
        .to('.home__about__transition__black', {
          scaleY: 0,
          duration: 0.3,
          transformOrigin: 'top',
        })
        .to('.home__about__scrolltext .word', {
          y: '0%',
          opacity: 1,
          duration: 0.4,
          ease: 'power1.out',
          stagger: { amount: 0.2 },
        },"<");

  }
}
