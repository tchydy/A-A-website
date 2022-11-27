this.tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.home__about',
    start: 'top top',
    end: '2500 bottom',
    toggleActions: 'restart complete restart reset',
    // markers: true,
    scrub: 1,
    pin: '.home__about',
  },
  onComplete: () => {
    // console.log('about end');
    // gsap.set('.home__services__wrapper', { opacity: 0 });
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


     // if (this.phone) {
    //   gsap.set(this.Medias, { opacity: 0, scale: 0.1 });

    //   const time = 1.5;

    //   this.tl1 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '.home__about',
    //       start: 'top top',
    //       end: '2500 bottom',
    //       toggleActions: 'restart complete restart reset',
    //       // markers: true,
    //       // scrub: 1,
    //       // pin: '.home__about',
    //     },
    //     onStart: () => {
    //       const cursorText = document.querySelector('.cursor__text');
    //       cursorText.classList.remove('none');
    //       setTimeout(() => {
    //         cursorText.classList.add('none');
    //       }, 1000);
    //     },
    //   });
    //   this.tl1
    //     .addLabel('imgT', '+=2.5')
    //     .addLabel('time', '1.5')
    //     .from('.home__about__maintext .word', {
    //       yPercent: 100,
    //       duration: 0.6,
    //       ease: 'power1.out',
    //       stagger: { amount: 0.2 },
    //     })
    //     .from('.home__about__subtext .char', {
    //       opacity: 0,
    //       x: '1em',
    //       duration: 0.6,
    //       ease: 'power2.out',
    //       stagger: { amount: 0.4 },
    //     })
    //     .to(
    //       this.Medias,
    //       {
    //         delay: 0.5,
    //         duration: 1.5,
    //         opacity: 1,
    //         scale: 1,
    //       },
    //       '-=1.5'
    //     )

    // }
