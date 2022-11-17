/* eslint-disable no-new */
// import gsap from 'gsap'
import Detection from './classes/detection';

import Cursor from './components/cursor';
import Preloader from './components/preloader'
import DragScroll from './components/slider';
import About from './pages/about';
import Home from './pages/home/index'

class App {
  constructor() {
    this.createContent();

    this.createPages();
    this.createPreloader();
    // this.createAnimations()
    this.addEventListeners();


    this.update();
  }

  // check what page content
  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template'); // this is the value in each pug file under block variables
  }

  // createPreloader
  createPreloader() {
    window.scrollTo(0, 0);
    this.preloader = new Preloader();
    this.preloader.once('completed', () => {
      document.body.classList.remove('no-scroll')
      this.page.animatePageIn();
      this.createCursor();
    });
    // this.preloader.animateLogo()
    // this.preloader.createLoader()
  }

  createSlider() {
    this.scroll = new DragScroll({
      el: '.home__services__gallery__wrapper',
      wrap: '.home__services__gallery',
      item: '.home__services__service',
      bar: '.home__services__nav__progress__progress__bar__progress',
    });
  }


  // create pages and select current page
  createPages() {
    this.pages = {
      home: new Home(),
      about: new About(),
    };
    this.page = this.pages[this.template]; // now we always have access to curent page on screen
    this.page.create();
    this.page.smoothScroll()
    // call resize anytime page is created
    this.onResize();
    // call slider when page is created
    this.createSlider()
  }

  // custom cursor
  createCursor() {
    if (Detection.isDesktop()) {
      this.cursor = new Cursor();
      this.cursor.createCursor();
    }
  }

  /**
   * Events
   */

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize();
      console.log('resize');
    }
  }

  onWheel(event) {
    if (this.page && this.page.onWheel) {
      // console.log(event);
      this.page.onWheel(event);
      // this.page.getDirection();
    }
  }

  // createAnimations () {
  //   this.createAnimation = new Animation();
  // }

  /**
   * Loops
   */
  update() {
    this.scroll.moveSlider();

    if (this.page && this.page.update) {
      // this.page.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners
   */
  addEventListeners() {
    window.addEventListener('mousewheel', this.onWheel.bind(this));
    window.addEventListener('wheel', this.onWheel.bind(this));
    // window.addEventListener('wheel', (e) => {
    //   console.log(e.deltaY);
    // });
  }
}

  new App()
