/* eslint-disable no-new */
// import gsap from 'gsap'
import Detection from './classes/detection';

import Cursor from './components/cursor';
import Preloader from './components/preloader'
import About from './pages/about';
import Home from './pages/home/index'
import Projects from './pages/projects';

class App {
  constructor() {
    this.createContent();

    this.createPages();
    this.createPreloader();
    // this.createAnimations()
    this.addEventListeners();
    this.addLinkListeners();

    this.update();
  }

  // check what page content
  createContent() {
    this.content = document.querySelector('.content');
    // this is the value in each pug file under block variables
    this.template = this.content.getAttribute('data-template');
  }

  // createPreloader
  createPreloader() {
    console.log('preload');
    window.scrollTo(0, 0);
    this.preloader = new Preloader();
    this.preloader.once('completed', () => {
      document.body.classList.remove('no-scroll');
      this.page.animatePageIn();
      this.createCursor();
    });
    // this.preloader.animateLogo()
    // this.preloader.createLoader()
  }

  // create pages and select current page
  createPages() {
    this.pages = {
      home: new Home(),
      about: new About(),
      projects: new Projects(),
    };
    this.page = this.pages[this.template]; // now we always have access to curent page on screen
    this.page.create();
    this.page.smoothScroll();
    // call resize anytime page is created
    this.onResize();
    // call slider when page is created and when page template is home
    console.log(this.template);
  }

  // custom cursor
  createCursor() {
    if (Detection.isDesktop()) {
      this.cursor = new Cursor();
      this.cursor.createCursor();
    }
  }

  async onLocalLinkClick({ url, push = true }) {
    await this.page.animateOut();
    const request = await window.fetch(url);
    // console.log(request)
    if (request.status === 200) {
      // console.log(request.text())

      if (push) {
        window.history.pushState({}, '', url);
      }

      const div = document.createElement('div');
      div.innerHTML = await request.text();

      const divContent = div.querySelector('.content');
      this.template = divContent.getAttribute('data-template');

      this.content.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML;
      // console.log(divContent, this.content);

      this.page = this.pages[this.template];
      this.page.create();
      await this.page.animateIn();

      this.addLinkListeners();
    } else {
      this.onLocalLinkClick({ url: '/' });
    }
  }

  /**
   * Events
   */
  // ===========this is when user clicks browser's back button=============
  onPopState() {
    // console.log(window.location.pathname)
    this.onLocalLinkClick({
      url: window.location.pathname,
      push: false,
    });
  }

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
    if (this.page && this.page.update) {
      this.page.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners
   */
  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this));

    window.addEventListener('popstate', this.onPopState.bind(this));
    window.addEventListener('mousewheel', this.onWheel.bind(this));
    window.addEventListener('wheel', this.onWheel.bind(this));
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.onclick = (event) => {
        // this means if the href of the link includes the root route of our website
        if (link.href.indexOf(window.location.origin) > -1) {
          event.preventDefault();
          console.log(link.href);
          this.onLocalLinkClick({
            url: link.href,
          });
        }
      };
    });
  }
}

  new App()
