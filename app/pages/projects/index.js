import Page from '../../classes/page'

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
    this.projectsWrapper = document.querySelector('.projects__wrapper');

    gsap.registerPlugin(ScrollTrigger);

    this.projectsColumns = [];
    this.projectsCol1 = [];
    this.projectsCol2 = [];
    this.projectsCol3 = [];

    this.projectContent();

  }

  create() {
    super.create();
    // Initialize the column scroll
    if (this.el) {
      console.log('true');
    } else {
      console.log('false');
    }
    if (!this.allProject) return;
    this.createColumns()
    this.colScroll();
  }

  async projectContent () {
    // eslint-disable-next-line no-undef
    const data = await fetch('http://localhost:3000/projectresults');
    this.allProject = await data.json();
    // console.log('content created', this)
     await this.columnItems(this.allProject);

     if (!this.columns[0]) return;
     this.createColumns();
     this.colScroll();
     console.log(this.columns[0]);
  }

  columnItems (Projects) {


   Projects.forEach((project, index) => {
     if (index % 3 === 0) {
       Projects[index].projectColumn = 'col3';
       this.projectsCol3.push(project);
     } else if (index % 2 === 0) {
       Projects[index].projectColumn = 'col2';
       this.projectsCol2.push(project);
     } else {
       Projects[index].projectColumn = 'col1';
       this.projectsCol1.push(project);
     }
   });
   this.projectsColumns.push(this.projectsCol1, this.projectsCol2, this.projectsCol3);
  //  this.projectsColumns.push(projectsCol1, projectsCol2, projectsCol3);



   this.displayCol1 = this.projectsCol1.map((project) => {
    // return project
     return `<figure class="column__item">
     <img class="column__item-img" data-src=${project.imageUrl} alt=${project.imageAlt} src=${project.imageUrl} data-tag=${project.tags}>
     </figure>`;
    });
    this.displayCol1 = this.displayCol1.join('')
    // console.log(this.displayCol1);

   this.displayCol2 = this.projectsCol2.map((project) => {
     return `<figure class="column__item">
     <img class="column__item-img" data-src=${project.imageUrl} alt=${project.imageAlt} src=${project.imageUrl} data-tag=${project.tags}>
     </figure>`;
    });
    this.displayCol2 = this.displayCol2.join('')

   this.displayCol3 = this.projectsCol3.map((project) => {
     return `<figure class="column__item">
     <img class="column__item-img" data-src=${project.imageUrl} alt=${project.imageAlt} src=${project.imageUrl} data-tag=${project.tags}>
     </figure>`;
    });
    this.displayCol3 = this.displayCol3.join('')



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

  onResize () {
    this.colScroll()
  }

  createColumns() {
    this.columns = document.querySelectorAll('.col');
    this.columnItem = document.querySelectorAll('.column__item');
    this.projectsWrapper = document.querySelector('.projects__wrapper');

    this.columns[0].innerHTML = this.displayCol1;
    this.columns[1].innerHTML = this.displayCol2;
    this.columns[2].innerHTML = this.displayCol3;
    // console.log(this.columns[0].innerHTML, this);
  }

  colScroll() {
    // console.log(this);
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
