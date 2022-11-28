/*! For license information please see main.2f662621afe659c52470.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/slider.js":(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var s=i("./node_modules/prefix/index.js"),n=i.n(s),h=i("./node_modules/gsap/index.js"),o=i("./node_modules/gsap/ScrollTrigger.js"),r=i("./app/classes/detection.js");const l=(t,e,i)=>(1-i)*t+i*e;class c{constructor(t){this.el=document.querySelector(t.el),this.wrap=this.el.querySelector(t.wrap),this.items=this.el.querySelectorAll(t.item),this.bar=document.querySelector(t.bar),this.leftBtn=document.querySelector(".btn__left"),this.rightBtn=document.querySelector(".btn__right"),this.section=document.querySelector(".home__services"),this.wrapper=document.querySelector(".home__services__wrapper"),this.slider=document.querySelector(".home__services__gallery"),this.DragText=document.querySelector(".cursor__text1"),this.progressNumber=document.querySelector(".home__services__nav__progress__progress__number"),this.init(),console.log("slider created"),this.inView=!1,this.centerSlide=null,this.transformPrefix=n()("transform"),h.default.registerPlugin(o.ScrollTrigger),this.scroll()}init(){this.progress=0,this.speed=0,this.oldX=0,this.x=0,this.playrate=0,this.bindings(),this.calculate(),this.activeSlide(),this.events(),this.raf()}bindings(){["events","calculate","raf","handleWheel","handleLeftClicks","handleRightClicks","move","raf","handleTouchStart","handleTouchMove","handleTouchEnd","activeSlide"].forEach((t=>{this[t]=this[t].bind(this)}))}calculate(){this.windowWidth=window.innerWidth,this.wrapWidth=this.slider.getBoundingClientRect().width,this.ItemWidth=this.wrapWidth/this.items.length,(r.default.isDesktop()||r.default.isTablet())&&(this.minScroll=this.wrap.getBoundingClientRect().left-this.ItemWidth,this.windowCenter=this.windowWidth/2+.25*this.ItemWidth,this.windowLeft=this.windowWidth/2-.75*this.ItemWidth),r.default.isPhone()&&(this.minScroll=this.wrap.getBoundingClientRect().left,this.windowCenter=this.windowWidth/2+.25*this.ItemWidth,this.windowLeft=this.minScroll-20,console.log(this.windowLeft,this.windowCenter)),this.maxScroll=this.wrapWidth-this.el.clientWidth-this.minScroll,this.sectionTop=this.section.getBoundingClientRect().top}activeSlide(){this.items.forEach(((t,e)=>{this.itemBoundsLeft=t.getBoundingClientRect().left,this.isCenter=this.itemBoundsLeft<this.windowCenter&&this.itemBoundsLeft>this.windowLeft,this.isCenter?(this.centerSlide=t,this.centerSlideIndex=e,this.centerSlide.classList.add("active")):t.classList.remove("active")}))}activeSlideClick(){this.items.forEach(((t,e)=>{this.rightClick?(this.itemBoundsLeft=t.getBoundingClientRect().left-this.ItemWidth,console.log("right click")):(this.itemBoundsLeft=t.getBoundingClientRect().left+this.ItemWidth,console.log("left click")),this.isCenter=this.itemBoundsLeft<this.windowCenter&&this.itemBoundsLeft>this.windowLeft,this.isCenter?(this.centerSlide=t,this.centerSlideIndex=e,this.centerSlide.classList.add("active")):t.classList.remove("active")}))}handleWheel(t){this.inView&&(this.inView?this.progress+=t.deltaY:this.progress=0,this.move())}handleLeftClicks(t){this.rightClick=!1,console.log("left click"),this.progress-=this.ItemWidth,this.activeSlideClick(),this.progress<=this.minScroll-100&&(console.log("gallery start",this.items[0].getBoundingClientRect().left),this.slideEnd=this.items[this.items.length-1],this.progress-=this.ItemWidth,this.items.forEach(((t,e)=>{t.classList.remove("active")})),this.progress=0,setTimeout((()=>{this.progress=this.maxScroll,this.slideEnd.classList.add("active"),this.centerSlideIndex=this.items.length-1}),1e3))}handleRightClicks(t){this.clicked=!0,this.rightClick=!0,console.log("right click"),this.progress+=this.ItemWidth,this.activeSlideClick(),this.progress>=this.maxScroll&&(this.slideStart=this.items[0],this.items.forEach(((t,e)=>{t.classList.remove("active")})),this.progress=this.maxScroll,setTimeout((()=>{this.progress=this.minScroll,this.slideStart.classList.add("active"),this.centerSlideIndex=0}),1e3))}handleTouchStart(t){t.preventDefault(),this.inView&&(this.dragging=!0,this.startX=t.clientX||t.touches[0].clientX,this.el.classList.add("dragging"),this.DragText.classList.add("none"),this.click=!1)}handleTouchMove(t){if(this.click=!1,!this.inView)return;if(!this.dragging)return!1;const e=t.clientX||t.touches[0].clientX;this.progress+=2.5*(this.startX-e),this.startX=e,this.move()}handleTouchEnd(){this.click=!1,this.inView&&(this.dragging=!1,this.el.classList.remove("dragging"),this.DragText.classList.remove("none"))}move(){var t,e,i;this.click=!1,this.progress=(t=this.progress,e=this.minScroll,i=this.maxScroll,Math.max(e,Math.min(t,i))),this.activeSlide()}events(){window.addEventListener("resize",this.calculate),window.addEventListener("wheel",this.handleWheel),this.rightBtn.addEventListener("click",this.handleRightClicks),this.leftBtn.addEventListener("click",this.handleLeftClicks),this.el.addEventListener("touchstart",this.handleTouchStart),this.el.addEventListener("touchmove",this.handleTouchMove),this.el.addEventListener("touchend",this.handleTouchEnd),window.addEventListener("mousedown",this.handleTouchStart),window.addEventListener("mousemove",this.handleTouchMove),window.addEventListener("mouseup",this.handleTouchEnd),document.body.addEventListener("mouseleave",this.handleTouchEnd)}scroll(){const t=this;this.slideY=this.wrapWidth+this.ItemWidth-window.innerWidth,this.tl=h.default.timeline({scrollTrigger:{trigger:".home__about",start:"bottom 10%",toggleActions:"restart complete none reset"}}),this.tl.to(".home__about__scrolltext .word",{y:"100%",opacity:0,duration:.5}),r.default.isDesktop()||r.default.isTablet()?this.tl1=h.default.timeline({scrollTrigger:{trigger:".home__services",start:"top top",end:`+=${this.slideY}`,toggleActions:"restart complete none reset",pin:".home__services",scrub:1,onEnter:function(){t.section.classList.add("in-view")},onLeave:function(){t.DragText.classList.add("none"),t.section.classList.remove("in-view")},onLeaveBack:function(){t.DragText.classList.add("none"),t.section.classList.remove("in-view")},onEnterBack:function(){t.section.classList.add("in-view"),t.DragText.classList.remove("none")}}}):this.tl1=h.default.timeline({scrollTrigger:{trigger:".home__services",start:"top top",end:"bottom top",toggleActions:"restart complete none reset",markers:!0,pin:!0,onEnter:function(){t.section.classList.add("in-view")},onLeave:function(){t.section.classList.remove("in-view")},onLeaveBack:function(){t.section.classList.remove("in-view")},onEnterBack:function(){t.section.classList.add("in-view")},onUpdate:function(e){t.scrollSlider=e.progress*t.slideY,t.progress=+t.scrollSlider,t.move(),console.log(t.progress,t.scrollSlider)}}}),this.tl.from(".home__services__gallery__wrapper",{display:"none"}).to(".home__services__wrapper",{opacity:1,delay:5,duration:.5,ease:"expo.out",onComplete:function(){t.inView=!0,t.DragText.classList.remove("none")}}),this.section.classList.contains("in-view")||this.DragText.classList.add("none")}moveSlider(){this.sectionTop=this.section.getBoundingClientRect().top,this.raf()}raf(){this.inView&&(this.x=l(this.x,this.progress,.1),this.playrate=this.x/this.maxScroll,this.progressNum=this.centerSlideIndex+1,this.progressNumber.innerHTML=`0${this.progressNum}/07`,this.wrap.style[this.transformPrefix]=`translateX(${-this.x}px)`,this.bar.style[this.transformPrefix]=`scaleX(${.18+.82*this.playrate})`,this.speed=Math.min(100,this.oldX-this.x),this.oldX=this.x,this.scale=l(this.scale,this.speed,.1),this.items.forEach((t=>{t.style[this.transformPrefix]=`scale(${1-.002*Math.abs(this.speed)})`,t.querySelector("img").style[this.transformPrefix]=`scaleX(${1+.004*Math.abs(this.speed)})`})))}}}},(function(t){t.h=()=>"1bcf07e934f6d9dc9ea2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sSUFDMUMzQixLQUFLSyxNQUFNK0IsU0FBU0MsSUFDbEJBLEVBQUVvRixNQUFNekgsS0FBS3FCLGlCQUFvQixTQUFRLEVBQTJCLEtBQXZCa0UsS0FBS29DLElBQUkzSCxLQUFLMkIsVUFDM0RVLEVBQUVsQyxjQUFjLE9BQU9zSCxNQUFNekgsS0FBS3FCLGlCQUFvQixVQUNwRCxFQUEyQixLQUF2QmtFLEtBQUtvQyxJQUFJM0gsS0FBSzJCLCtCQy9ZMUJpRyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcbmltcG9ydCBEZXRlY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9kZXRlY3Rpb24nXG5cbmNvbnN0IGxlcnAgPSAoZjAsIGYxLCB0KSA9PiAoMSAtIHQpICogZjAgKyB0ICogZjE7XG5jb25zdCBjbGFtcCA9ICh2YWwsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbCwgbWF4KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdTY3JvbGwge1xuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmouZWwpO1xuICAgIHRoaXMud3JhcCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihvYmoud3JhcCk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChvYmouaXRlbSk7XG4gICAgdGhpcy5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9iai5iYXIpO1xuICAgIHRoaXMubGVmdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2xlZnQnKTtcbiAgICB0aGlzLnJpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fcmlnaHQnKTtcbiAgICAvLyB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fc2VydmljZXNfX2dhbGxlcnknKTtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fc2VydmljZXMnKTtcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fc2VydmljZXNfX3dyYXBwZXInKTtcbiAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19zZXJ2aWNlc19fZ2FsbGVyeScpO1xuICAgIHRoaXMuRHJhZ1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Vyc29yX190ZXh0MScpO1xuICAgIHRoaXMucHJvZ3Jlc3NOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5ob21lX19zZXJ2aWNlc19fbmF2X19wcm9ncmVzc19fcHJvZ3Jlc3NfX251bWJlcidcbiAgICApO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnNvbGUubG9nKCdzbGlkZXIgY3JlYXRlZCcpO1xuXG4gICAgdGhpcy5pblZpZXcgPSBmYWxzZTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGFjdGl2ZSBzbGlkZVxuICAgIHRoaXMuY2VudGVyU2xpZGUgPSBudWxsXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJyk7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICB0aGlzLnNjcm9sbCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAvLyB0aGlzLm1pblNjcm9sbCA9IDA7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5vbGRYID0gMDtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMucGxheXJhdGUgPSAwO1xuICAgIC8vXG4gICAgdGhpcy5iaW5kaW5ncygpO1xuICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgdGhpcy5hY3RpdmVTbGlkZSgpXG4gICAgdGhpcy5ldmVudHMoKTtcbiAgICB0aGlzLnJhZigpO1xuICB9XG5cbiAgYmluZGluZ3MoKSB7XG4gICAgW1xuICAgICAgJ2V2ZW50cycsXG4gICAgICAnY2FsY3VsYXRlJyxcbiAgICAgICdyYWYnLFxuICAgICAgJ2hhbmRsZVdoZWVsJyxcbiAgICAgICdoYW5kbGVMZWZ0Q2xpY2tzJyxcbiAgICAgICdoYW5kbGVSaWdodENsaWNrcycsXG4gICAgICAnbW92ZScsXG4gICAgICAncmFmJyxcbiAgICAgICdoYW5kbGVUb3VjaFN0YXJ0JyxcbiAgICAgICdoYW5kbGVUb3VjaE1vdmUnLFxuICAgICAgJ2hhbmRsZVRvdWNoRW5kJyxcbiAgICAgICdhY3RpdmVTbGlkZScsXG4gICAgXS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICB0aGlzW2ldID0gdGhpc1tpXS5iaW5kKHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlKCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMud3JhcFdpZHRoID0gdGhpcy5zbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgdGhpcy5JdGVtV2lkdGggPSB0aGlzLndyYXBXaWR0aCAvIHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIGlmIChEZXRlY3Rpb24uaXNEZXNrdG9wKCkgfHwgRGV0ZWN0aW9uLmlzVGFibGV0KCkpIHtcbiAgICAgIHRoaXMubWluU2Nyb2xsID0gdGhpcy53cmFwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0aGlzLkl0ZW1XaWR0aDtcbiAgICAgIHRoaXMud2luZG93Q2VudGVyID0gdGhpcy53aW5kb3dXaWR0aCAvIDIgKyB0aGlzLkl0ZW1XaWR0aCAqIDAuMjU7XG4gICAgICB0aGlzLndpbmRvd0xlZnQgPSB0aGlzLndpbmRvd1dpZHRoIC8gMiAtIHRoaXMuSXRlbVdpZHRoICogMC43NTtcbiAgICB9XG4gICAgaWYgKERldGVjdGlvbi5pc1Bob25lKCkpe1xuICAgICAgdGhpcy5taW5TY3JvbGwgPSB0aGlzLndyYXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgdGhpcy53aW5kb3dDZW50ZXIgPSB0aGlzLndpbmRvd1dpZHRoIC8gMiArIHRoaXMuSXRlbVdpZHRoICogMC4yNTtcbiAgICAgIHRoaXMud2luZG93TGVmdCA9IHRoaXMubWluU2Nyb2xsIC0gMjA7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLndpbmRvd0xlZnQsIHRoaXMud2luZG93Q2VudGVyKVxuICAgIH1cbiAgICAgIC8vIHRoaXMud3JhcC5zdHlsZS53aWR0aCA9IGAke3RoaXMud3JhcFdpZHRofXB4YDtcbiAgICAgIHRoaXMubWF4U2Nyb2xsID0gdGhpcy53cmFwV2lkdGggLSB0aGlzLmVsLmNsaWVudFdpZHRoIC0gdGhpcy5taW5TY3JvbGw7XG4gICAgLy8gLSB0aGlzLm1pblNjcm9sbDtcbiAgICB0aGlzLnNlY3Rpb25Ub3AgPSB0aGlzLnNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICB9XG5cbiAgYWN0aXZlU2xpZGUgKCkge1xuICAgIC8vIENsaWNrXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKCAoaXRlbSwgaW5kZXgpID0+IHtcblxuICAgICAgdGhpcy5pdGVtQm91bmRzTGVmdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuXG4gICAgICAvLyBjb25zdCBpdGVtVGl0bGVTcGFucyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpXG5cbiAgICAgIHRoaXMuaXNDZW50ZXIgPVxuICAgICAgICB0aGlzLml0ZW1Cb3VuZHNMZWZ0IDwgdGhpcy53aW5kb3dDZW50ZXIgJiZcbiAgICAgICAgdGhpcy5pdGVtQm91bmRzTGVmdCA+IHRoaXMud2luZG93TGVmdDtcblxuICAgICAgaWYgKHRoaXMuaXNDZW50ZXIpIHtcbiAgICAgICAgdGhpcy5jZW50ZXJTbGlkZSA9IGl0ZW1cbiAgICAgICAgdGhpcy5jZW50ZXJTbGlkZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2VudGVyU2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgICAvLyAgIGl0ZW1UaXRsZVNwYW5zWzBdLmlubmVySFRNTCxcbiAgICAgICAgLy8gICB0aGlzLmNlbnRlclNsaWRlLFxuICAgICAgICAvLyAgIHRoaXMuaXRlbUJvdW5kc0xlZnQsXG4gICAgICAgIC8vICAgdGhpcy53aW5kb3dMZWZ0LFxuICAgICAgICAvLyAgIHRoaXMud2luZG93Q2VudGVyXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBwcmV2aW91cyBhbmQgYWRkIHRvIGN1cnJlbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH1cblxuICAgIH0pXG4gIH1cblxuICBhY3RpdmVTbGlkZUNsaWNrICgpIHtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucmlnaHRDbGljaykge1xuICAgICAgICAgIHRoaXMuaXRlbUJvdW5kc0xlZnQgPVxuICAgICAgICAgICAgaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdGhpcy5JdGVtV2lkdGg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmlnaHQgY2xpY2snKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtQm91bmRzTGVmdCA9XG4gICAgICAgICAgICBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB0aGlzLkl0ZW1XaWR0aDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0IGNsaWNrJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zdCBpdGVtVGl0bGVTcGFucyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuXG4gICAgICAgIHRoaXMuaXNDZW50ZXIgPVxuICAgICAgICAgIHRoaXMuaXRlbUJvdW5kc0xlZnQgPCB0aGlzLndpbmRvd0NlbnRlciAmJlxuICAgICAgICAgIHRoaXMuaXRlbUJvdW5kc0xlZnQgPiB0aGlzLndpbmRvd0xlZnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDZW50ZXIpIHtcbiAgICAgICAgICB0aGlzLmNlbnRlclNsaWRlID0gaXRlbTtcbiAgICAgICAgICB0aGlzLmNlbnRlclNsaWRlSW5kZXggPSBpbmRleFxuICAgICAgICAgIHRoaXMuY2VudGVyU2xpZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVXaGVlbChlKSB7XG4gICAgaWYgKCF0aGlzLmluVmlldykgcmV0dXJuO1xuICAgIGlmICghdGhpcy5pblZpZXcpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gZS5kZWx0YVk7XG4gIH1cbiAgdGhpcy5tb3ZlKCk7XG59XG5cbmhhbmRsZUxlZnRDbGlja3MoZSkge1xuXHR0aGlzLnJpZ2h0Q2xpY2sgPSBmYWxzZVxuICBjb25zb2xlLmxvZygnbGVmdCBjbGljaycpO1xuICB0aGlzLnByb2dyZXNzIC09IHRoaXMuSXRlbVdpZHRoO1xuICB0aGlzLmFjdGl2ZVNsaWRlQ2xpY2soKTtcblxuICAvLyBpZiBhdCB0aGUgc3RhcnQgb2YgZ2FsbGVyeSBtb3ZlIHRvIGVuZCBvZiBzbGlkZVxuICBpZiAodGhpcy5wcm9ncmVzcyA8PSAodGhpcy5taW5TY3JvbGwgLTEwMCApKSB7XG4gICAgY29uc29sZS5sb2coJ2dhbGxlcnkgc3RhcnQnLCB0aGlzLml0ZW1zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpO1xuICAgIHRoaXMuc2xpZGVFbmQgPSB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV07XG5cbiAgICB0aGlzLnByb2dyZXNzIC09ICh0aGlzLkl0ZW1XaWR0aCApO1xuICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICB9XG4gICAgIClcblxuICAgICB0aGlzLnByb2dyZXNzID0gMDtcblxuICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5tYXhTY3JvbGw7XG4gICAgICAgdGhpcy5zbGlkZUVuZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgIHRoaXMuY2VudGVyU2xpZGVJbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJpZ2h0Q2xpY2tzKGUpIHtcblx0XHR0aGlzLmNsaWNrZWQgPSB0cnVlO1xuXHRcdHRoaXMucmlnaHRDbGljayA9IHRydWU7XG4gICAgY29uc29sZS5sb2coJ3JpZ2h0IGNsaWNrJyk7XG4gICAgdGhpcy5wcm9ncmVzcyArPSB0aGlzLkl0ZW1XaWR0aDtcbiAgICB0aGlzLmFjdGl2ZVNsaWRlQ2xpY2soKTtcbiAgICAvLyBpZiBhdCB0aGUgZW5kIG9mIGdhbGxlcnkgbW92ZSB0byBzdGFydCBvZiBzbGlkZVxuICAgIGlmICh0aGlzLnByb2dyZXNzID49IHRoaXMubWF4U2Nyb2xsKSB7XG4gICAgICB0aGlzLnNsaWRlU3RhcnQgPSB0aGlzLml0ZW1zWzBdO1xuXG4gICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMubWF4U2Nyb2xsO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMubWluU2Nyb2xsO1xuICAgICAgICB0aGlzLnNsaWRlU3RhcnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY2VudGVyU2xpZGVJbmRleCA9IDBcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnZ2FsbGVyeSBlbmQnLCB0aGlzLml0ZW1zWzBdKTtcbiAgfVxuXG4gIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighdGhpcy5pblZpZXcpIHJldHVybjtcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuY2xpZW50WCB8fCBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgdGhpcy5EcmFnVGV4dC5jbGFzc0xpc3QuYWRkKCdub25lJylcbiAgICB0aGlzLmNsaWNrID0gZmFsc2VcbiAgfVxuXG4gIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgdGhpcy5jbGljayA9IGZhbHNlXG4gICAgaWYoIXRoaXMuaW5WaWV3KSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gY29uc3QgeCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggfHwgZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgdGhpcy5wcm9ncmVzcyArPSAodGhpcy5zdGFydFggLSB4KSAqIDIuNTtcbiAgICB0aGlzLnN0YXJ0WCA9IHg7XG4gICAgdGhpcy5tb3ZlKCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9ncmVzcyk7XG4gIH1cblxuICBoYW5kbGVUb3VjaEVuZCgpIHtcbiAgICB0aGlzLmNsaWNrID0gZmFsc2U7XG4gICAgaWYoIXRoaXMuaW5WaWV3KSByZXR1cm47XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB0aGlzLkRyYWdUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgfVxuXG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLmNsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGNsYW1wKHRoaXMucHJvZ3Jlc3MsIHRoaXMubWluU2Nyb2xsLCB0aGlzLm1heFNjcm9sbCk7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlKCk7XG5cblxuICB9XG5cbiAgZXZlbnRzKCkge1xuICAgIC8vIGlmKCF0aGlzLmluVmlldykgcmV0dXJuO2lmKCF0aGlzLmluVmlldykgcmV0dXJuO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGN1bGF0ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5oYW5kbGVXaGVlbCk7XG4gICAgLy9cbiAgICB0aGlzLnJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVSaWdodENsaWNrcyk7XG4gICAgdGhpcy5sZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVMZWZ0Q2xpY2tzKTtcbiAgICAvL1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQpO1xuICAgIC8vXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlVG91Y2hFbmQpO1xuXG4gIH1cblxuICBzY3JvbGwoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zbGlkZVkgPSB0aGlzLndyYXBXaWR0aCArIHRoaXMuSXRlbVdpZHRoIC0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy50bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiAnLmhvbWVfX2Fib3V0JyxcbiAgICAgICAgc3RhcnQ6ICdib3R0b20gMTAlJyxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3Jlc3RhcnQgY29tcGxldGUgbm9uZSByZXNldCcsXG4gICAgICAgIC8vIG1hcmtlcnM6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMudGxcbiAgICAgIC50bygnLmhvbWVfX2Fib3V0X19zY3JvbGx0ZXh0IC53b3JkJywge1xuICAgICAgICB5OiAnMTAwJScsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICB9KVxuICAgICAgaWYgKERldGVjdGlvbi5pc0Rlc2t0b3AoKSB8fCBEZXRlY3Rpb24uaXNUYWJsZXQoKSkge1xuICAgICAgICB0aGlzLnRsMSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6ICcuaG9tZV9fc2VydmljZXMnLFxuICAgICAgICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgICAgIC8vICBlbmQ6IGArPSR7dGhpcy53cmFwV2lkdGh9IGJvdHRvbWAsXG4gICAgICAgICAgICBlbmQ6IGArPSR7dGhpcy5zbGlkZVl9YCxcbiAgICAgICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdyZXN0YXJ0IGNvbXBsZXRlIG5vbmUgcmVzZXQnLFxuICAgICAgICAgICAgLy8gIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICBwaW46ICcuaG9tZV9fc2VydmljZXMnLFxuICAgICAgICAgICAgc2NydWI6IDEsXG4gICAgICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkIG5vbmUnKTtcbiAgICAgICAgICAgICAgc2VsZi5EcmFnVGV4dC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5EcmFnVGV4dC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZCBub25lJyk7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICAgIHNlbGYuRHJhZ1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGwxID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJy5ob21lX19zZXJ2aWNlcycsXG4gICAgICAgICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgZW5kOiAnYm90dG9tIHRvcCcsXG4gICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiAncmVzdGFydCBjb21wbGV0ZSBub25lIHJlc2V0JyxcbiAgICAgICAgICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICBwaW46IHRydWUsXG4gICAgICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLnNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaW4tdmlldycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2luLXZpZXcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gKHNjcm9sbCkge1xuICAgICAgICAgICAgICBzZWxmLnNjcm9sbFNsaWRlciA9IHNjcm9sbC5wcm9ncmVzcyAqIHNlbGYuc2xpZGVZO1xuICAgICAgICAgICAgICBzZWxmLnByb2dyZXNzID0rIHNlbGYuc2Nyb2xsU2xpZGVyXG4gICAgICAgICAgICAgIHNlbGYubW92ZSgpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYucHJvZ3Jlc3MsIHNlbGYuc2Nyb2xsU2xpZGVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgIHRoaXMudGxcbiAgICAgICAuZnJvbSgnLmhvbWVfX3NlcnZpY2VzX19nYWxsZXJ5X193cmFwcGVyJywge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgfSlcbiAgICAgICAudG8oJy5ob21lX19zZXJ2aWNlc19fd3JhcHBlcicsIHtcbiAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICBkZWxheTogNSxcbiAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICBzZWxmLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgIHNlbGYuRHJhZ1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb3BhY2l0eSAxJywgc2VsZi5pblZpZXcpO1xuICAgICAgICAgfSxcbiAgICAgICB9KTtcblxuICAgICBpZighdGhpcy5zZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaW4tdmlldycpKSB7XG4gICAgICB0aGlzLkRyYWdUZXh0LmNsYXNzTGlzdC5hZGQoJ25vbmUnKVxuICAgICB9XG4gIH1cblxuICBtb3ZlU2xpZGVyICgpIHtcbiAgICB0aGlzLnNlY3Rpb25Ub3AgPSB0aGlzLnNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZ3Jlc3MsIHRoaXMubWF4U2Nyb2xsLCB0aGlzLnNlY3Rpb25Ub3ApO1xuICAgIHRoaXMucmFmKClcblxuICB9XG5cbiAgcmFmKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5WaWV3KTtcbiAgICBpZighdGhpcy5pblZpZXcpIHJldHVyblxuICAgIHRoaXMueCA9IGxlcnAodGhpcy54LCB0aGlzLnByb2dyZXNzLCAwLjEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMueCwgdGhpcy5wcm9ncmVzcylcbiAgICB0aGlzLnBsYXlyYXRlID0gdGhpcy54IC8gdGhpcy5tYXhTY3JvbGw7XG4gICAgLy8gdGhpcy5wcm9ncmVzc051bSA9IE1hdGgucm91bmQoKDAuMTggKyB0aGlzLnBsYXlyYXRlICogMC44MikgKiA3KTtcbiAgICB0aGlzLnByb2dyZXNzTnVtID0gdGhpcy5jZW50ZXJTbGlkZUluZGV4ICsgMTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNlbnRlclNsaWRlSW5kZXggKyAxKTtcbiAgICAvL1xuICAgIHRoaXMucHJvZ3Jlc3NOdW1iZXIuaW5uZXJIVE1MID0gYDAke3RoaXMucHJvZ3Jlc3NOdW19LzA3YFxuICAgIC8vXG4gICAgdGhpcy53cmFwLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7LXRoaXMueH1weClgO1xuICAgIHRoaXMuYmFyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGBzY2FsZVgoJHswLjE4ICsgdGhpcy5wbGF5cmF0ZSAqIDAuODJ9KWA7XG4gICAgLy9cbiAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4oMTAwLCB0aGlzLm9sZFggLSB0aGlzLngpO1xuICAgIHRoaXMub2xkWCA9IHRoaXMueDtcbiAgICAvL1xuICAgIHRoaXMuc2NhbGUgPSBsZXJwKHRoaXMuc2NhbGUsIHRoaXMuc3BlZWQsIDAuMSk7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBpLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGBzY2FsZSgkezEgLSBNYXRoLmFicyh0aGlzLnNwZWVkKSAqIDAuMDAyfSlgO1xuICAgICAgaS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgc2NhbGVYKCR7XG4gICAgICAgIDEgKyBNYXRoLmFicyh0aGlzLnNwZWVkKSAqIDAuMDA0XG4gICAgICB9KWA7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnN0YW5jZXNcbiAqL1xuXG5cblxuXG5cbi8qKlxuICogT25lIHJhZiB0byBydWxlIGVtIGFsbFxuICovXG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYmNmMDdlOTM0ZjZkOWRjOWVhMlwiKSJdLCJuYW1lcyI6WyJsZXJwIiwiZjAiLCJmMSIsInQiLCJEcmFnU2Nyb2xsIiwiY29uc3RydWN0b3IiLCJvYmoiLCJ0aGlzIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImJhciIsImxlZnRCdG4iLCJyaWdodEJ0biIsInNlY3Rpb24iLCJ3cmFwcGVyIiwic2xpZGVyIiwiRHJhZ1RleHQiLCJwcm9ncmVzc051bWJlciIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiaW5WaWV3IiwiY2VudGVyU2xpZGUiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInNjcm9sbCIsInByb2dyZXNzIiwic3BlZWQiLCJvbGRYIiwieCIsInBsYXlyYXRlIiwiYmluZGluZ3MiLCJjYWxjdWxhdGUiLCJhY3RpdmVTbGlkZSIsImV2ZW50cyIsInJhZiIsImZvckVhY2giLCJpIiwiYmluZCIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndyYXBXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiSXRlbVdpZHRoIiwibGVuZ3RoIiwiRGV0ZWN0aW9uIiwibWluU2Nyb2xsIiwibGVmdCIsIndpbmRvd0NlbnRlciIsIndpbmRvd0xlZnQiLCJtYXhTY3JvbGwiLCJjbGllbnRXaWR0aCIsInNlY3Rpb25Ub3AiLCJ0b3AiLCJpbmRleCIsIml0ZW1Cb3VuZHNMZWZ0IiwiaXNDZW50ZXIiLCJjZW50ZXJTbGlkZUluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWN0aXZlU2xpZGVDbGljayIsInJpZ2h0Q2xpY2siLCJoYW5kbGVXaGVlbCIsImUiLCJkZWx0YVkiLCJtb3ZlIiwiaGFuZGxlTGVmdENsaWNrcyIsInNsaWRlRW5kIiwic2V0VGltZW91dCIsImhhbmRsZVJpZ2h0Q2xpY2tzIiwiY2xpY2tlZCIsInNsaWRlU3RhcnQiLCJoYW5kbGVUb3VjaFN0YXJ0IiwicHJldmVudERlZmF1bHQiLCJkcmFnZ2luZyIsInN0YXJ0WCIsImNsaWVudFgiLCJ0b3VjaGVzIiwiY2xpY2siLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsInZhbCIsIm1pbiIsIm1heCIsIk1hdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsInNlbGYiLCJzbGlkZVkiLCJ0bCIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJ0b2dnbGVBY3Rpb25zIiwidG8iLCJ5Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwidGwxIiwiZW5kIiwicGluIiwic2NydWIiLCJvbkVudGVyIiwib25MZWF2ZSIsIm9uTGVhdmVCYWNrIiwib25FbnRlckJhY2siLCJtYXJrZXJzIiwib25VcGRhdGUiLCJzY3JvbGxTbGlkZXIiLCJmcm9tIiwiZGlzcGxheSIsImRlbGF5IiwiZWFzZSIsIm9uQ29tcGxldGUiLCJjb250YWlucyIsIm1vdmVTbGlkZXIiLCJwcm9ncmVzc051bSIsImlubmVySFRNTCIsInN0eWxlIiwic2NhbGUiLCJhYnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=