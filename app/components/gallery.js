import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Flip from 'gsap/Flip';

// const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;

export default class Gallery {
  constructor(element) {
    this.element = element;
    this.gallery = document.querySelector('.gallery');
    this.gridItems = [...element.querySelectorAll('.column__item')];
    this.list = [...element.querySelectorAll('.column__item-img')];
    // console.log(this.list);
    // target
    this.content = document.querySelector('.contentpage');
    this.serviceNav = document.querySelector('.service__nav__items');
    this.contentImg = document.querySelector('.contentpage__main__item ');
    this.navContainer = document.querySelector('.contentpage__nav-items');
    this.contentImages = [...document.querySelectorAll('.contentpage__nav-item')];
    this.navWrapper = document.querySelector(
      '.contentpage__nav-items__wrapper'
    );

    this.backBtn = document.querySelector('.back-button');
    this.prevBtn = document.querySelector('.nav__arrow__left');
    this.nextBtn = document.querySelector('.nav__arrow__right');
    this.playBtn = document.querySelector('.play-button-wrapper');
    this.video = document.getElementById("video");


    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Flip);

    this.addEventListeners();
    this.trackVisibleItems()
    this.setGallery()
    console.log(this.element)
    this.setWidth = false;

    console.log(this.gridItems.length);

		// this.indexItems()
  }

  /**
   * Events
   */
  /**
   * Track which items are visible (inside the viewport)
   * by adding/removing the 'in-view' class when scrolling.
   * This will be used to animate only the ones that are visible.
   */
  trackVisibleItems() {
    const observer = new window.IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });
    this.gridItems.forEach((item) => observer.observe(item));
  }

  setGallery() {
    if (this.gridItems.length < 2) {
      this.gallery.style.display = 'block'
    } else {
      this.gallery.style.display = 'flex'
    }
  }

	indexItems (Items) {
		Items.forEach((item, index) => {
			item.setAttribute('data-index', `${index}`)
		})
	}

	setNavWidth(ItemWidth) {
    // console.log(this.list.length, ItemWidth);
		this.NavWidth = (this.list.length * ItemWidth) ;
		this.navWrapper.style.width = `${this.NavWidth}px`
    this.setWidth = true
	}

  checkVideo(type, element){
    if(type !== 'image') {
      this.playBtn.classList.remove('none')
      this.videoContent = true
      // this.videoSource = this.video.querySelector('source');
      console.log(this.video, element, this.video.src);
      this.dataVideoUrl = element.getAttribute('data-videoUrl');
      this.video.src = this.dataVideoUrl
        console.log('video clicked', this.dataVideoUrl);
      } else {
        this.playBtn.classList.add('none');
        this.videoContent = false;
        // console.log('video not clicked');
      }
  }

  openModal(e) {
    if (e.target.classList.contains('column__item-img')) {
      this.selectedImage = e.target;
			this.lastclicked = null

      this.current = this.selectedImage.parentElement.dataset.index;
      // console.log(this.current);

      // All the other images (that are inside the viewport)
      this.viewportGrids = this.gridItems.filter(
        (el) =>
          el !== this.selectedImage.parentElement &&
          el.classList.contains('in-view')
      );

      this.viewportGridItems = this.gridItems
        .filter(
          (el) =>
            el !== this.selectedImage.parentElement &&
            el.classList.contains('in-view')
        )
        .map((item) => item.querySelector('img'));

      // Remaining (not in the viewport)
      this.remainingGridItems = this.gridItems
        .filter(
          (el) =>
            !el.classList.contains('in-view') &&
            el !== this.selectedImage.parentElement
        )
        .map((item) => item.querySelector('img'));

      // console.log(this.remainingGridItems);

      const state = Flip.getState(this.selectedImage);
      this.itemState = Flip.getState(this.viewportGridItems);

      this.selectedImage.classList.remove('column__item-img');
      this.selectedImage.classList.add('contentpage__main__item-img');


      this.viewportGridItems.forEach((item) => {
        this.itemParent = item.parentElement;
        this.attribute = this.itemParent.getAttribute('data-type');
        this.videoUrl = this.itemParent.getAttribute('data-videoUrl');
        // console.log(this.attribute);
        const newFigure = document.createElement('figure');
        newFigure.classList.add('contentpage__nav-item');
        newFigure.classList.add('view-item');
        newFigure.setAttribute('data-type',this.attribute)
        newFigure.setAttribute('data-videoUrl', this.videoUrl);
        this.navWrapper.appendChild(newFigure);
      });

      const newFigure = document.createElement('figure');
      // const selectedImg = document.createElement('img');
      // newFigure.appendChild(selectedImg);
      // selectedImg.src = this.selectedImage.src;
      newFigure.classList.add('contentpage__nav-item');
      newFigure.classList.add('selected-item');
      this.navWrapper.appendChild(newFigure);

      this.remainingGridItems.forEach((item, index) => {
        this.itemParent = item.parentElement;
        this.attribute = this.itemParent.getAttribute('data-type');
        this.videoUrl = this.itemParent.getAttribute('data-videoUrl');
        const newFigure = document.createElement('figure');
        newFigure.classList.add('contentpage__nav-item');
        newFigure.classList.add('remaining-item');

        newFigure.setAttribute('data-videoUrl', this.videoUrl);
        newFigure.setAttribute('data-type', this.attribute);
        this.navWrapper.appendChild(newFigure);
        newFigure.appendChild(this.remainingGridItems[index]);
      });

      this.content.classList.remove('none');
      this.serviceNav.classList.add('none');
      this.selectedParent = this.selectedImage.parentElement;
      this.ViewItems = [...document.querySelectorAll('.view-item')];
      this.remainingItems = [...document.querySelectorAll('.remaining-item')];

      this.contentType = this.selectedParent.getAttribute('data-type');
      this.contentVideoUrl = this.selectedParent.getAttribute('data-videoUrl');
      this.checkVideo(this.contentType, this.selectedParent)
      // console.log(this.video);


      this.viewportGrids = this.gridItems.filter(
        (el) =>
          el !== this.selectedImage.parentElement &&
          el.classList.contains('in-view')
      );
      this.remainingportGrids = this.gridItems.filter(
        (el) =>
          el !== this.selectedImage.parentElement &&
          !el.classList.contains('in-view')
      );
      this.contentImg.setAttribute('data-type', this.contentType);
      this.contentImg.setAttribute('data-videoUrl', this.contentVideoUrl);
      this.contentImg.appendChild(this.selectedImage);
      this.content.classList.add('open')



      this.viewportGridItems.forEach((item, index) => {
        this.ViewItems[index].appendChild(item);
      });

      this.remainingportGrids.forEach((item, index) => {});
      // console.log(this.ViewItems);

      Flip.from(this.itemState, {
        duration: 0.6,
        ease: 'sine.out',
        absolute: true,
        onComplete: () => {},
      });

      Flip.from(state, {
        duration: 0.6,
        ease: 'sine.out',
        absolute: true,
      });

      gsap.from('.remaining-item', {
        yPercent: 100,
        duration: 0.2,
        delay: 0.2,
        stagger: 0.1,
        // autoAlpha: 1,
        ease: 'power1.out',
      });

      this.gridItems.forEach((item) => item.classList.add('pointer'));

      this.contentImages = [
        ...document.querySelectorAll('.contentpage__nav-item'),
      ];
      // this.indexItems(this.contentImages)
      this.contentImages.forEach((item, index) => {
        item.setAttribute('data-index', `${index}`);
      });

      this.wrapWidth = this.navWrapper.getBoundingClientRect().width;
      this.navContainerWidth = this.navContainer.getBoundingClientRect().width;
      this.ItemWidth = this.contentImages[0].getBoundingClientRect().width;
			// console.log(this.ItemWidth, this.list.length);
      // this.ItemWidth = this.wrapWidth / this.contentImages.length;
      this.navVisible = this.navContainerWidth / (this.ItemWidth );
      // console.log(this.ItemWidth, Math.round(this.navVisible));

      if(!this.setWidth){
        this.setNavWidth(this.ItemWidth);
        this.calculate()
      } else {
        this.navWrapper.style.width = `${this.inner.width}px`;
      }
      // console.log(this.contentImages.length, this.navContainerWidth, this.ItemWidth, this.navVisible);
      // console.log(this.contentImages.length - Math.round(this.navVisible));
      this.count = 0;
      // TRYING TO CALCULATE THE LIMIT FOR NEXT AND PREVIOUS BUTTONS

      // this.element.classList.add('fixed');
      this.dragSlider()

      this.prevBtn.addEventListener('click', this.prevImage.bind(this));
      this.nextBtn.addEventListener('click', this.nextImage.bind(this));

			this.headerImage()
    }
  }

	headerImage() {
    this.mainmoved = false;
      this.contentImages.forEach(item => {
        item.addEventListener('click', (e)=>{
          if(this.dragging) return;
        this.navSelectedItem = this.navContainer.querySelector('.selected-item');
        // if(!this.lastclicked) return;
        // move maninImg
        // console.log(e.target);
        this.lastclickedImg = e.target
				this.lastclicked = e.target.parentElement
        // console.log(this.lastclicked);
        this.contentType = this.lastclicked.getAttribute('data-type');
        this.contentVideoUrl = this.lastclicked.getAttribute('data-videoUrl');
        this.checkVideo(this.contentType, this.lastclicked)

        this.contentImg.classList.remove('open');
        // this.lastState = Flip.getState(this.lastclickedImg);

        if(this.mainmoved){
          console.log('move last clicked');
          this.mainImg = this.contentImg.querySelector('img')
          this.mainImgState = Flip.getState(this.lastclicked);
          this.mainImg.classList.remove('contentpage__main__item-img');
          this.mainImg.classList.add('contentpage__nav-item-img');
          this.previousClicked.appendChild(this.mainImg)
          // Flip.from(this.mainImgState, {
          //   duration: 0.6,
          //   ease: 'sine.out',
          //   absolute: true,
          // });
        }
        this.contentImg.setAttribute('data-type', this.contentType);
        this.contentImg.setAttribute('data-videoUrl', this.contentVideoUrl);
				this.lastclickedImg.classList.add('contentpage__main__item-img');
				this.lastclickedImg.classList.remove('contentpage__nav-item-img');
        this.contentImg.appendChild(this.lastclickedImg);
        this.contentImg.classList.add('open');
        // console.log(this.contentImg);

                // Flip.from(this.lastState, {
                //   delay: 0.2,
                //   duration: 0.6,
                //   ease: 'sine.out',
                //   absolute: true,
                // });
        this.lastclicked.classList.add('selected-item')
        this.navSelectedItem.classList.remove('selected-item');
        // console.log(this.contentImg, this.lastclickedImg);

        this.moveMainImg()
        this.previousClicked = this.lastclicked
        this.lastclicked = null
        // this.mainmoved = false
			})
		})
    this.openHeaderModal()
	}

  openHeaderModal() {
    console.log(this.videoContent);
    this.closeModalbtn = document.querySelector('.modal-btn-close');
    this.headerModal = document.querySelector('.contentimagepage');
    this.headerModalImg = document.querySelector('.contentimagepage__img');
    this.headerModalVideo = document.querySelector('.video-container');

    if(!this.videoContent) {
      this.contentImg.addEventListener('click', (e)=>{
        if (this.videoContent) return;
        console.log('this is a picture');
        this.headerModal.classList.remove('none');
        this.headerModal.classList.add('open');
        this.modalImg = e.target
        // console.log(this.modalImg.parentElement);
        this.headerModalImg.classList.remove('none');
        this.headerModalImg.src = this.modalImg.src
        // console.log(e.target, this.headerModalImg.src);

      })
    } else {
      // this.checkVideo()
      // console.log('this is a video', this.video);
      this.playBtn.addEventListener('click', ()=>{
        this.video.src = this.dataVideoUrl;
        this.headerModal.classList.remove('none');
        this.headerModal.classList.add('open');
        this.headerModalImg.classList.add('none');
        this.headerModalVideo.classList.remove('none');
        console.log('play');
        // if (this.video.paused || this.video.ended) {
        //   this.video.play();
        // } else {
        //   this.video.pause();
        // }
      })
    }

    this.closeModalbtn.addEventListener('click', (e)=>{
      // console.log(e.target)
      this.headerModal.classList.add('none');
      this.headerModal.classList.remove('open');
      this.headerModalVideo.classList.add('none');
      this.headerModalImg.classList.add('none');
      this.video.src = '';
    })
  }

  moveMainImg(){
    if(this.mainmoved) return;
    this.mainState = Flip.getState(this.selectedImage);
    this.selectedImage.classList.remove('contentpage__main__item-img');
    this.selectedImage.classList.add('contentpage__nav-item-img');
    this.navSelectedItem.appendChild(this.selectedImage);

    // Flip.from(this.mainState, {
    //   duration: 0.6,
    //   ease: 'sine.out',
    //   absolute: true,
    // });

    this.mainmoved = true;
    console.log('main moved');
    this.openHeaderModal();
  }

  moveMainImgBack(){
    if(!this.mainmoved) return;
    this.mainImg = this.contentImg.querySelector('img');
    // console.log(this.mainImg);
    this.mainImg.classList.remove('contentpage__main__item-img');
    this.mainImg.classList.add('contentpage__nav-item-img');
    this.previousClicked.appendChild(this.mainImg);
    this.previousClicked.classList.remove('selected-item');
    this.mainSelected = this.selectedImage.parentElement;
    this.mainSelected.classList.add('selected-item');

    this.selectedImage.classList.add('contentpage__main__item-img');
    this.selectedImage.classList.remove('contentpage__nav-item-img');
    this.contentImg.appendChild(this.selectedImage);


  }

	calculate() {
		this.outer = this.navContainer.getBoundingClientRect();
    this.inner = this.navWrapper.getBoundingClientRect();
    this.innerLeft = this.inner.left - this.outer.left;
	}

  dragSlider() {
    this.pressed = false
    this.startx = null
    this.x = null
		this.calculate()
    this.navContainer.addEventListener('mousedown', (e)=>{
			e.preventDefault()
      this.pressed = true;
      this.dragging = true;
      this.outer = this.navContainer.getBoundingClientRect()
      this.offsetX = e.pageX - this.outer.left
      // this.navWrapperOffsetLeft = this.navWrapper.getBoundingClientRect().left - this.outer.left;
      this.startx = this.offsetX - this.innerLeft;
      this.navContainer.style.cursor = 'grabbing'
      // console.log(this.navWrapperOffsetLeft);
    })
    this.navContainer.addEventListener('mouseenter', (e)=>{
      this.navContainer.style.cursor = 'grab'
			this.pressed = false;
    })
    this.navContainer.addEventListener('mouseup', (e)=>{
      this.navContainer.style.cursor = 'grab'
      this.pressed = false;
      this.dragging = false;
    })
    window.addEventListener('mouseup', ()=>{
      this.pressed = false;
      this.dragging = false;
    })
    this.navContainer.addEventListener('mousemove', (e) => {
			// console.log(this.pressed)
			this.checkboundary()
      e.preventDefault();
      if(!this.pressed) return;
      this.dragging = true
      // this.rect = this.navContainer.getBoundingClientRect();
      this.offsetX = e.pageX - this.outer.left;
      // console.log('mousemove', this.offsetX);
      this.x = this.offsetX;
      this.navWrapper.style.left = `${this.x - this.startx}px`
    });

  }

	checkboundary () {
		// console.log(this.innerLeft);
		this.calculate()
		if (parseInt(this.innerLeft) > 0) {
			this.navWrapper.style.left = '0px';
			this.navWrapper.style.transform = `translateX(${0}px)`;
      // console.log('start', this.innerLeft);
    }
		if (this.inner.right < this.outer.right) {
			// this.navWrapper.style.left =`-${this.inner.width - this.outer.width}px`
			this.navWrapper.style.transform = `-${
        this.inner.width - this.outer.width
      }px`;
      // console.log('end');
    }
	}

  prevImage () {
		this.calculate()
		if (parseInt(this.innerLeft) >= 0) return;
		this.count--;
		// this.checkboundary()
    this.move = (this.ItemWidth + 8) * this.count;
    this.navWrapper.style.transform = `translateX(${-this.move}px)`;
    // console.log('clicked', this.count);
  }

  nextImage () {
		this.calculate()
		// console.log(this.inner.right, this.outer.right);
		if (this.inner.right < this.outer.right) return;
		this.count++;
    this.move = (this.ItemWidth + 8) * this.count;
    this.navWrapper.style.transform = `translateX(${-this.move}px)`
    // console.log('clicked', this.count, this.move);
  }

  async closeModal(e) {
    // console.log('clicked', this.viewportGrids);
    // move selected image back
    await this.moveMainImgBack()
    // this.element.classList.remove('fixed');

    gsap.to('.remaining-item', {
      yPercent: 0,
      duration: 0.2,
      delay: 0.2,
      stagger: 0.1,
      // autoAlpha: 1,
      ease: 'power1.out',
    });
    this.contentViewItems = [
      ...document.querySelectorAll('.contentpage__nav-item.view-item'),
    ];
    this.contentRemainingItems = [
      ...document.querySelectorAll('.contentpage__nav-item.remaining-item'),
    ];

    //

    // console.log(
    //   this.contentRemainingItems,
    //   this.ViewItems,
    //   this.remainingportGrids
    // );

    //

    const state = Flip.getState(this.selectedImage);
    this.itemState = Flip.getState(this.viewportGridItems);

    this.selectedImage.classList.remove('contentpage__main__item-img');
    this.selectedImage.classList.add('column__item-img');

    this.serviceNav.classList.remove('none');
    this.selectedParent.appendChild(this.selectedImage);

    this.contentViewItems.forEach((item, index) => {
			const img = item.querySelector('img')
			this.viewportGrids[index].appendChild(img);
    });
    this.contentRemainingItems.forEach((item, index) => {
      const img = item.querySelector('img');
      this.remainingportGrids[index].appendChild(img);
    });

        Flip.from(state, {
          duration: 0.6,
          ease: 'sine.out',
          absolute: true,
        });

        Flip.from(this.itemState, {
          duration: 0.6,
          ease: 'sine.out',
          absolute: true,
          onComplete: () => {
            // console.log('pointer');
            this.gridItems.forEach((item) => {
              item.classList.remove('pointer');
            });
          }
        });
        this.trackVisibleItems()
    this.content.classList.add('none');
    this.navWrapper.innerHTML = ''
    this.navWrapper.style.left = '0px';
    this.navWrapper.style.transform = `translateX(${0}px)`;

    this.element.classList.remove('fixed');

  }

  /**
   * Listeners
   */
  addEventListeners() {
    this.element.addEventListener('click', this.openModal.bind(this));
    this.backBtn.addEventListener('click', this.closeModal.bind(this));
  }
}
