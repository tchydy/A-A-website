/*! For license information please see main.f6f58f282905db1c38e6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/slider.js":(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var s=i("./node_modules/prefix/index.js"),n=i.n(s),h=i("./node_modules/gsap/index.js"),r=i("./node_modules/gsap/ScrollTrigger.js"),o=i("./app/classes/detection.js");const l=(t,e,i)=>(1-i)*t+i*e;class c{constructor(t){this.el=document.querySelector(t.el),this.wrap=this.el.querySelector(t.wrap),this.items=this.el.querySelectorAll(t.item),this.bar=document.querySelector(t.bar),this.leftBtn=document.querySelector(".btn__left"),this.rightBtn=document.querySelector(".btn__right"),this.section=document.querySelector(".home__services"),this.wrapper=document.querySelector(".home__services__wrapper"),this.slider=document.querySelector(".home__services__gallery"),this.DragText=document.querySelector(".cursor__text1"),this.progressNumber=document.querySelector(".home__services__nav__progress__progress__number"),this.init(),console.log("slider created"),this.inView=!1,this.centerSlide=null,this.transformPrefix=n()("transform"),h.default.registerPlugin(r.ScrollTrigger),this.scroll()}init(){this.progress=0,this.speed=0,this.oldX=0,this.x=0,this.playrate=0,this.bindings(),this.calculate(),this.activeSlide(),this.events(),this.raf()}bindings(){["events","calculate","raf","handleWheel","handleLeftClicks","handleRightClicks","move","raf","handleTouchStart","handleTouchMove","handleTouchEnd","activeSlide"].forEach((t=>{this[t]=this[t].bind(this)}))}calculate(){this.windowWidth=window.innerWidth,this.wrapWidth=this.slider.getBoundingClientRect().width,this.ItemWidth=this.wrapWidth/this.items.length,(o.default.isDesktop()||o.default.isTablet())&&(this.minScroll=this.wrap.getBoundingClientRect().left-this.ItemWidth,this.windowCenter=this.windowWidth/2+.25*this.ItemWidth,this.windowLeft=this.windowWidth/2-.75*this.ItemWidth),o.default.isPhone()&&(this.minScroll=this.wrap.getBoundingClientRect().left,this.windowCenter=this.windowWidth/2+.25*this.ItemWidth,this.windowLeft=this.minScroll-20,console.log(this.windowLeft,this.windowCenter)),this.maxScroll=this.wrapWidth-this.el.clientWidth-this.minScroll,this.sectionTop=this.section.getBoundingClientRect().top}activeSlide(){this.items.forEach(((t,e)=>{this.itemBoundsLeft=t.getBoundingClientRect().left,this.isCenter=this.itemBoundsLeft<this.windowCenter&&this.itemBoundsLeft>this.windowLeft,this.isCenter?(this.centerSlide=t,this.centerSlideIndex=e,this.centerSlide.classList.add("active")):t.classList.remove("active")}))}activeSlideClick(){this.items.forEach(((t,e)=>{this.rightClick?(this.itemBoundsLeft=t.getBoundingClientRect().left-this.ItemWidth,console.log("right click")):(this.itemBoundsLeft=t.getBoundingClientRect().left+this.ItemWidth,console.log("left click")),this.isCenter=this.itemBoundsLeft<this.windowCenter&&this.itemBoundsLeft>this.windowLeft,this.isCenter?(this.centerSlide=t,this.centerSlideIndex=e,this.centerSlide.classList.add("active")):t.classList.remove("active")}))}handleWheel(t){this.inView&&(this.inView?this.progress+=t.deltaY:this.progress=0,this.move())}handleLeftClicks(t){this.rightClick=!1,console.log("left click"),this.progress-=this.ItemWidth,this.activeSlideClick(),this.progress<=this.minScroll-100&&(console.log("gallery start",this.items[0].getBoundingClientRect().left),this.slideEnd=this.items[this.items.length-1],this.progress-=this.ItemWidth,this.items.forEach(((t,e)=>{t.classList.remove("active")})),this.progress=0,setTimeout((()=>{this.progress=this.maxScroll,this.slideEnd.classList.add("active"),this.centerSlideIndex=this.items.length-1}),1e3))}handleRightClicks(t){this.clicked=!0,this.rightClick=!0,console.log("right click"),this.progress+=this.ItemWidth,this.activeSlideClick(),this.progress>=this.maxScroll&&(this.slideStart=this.items[0],this.items.forEach(((t,e)=>{t.classList.remove("active")})),this.progress=this.maxScroll,setTimeout((()=>{this.progress=this.minScroll,this.slideStart.classList.add("active"),this.centerSlideIndex=0}),1e3))}handleTouchStart(t){t.preventDefault(),this.inView&&(this.dragging=!0,this.startX=t.clientX||t.touches[0].clientX,this.el.classList.add("dragging"),this.DragText.classList.add("none"),this.click=!1)}handleTouchMove(t){if(this.click=!1,!this.inView)return;if(!this.dragging)return!1;const e=t.clientX||t.touches[0].clientX;this.progress+=2.5*(this.startX-e),this.startX=e,this.move()}handleTouchEnd(){this.click=!1,this.inView&&(this.dragging=!1,this.el.classList.remove("dragging"),this.DragText.classList.remove("none"))}move(){var t,e,i;this.click=!1,this.progress=(t=this.progress,e=this.minScroll,i=this.maxScroll,Math.max(e,Math.min(t,i))),this.activeSlide()}events(){window.addEventListener("resize",this.calculate),window.addEventListener("wheel",this.handleWheel),this.rightBtn.addEventListener("click",this.handleRightClicks),this.leftBtn.addEventListener("click",this.handleLeftClicks),this.el.addEventListener("touchstart",this.handleTouchStart),this.el.addEventListener("touchmove",this.handleTouchMove),this.el.addEventListener("touchend",this.handleTouchEnd),window.addEventListener("mousedown",this.handleTouchStart),window.addEventListener("mousemove",this.handleTouchMove),window.addEventListener("mouseup",this.handleTouchEnd),document.body.addEventListener("mouseleave",this.handleTouchEnd)}scroll(){const t=this;this.slideY=this.wrapWidth+this.ItemWidth-window.innerWidth,this.tl=h.default.timeline({scrollTrigger:{trigger:".home__about",start:"bottom 10%",toggleActions:"restart complete none reset"}}),this.tl.to(".home__about__scrolltext .word",{y:"100%",opacity:0,duration:.5}),o.default.isDesktop()||o.default.isTablet()?this.tl1=h.default.timeline({scrollTrigger:{trigger:".home__services",start:"top top",end:`+=${this.slideY}`,toggleActions:"restart complete none reset",pin:".home__services",scrub:1,onEnter:function(){t.inView=!0,t.section.classList.add("in-view")},onLeave:function(){t.DragText.classList.add("none"),t.section.classList.remove("in-view")},onLeaveBack:function(){t.DragText.classList.add("none"),t.section.classList.remove("in-view")},onEnterBack:function(){t.section.classList.add("in-view"),t.DragText.classList.remove("none")}}}):this.tl1=h.default.timeline({scrollTrigger:{trigger:".home__services",start:"top top",end:"bottom top",toggleActions:"restart complete none reset",markers:{startColor:"white",start:"services"},pin:!0,onEnter:function(){t.inView=!0,t.section.classList.add("in-view")},onLeave:function(){t.section.classList.remove("in-view")},onLeaveBack:function(){t.section.classList.remove("in-view")},onEnterBack:function(){t.section.classList.add("in-view")},onUpdate:function(e){t.scrollSlider=e.progress*t.slideY,t.progress=(e.progress*t.slideY).toFixed(1),t.move(),e.markerEnd.innerHTML=`end: ${t.progress}`}}}),this.tl.from(".home__services__gallery__wrapper",{display:"none"}).to(".home__services__wrapper",{opacity:1,delay:5,duration:.5,ease:"expo.out",onComplete:function(){t.inView=!0,t.DragText.classList.remove("none")}}),this.section.classList.contains("in-view")||this.DragText.classList.add("none")}moveSlider(){this.sectionTop=this.section.getBoundingClientRect().top,this.raf()}raf(){this.inView&&(this.x=l(this.x,this.progress,.1),this.playrate=this.x/this.maxScroll,this.progressNum=this.centerSlideIndex+1,this.progressNumber.innerHTML=`0${this.progressNum}/07`,this.wrap.style[this.transformPrefix]=`translateX(${-this.x}px)`,this.bar.style[this.transformPrefix]=`scaleX(${.18+.82*this.playrate})`,this.speed=Math.min(100,this.oldX-this.x),this.oldX=this.x,this.scale=l(this.scale,this.speed,.1),this.items.forEach((t=>{t.style[this.transformPrefix]=`scale(${1-.002*Math.abs(this.speed)})`,t.querySelector("img").style[this.transformPrefix]=`scaleX(${1+.004*Math.abs(this.speed)})`})))}}}},(function(t){t.h=()=>"6212895e86a69779e1b1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SzZCLEdBQzVDN0IsS0FBSzRCLEtBQU81QixLQUFLNkIsRUFFakI3QixLQUFLNkgsTUFBUXBJLEVBQUtPLEtBQUs2SCxNQUFPN0gsS0FBSzJCLE1BQU8sSUFDMUMzQixLQUFLSyxNQUFNK0IsU0FBU0MsSUFDbEJBLEVBQUV1RixNQUFNNUgsS0FBS3FCLGlCQUFvQixTQUFRLEVBQTJCLEtBQXZCa0UsS0FBS3VDLElBQUk5SCxLQUFLMkIsVUFDM0RVLEVBQUVsQyxjQUFjLE9BQU95SCxNQUFNNUgsS0FBS3FCLGlCQUFvQixVQUNwRCxFQUEyQixLQUF2QmtFLEtBQUt1QyxJQUFJOUgsS0FBSzJCLCtCQ3ZaMUJvRyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9TY3JvbGxUcmlnZ2VyJztcbmltcG9ydCBEZXRlY3Rpb24gZnJvbSAnLi4vY2xhc3Nlcy9kZXRlY3Rpb24nXG5cbmNvbnN0IGxlcnAgPSAoZjAsIGYxLCB0KSA9PiAoMSAtIHQpICogZjAgKyB0ICogZjE7XG5jb25zdCBjbGFtcCA9ICh2YWwsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbCwgbWF4KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdTY3JvbGwge1xuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmouZWwpO1xuICAgIHRoaXMud3JhcCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihvYmoud3JhcCk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChvYmouaXRlbSk7XG4gICAgdGhpcy5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9iai5iYXIpO1xuICAgIHRoaXMubGVmdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2xlZnQnKTtcbiAgICB0aGlzLnJpZ2h0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fcmlnaHQnKTtcbiAgICAvLyB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fc2VydmljZXNfX2dhbGxlcnknKTtcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fc2VydmljZXMnKTtcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fc2VydmljZXNfX3dyYXBwZXInKTtcbiAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19zZXJ2aWNlc19fZ2FsbGVyeScpO1xuICAgIHRoaXMuRHJhZ1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Vyc29yX190ZXh0MScpO1xuICAgIHRoaXMucHJvZ3Jlc3NOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5ob21lX19zZXJ2aWNlc19fbmF2X19wcm9ncmVzc19fcHJvZ3Jlc3NfX251bWJlcidcbiAgICApO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGNvbnNvbGUubG9nKCdzbGlkZXIgY3JlYXRlZCcpO1xuXG4gICAgdGhpcy5pblZpZXcgPSBmYWxzZTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGFjdGl2ZSBzbGlkZVxuICAgIHRoaXMuY2VudGVyU2xpZGUgPSBudWxsXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJyk7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICB0aGlzLnNjcm9sbCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAvLyB0aGlzLm1pblNjcm9sbCA9IDA7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5vbGRYID0gMDtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMucGxheXJhdGUgPSAwO1xuICAgIC8vXG4gICAgdGhpcy5iaW5kaW5ncygpO1xuICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgdGhpcy5hY3RpdmVTbGlkZSgpXG4gICAgdGhpcy5ldmVudHMoKTtcbiAgICB0aGlzLnJhZigpO1xuICB9XG5cbiAgYmluZGluZ3MoKSB7XG4gICAgW1xuICAgICAgJ2V2ZW50cycsXG4gICAgICAnY2FsY3VsYXRlJyxcbiAgICAgICdyYWYnLFxuICAgICAgJ2hhbmRsZVdoZWVsJyxcbiAgICAgICdoYW5kbGVMZWZ0Q2xpY2tzJyxcbiAgICAgICdoYW5kbGVSaWdodENsaWNrcycsXG4gICAgICAnbW92ZScsXG4gICAgICAncmFmJyxcbiAgICAgICdoYW5kbGVUb3VjaFN0YXJ0JyxcbiAgICAgICdoYW5kbGVUb3VjaE1vdmUnLFxuICAgICAgJ2hhbmRsZVRvdWNoRW5kJyxcbiAgICAgICdhY3RpdmVTbGlkZScsXG4gICAgXS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICB0aGlzW2ldID0gdGhpc1tpXS5iaW5kKHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlKCkge1xuICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMud3JhcFdpZHRoID0gdGhpcy5zbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgdGhpcy5JdGVtV2lkdGggPSB0aGlzLndyYXBXaWR0aCAvIHRoaXMuaXRlbXMubGVuZ3RoO1xuXG4gICAgaWYgKERldGVjdGlvbi5pc0Rlc2t0b3AoKSB8fCBEZXRlY3Rpb24uaXNUYWJsZXQoKSkge1xuICAgICAgdGhpcy5taW5TY3JvbGwgPSB0aGlzLndyYXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHRoaXMuSXRlbVdpZHRoO1xuICAgICAgdGhpcy53aW5kb3dDZW50ZXIgPSB0aGlzLndpbmRvd1dpZHRoIC8gMiArIHRoaXMuSXRlbVdpZHRoICogMC4yNTtcbiAgICAgIHRoaXMud2luZG93TGVmdCA9IHRoaXMud2luZG93V2lkdGggLyAyIC0gdGhpcy5JdGVtV2lkdGggKiAwLjc1O1xuICAgIH1cbiAgICBpZiAoRGV0ZWN0aW9uLmlzUGhvbmUoKSl7XG4gICAgICB0aGlzLm1pblNjcm9sbCA9IHRoaXMud3JhcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICB0aGlzLndpbmRvd0NlbnRlciA9IHRoaXMud2luZG93V2lkdGggLyAyICsgdGhpcy5JdGVtV2lkdGggKiAwLjI1O1xuICAgICAgdGhpcy53aW5kb3dMZWZ0ID0gdGhpcy5taW5TY3JvbGwgLSAyMDtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMud2luZG93TGVmdCwgdGhpcy53aW5kb3dDZW50ZXIpXG4gICAgfVxuICAgICAgLy8gdGhpcy53cmFwLnN0eWxlLndpZHRoID0gYCR7dGhpcy53cmFwV2lkdGh9cHhgO1xuICAgICAgdGhpcy5tYXhTY3JvbGwgPSB0aGlzLndyYXBXaWR0aCAtIHRoaXMuZWwuY2xpZW50V2lkdGggLSB0aGlzLm1pblNjcm9sbDtcbiAgICAvLyAtIHRoaXMubWluU2Nyb2xsO1xuICAgIHRoaXMuc2VjdGlvblRvcCA9IHRoaXMuc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIH1cblxuICBhY3RpdmVTbGlkZSAoKSB7XG4gICAgLy8gQ2xpY2tcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goIChpdGVtLCBpbmRleCkgPT4ge1xuXG4gICAgICB0aGlzLml0ZW1Cb3VuZHNMZWZ0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG5cbiAgICAgIC8vIGNvbnN0IGl0ZW1UaXRsZVNwYW5zID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJylcblxuICAgICAgdGhpcy5pc0NlbnRlciA9XG4gICAgICAgIHRoaXMuaXRlbUJvdW5kc0xlZnQgPCB0aGlzLndpbmRvd0NlbnRlciAmJlxuICAgICAgICB0aGlzLml0ZW1Cb3VuZHNMZWZ0ID4gdGhpcy53aW5kb3dMZWZ0O1xuXG4gICAgICBpZiAodGhpcy5pc0NlbnRlcikge1xuICAgICAgICB0aGlzLmNlbnRlclNsaWRlID0gaXRlbVxuICAgICAgICB0aGlzLmNlbnRlclNsaWRlSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5jZW50ZXJTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgIC8vICAgaXRlbVRpdGxlU3BhbnNbMF0uaW5uZXJIVE1MLFxuICAgICAgICAvLyAgIHRoaXMuY2VudGVyU2xpZGUsXG4gICAgICAgIC8vICAgdGhpcy5pdGVtQm91bmRzTGVmdCxcbiAgICAgICAgLy8gICB0aGlzLndpbmRvd0xlZnQsXG4gICAgICAgIC8vICAgdGhpcy53aW5kb3dDZW50ZXJcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIHByZXZpb3VzIGFuZCBhZGQgdG8gY3VycmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfVxuXG4gICAgfSlcbiAgfVxuXG4gIGFjdGl2ZVNsaWRlQ2xpY2sgKCkge1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5yaWdodENsaWNrKSB7XG4gICAgICAgICAgdGhpcy5pdGVtQm91bmRzTGVmdCA9XG4gICAgICAgICAgICBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0aGlzLkl0ZW1XaWR0aDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCBjbGljaycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1Cb3VuZHNMZWZ0ID1cbiAgICAgICAgICAgIGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuSXRlbVdpZHRoO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlZnQgY2xpY2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IGl0ZW1UaXRsZVNwYW5zID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5cbiAgICAgICAgdGhpcy5pc0NlbnRlciA9XG4gICAgICAgICAgdGhpcy5pdGVtQm91bmRzTGVmdCA8IHRoaXMud2luZG93Q2VudGVyICYmXG4gICAgICAgICAgdGhpcy5pdGVtQm91bmRzTGVmdCA+IHRoaXMud2luZG93TGVmdDtcblxuICAgICAgICBpZiAodGhpcy5pc0NlbnRlcikge1xuICAgICAgICAgIHRoaXMuY2VudGVyU2xpZGUgPSBpdGVtO1xuICAgICAgICAgIHRoaXMuY2VudGVyU2xpZGVJbmRleCA9IGluZGV4XG4gICAgICAgICAgdGhpcy5jZW50ZXJTbGlkZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVdoZWVsKGUpIHtcbiAgICBpZiAoIXRoaXMuaW5WaWV3KSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmluVmlldykge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9ncmVzcyArPSBlLmRlbHRhWTtcbiAgfVxuICB0aGlzLm1vdmUoKTtcbn1cblxuaGFuZGxlTGVmdENsaWNrcyhlKSB7XG5cdHRoaXMucmlnaHRDbGljayA9IGZhbHNlXG4gIGNvbnNvbGUubG9nKCdsZWZ0IGNsaWNrJyk7XG4gIHRoaXMucHJvZ3Jlc3MgLT0gdGhpcy5JdGVtV2lkdGg7XG4gIHRoaXMuYWN0aXZlU2xpZGVDbGljaygpO1xuXG4gIC8vIGlmIGF0IHRoZSBzdGFydCBvZiBnYWxsZXJ5IG1vdmUgdG8gZW5kIG9mIHNsaWRlXG4gIGlmICh0aGlzLnByb2dyZXNzIDw9ICh0aGlzLm1pblNjcm9sbCAtMTAwICkpIHtcbiAgICBjb25zb2xlLmxvZygnZ2FsbGVyeSBzdGFydCcsIHRoaXMuaXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7XG4gICAgdGhpcy5zbGlkZUVuZCA9IHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgLT0gKHRoaXMuSXRlbVdpZHRoICk7XG4gICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgIH1cbiAgICAgKVxuXG4gICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuXG4gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLm1heFNjcm9sbDtcbiAgICAgICB0aGlzLnNsaWRlRW5kLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgdGhpcy5jZW50ZXJTbGlkZUluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmlnaHRDbGlja3MoZSkge1xuXHRcdHRoaXMuY2xpY2tlZCA9IHRydWU7XG5cdFx0dGhpcy5yaWdodENsaWNrID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygncmlnaHQgY2xpY2snKTtcbiAgICB0aGlzLnByb2dyZXNzICs9IHRoaXMuSXRlbVdpZHRoO1xuICAgIHRoaXMuYWN0aXZlU2xpZGVDbGljaygpO1xuICAgIC8vIGlmIGF0IHRoZSBlbmQgb2YgZ2FsbGVyeSBtb3ZlIHRvIHN0YXJ0IG9mIHNsaWRlXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gdGhpcy5tYXhTY3JvbGwpIHtcbiAgICAgIHRoaXMuc2xpZGVTdGFydCA9IHRoaXMuaXRlbXNbMF07XG5cbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5tYXhTY3JvbGw7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5taW5TY3JvbGw7XG4gICAgICAgIHRoaXMuc2xpZGVTdGFydC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jZW50ZXJTbGlkZUluZGV4ID0gMFxuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdnYWxsZXJ5IGVuZCcsIHRoaXMuaXRlbXNbMF0pO1xuICB9XG5cbiAgaGFuZGxlVG91Y2hTdGFydChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCF0aGlzLmluVmlldykgcmV0dXJuO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZS5jbGllbnRYIHx8IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICB0aGlzLkRyYWdUZXh0LmNsYXNzTGlzdC5hZGQoJ25vbmUnKVxuICAgIHRoaXMuY2xpY2sgPSBmYWxzZVxuICB9XG5cbiAgaGFuZGxlVG91Y2hNb3ZlKGUpIHtcbiAgICB0aGlzLmNsaWNrID0gZmFsc2VcbiAgICBpZighdGhpcy5pblZpZXcpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcbiAgICAvLyBjb25zdCB4ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFg7XG4gICAgY29uc3QgeCA9IGUuY2xpZW50WCB8fCBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB0aGlzLnByb2dyZXNzICs9ICh0aGlzLnN0YXJ0WCAtIHgpICogMi41O1xuICAgIHRoaXMuc3RhcnRYID0geDtcbiAgICB0aGlzLm1vdmUoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2dyZXNzKTtcbiAgfVxuXG4gIGhhbmRsZVRvdWNoRW5kKCkge1xuICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcbiAgICBpZighdGhpcy5pblZpZXcpIHJldHVybjtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIHRoaXMuRHJhZ1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICB9XG5cblxuICBtb3ZlKCkge1xuICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzID0gY2xhbXAodGhpcy5wcm9ncmVzcywgdGhpcy5taW5TY3JvbGwsIHRoaXMubWF4U2Nyb2xsKTtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUoKTtcblxuXG4gIH1cblxuICBldmVudHMoKSB7XG4gICAgLy8gaWYoIXRoaXMuaW5WaWV3KSByZXR1cm47aWYoIXRoaXMuaW5WaWV3KSByZXR1cm47XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY3VsYXRlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLmhhbmRsZVdoZWVsKTtcbiAgICAvL1xuICAgIHRoaXMucmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVJpZ2h0Q2xpY2tzKTtcbiAgICB0aGlzLmxlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUxlZnRDbGlja3MpO1xuICAgIC8vXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVUb3VjaEVuZCk7XG4gICAgLy9cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVUb3VjaE1vdmUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVUb3VjaEVuZCk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVUb3VjaEVuZCk7XG5cbiAgfVxuXG4gIHNjcm9sbCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLnNsaWRlWSA9IHRoaXMud3JhcFdpZHRoICsgdGhpcy5JdGVtV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6ICcuaG9tZV9fYWJvdXQnLFxuICAgICAgICBzdGFydDogJ2JvdHRvbSAxMCUnLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiAncmVzdGFydCBjb21wbGV0ZSBub25lIHJlc2V0JyxcbiAgICAgICAgLy8gbWFya2VyczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGhpcy50bFxuICAgICAgLnRvKCcuaG9tZV9fYWJvdXRfX3Njcm9sbHRleHQgLndvcmQnLCB7XG4gICAgICAgIHk6ICcxMDAlJyxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgIH0pXG4gICAgICBpZiAoRGV0ZWN0aW9uLmlzRGVza3RvcCgpIHx8IERldGVjdGlvbi5pc1RhYmxldCgpKSB7XG4gICAgICAgIHRoaXMudGwxID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJy5ob21lX19zZXJ2aWNlcycsXG4gICAgICAgICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgLy8gIGVuZDogYCs9JHt0aGlzLndyYXBXaWR0aH0gYm90dG9tYCxcbiAgICAgICAgICAgIGVuZDogYCs9JHt0aGlzLnNsaWRlWX1gLFxuICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3Jlc3RhcnQgY29tcGxldGUgbm9uZSByZXNldCcsXG4gICAgICAgICAgICAvLyAgbWFya2VyczogdHJ1ZSxcbiAgICAgICAgICAgIHBpbjogJy5ob21lX19zZXJ2aWNlcycsXG4gICAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICBzZWxmLnNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW4tdmlldycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZCBub25lJyk7XG4gICAgICAgICAgICAgIHNlbGYuRHJhZ1RleHQuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICAgICAgICAgICAgICBzZWxmLnNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaW4tdmlldycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuRHJhZ1RleHQuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICAgICAgICAgICAgICBzZWxmLnNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaW4tdmlldycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRW50ZXJCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGQgbm9uZScpO1xuICAgICAgICAgICAgICBzZWxmLnNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW4tdmlldycpO1xuICAgICAgICAgICAgICBzZWxmLkRyYWdUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRsMSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6ICcuaG9tZV9fc2VydmljZXMnLFxuICAgICAgICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgICAgIGVuZDogJ2JvdHRvbSB0b3AnLFxuICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3Jlc3RhcnQgY29tcGxldGUgbm9uZSByZXNldCcsXG4gICAgICAgICAgICBtYXJrZXJzOiB7IHN0YXJ0Q29sb3I6ICd3aGl0ZScsIHN0YXJ0IDogJ3NlcnZpY2VzJyB9LFxuICAgICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLnNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaW4tdmlldycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTGVhdmVCYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2luLXZpZXcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gKHNjcm9sbCkge1xuICAgICAgICAgICAgICBzZWxmLnNjcm9sbFNsaWRlciA9IHNjcm9sbC5wcm9ncmVzcyAqIHNlbGYuc2xpZGVZO1xuICAgICAgICAgICAgICBzZWxmLnByb2dyZXNzID0gKHNjcm9sbC5wcm9ncmVzcyAqIHNlbGYuc2xpZGVZKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICBzZWxmLm1vdmUoKTtcbiAgICAgICAgICAgICAgc2Nyb2xsLm1hcmtlckVuZC5pbm5lckhUTUwgPSBgZW5kOiAke3NlbGYucHJvZ3Jlc3N9YDtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIC8vICAgc2VsZi5wcm9ncmVzcyxcbiAgICAgICAgICAgICAgLy8gICBzY3JvbGwucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIC8vICAgc2Nyb2xsLm1hcmtlckVuZC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICB0aGlzLnRsXG4gICAgICAgLmZyb20oJy5ob21lX19zZXJ2aWNlc19fZ2FsbGVyeV9fd3JhcHBlcicsIHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgIH0pXG4gICAgICAgLnRvKCcuaG9tZV9fc2VydmljZXNfX3dyYXBwZXInLCB7XG4gICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgZGVsYXk6IDUsXG4gICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgc2VsZi5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICBzZWxmLkRyYWdUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29wYWNpdHkgMScsIHNlbGYuaW5WaWV3KTtcbiAgICAgICAgIH0sXG4gICAgICAgfSk7XG5cbiAgICAgaWYoIXRoaXMuc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2luLXZpZXcnKSkge1xuICAgICAgdGhpcy5EcmFnVGV4dC5jbGFzc0xpc3QuYWRkKCdub25lJylcbiAgICAgfVxuICB9XG5cbiAgbW92ZVNsaWRlciAoKSB7XG4gICAgdGhpcy5zZWN0aW9uVG9wID0gdGhpcy5zZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2dyZXNzLCB0aGlzLm1heFNjcm9sbCwgdGhpcy5zZWN0aW9uVG9wKTtcbiAgICB0aGlzLnJhZigpXG5cbiAgfVxuXG4gIHJhZigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmluVmlldyk7XG4gICAgaWYoIXRoaXMuaW5WaWV3KSByZXR1cm5cbiAgICB0aGlzLnggPSBsZXJwKHRoaXMueCwgdGhpcy5wcm9ncmVzcywgMC4xKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLngsIHRoaXMucHJvZ3Jlc3MpXG4gICAgdGhpcy5wbGF5cmF0ZSA9IHRoaXMueCAvIHRoaXMubWF4U2Nyb2xsO1xuICAgIC8vIHRoaXMucHJvZ3Jlc3NOdW0gPSBNYXRoLnJvdW5kKCgwLjE4ICsgdGhpcy5wbGF5cmF0ZSAqIDAuODIpICogNyk7XG4gICAgdGhpcy5wcm9ncmVzc051bSA9IHRoaXMuY2VudGVyU2xpZGVJbmRleCArIDE7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jZW50ZXJTbGlkZUluZGV4ICsgMSk7XG4gICAgLy9cbiAgICB0aGlzLnByb2dyZXNzTnVtYmVyLmlubmVySFRNTCA9IGAwJHt0aGlzLnByb2dyZXNzTnVtfS8wN2BcbiAgICAvL1xuICAgIHRoaXMud3JhcC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgkey10aGlzLnh9cHgpYDtcbiAgICB0aGlzLmJhci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgc2NhbGVYKCR7MC4xOCArIHRoaXMucGxheXJhdGUgKiAwLjgyfSlgO1xuICAgIC8vXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgubWluKDEwMCwgdGhpcy5vbGRYIC0gdGhpcy54KTtcbiAgICB0aGlzLm9sZFggPSB0aGlzLng7XG4gICAgLy9cbiAgICB0aGlzLnNjYWxlID0gbGVycCh0aGlzLnNjYWxlLCB0aGlzLnNwZWVkLCAwLjEpO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgaS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgc2NhbGUoJHsxIC0gTWF0aC5hYnModGhpcy5zcGVlZCkgKiAwLjAwMn0pYDtcbiAgICAgIGkucXVlcnlTZWxlY3RvcignaW1nJykuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWCgke1xuICAgICAgICAxICsgTWF0aC5hYnModGhpcy5zcGVlZCkgKiAwLjAwNFxuICAgICAgfSlgO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogSW5zdGFuY2VzXG4gKi9cblxuXG5cblxuXG4vKipcbiAqIE9uZSByYWYgdG8gcnVsZSBlbSBhbGxcbiAqL1xuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjIxMjg5NWU4NmE2OTc3OWUxYjFcIikiXSwibmFtZXMiOlsibGVycCIsImYwIiwiZjEiLCJ0IiwiRHJhZ1Njcm9sbCIsImNvbnN0cnVjdG9yIiwib2JqIiwidGhpcyIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcCIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW0iLCJiYXIiLCJsZWZ0QnRuIiwicmlnaHRCdG4iLCJzZWN0aW9uIiwid3JhcHBlciIsInNsaWRlciIsIkRyYWdUZXh0IiwicHJvZ3Jlc3NOdW1iZXIiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImluVmlldyIsImNlbnRlclNsaWRlIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJzY3JvbGwiLCJwcm9ncmVzcyIsInNwZWVkIiwib2xkWCIsIngiLCJwbGF5cmF0ZSIsImJpbmRpbmdzIiwiY2FsY3VsYXRlIiwiYWN0aXZlU2xpZGUiLCJldmVudHMiLCJyYWYiLCJmb3JFYWNoIiwiaSIsImJpbmQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3cmFwV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIkl0ZW1XaWR0aCIsImxlbmd0aCIsIkRldGVjdGlvbiIsIm1pblNjcm9sbCIsImxlZnQiLCJ3aW5kb3dDZW50ZXIiLCJ3aW5kb3dMZWZ0IiwibWF4U2Nyb2xsIiwiY2xpZW50V2lkdGgiLCJzZWN0aW9uVG9wIiwidG9wIiwiaW5kZXgiLCJpdGVtQm91bmRzTGVmdCIsImlzQ2VudGVyIiwiY2VudGVyU2xpZGVJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFjdGl2ZVNsaWRlQ2xpY2siLCJyaWdodENsaWNrIiwiaGFuZGxlV2hlZWwiLCJlIiwiZGVsdGFZIiwibW92ZSIsImhhbmRsZUxlZnRDbGlja3MiLCJzbGlkZUVuZCIsInNldFRpbWVvdXQiLCJoYW5kbGVSaWdodENsaWNrcyIsImNsaWNrZWQiLCJzbGlkZVN0YXJ0IiwiaGFuZGxlVG91Y2hTdGFydCIsInByZXZlbnREZWZhdWx0IiwiZHJhZ2dpbmciLCJzdGFydFgiLCJjbGllbnRYIiwidG91Y2hlcyIsImNsaWNrIiwiaGFuZGxlVG91Y2hNb3ZlIiwiaGFuZGxlVG91Y2hFbmQiLCJ2YWwiLCJtaW4iLCJtYXgiLCJNYXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJzZWxmIiwic2xpZGVZIiwidGwiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwidG9nZ2xlQWN0aW9ucyIsInRvIiwieSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsInRsMSIsImVuZCIsInBpbiIsInNjcnViIiwib25FbnRlciIsIm9uTGVhdmUiLCJvbkxlYXZlQmFjayIsIm9uRW50ZXJCYWNrIiwibWFya2VycyIsInN0YXJ0Q29sb3IiLCJvblVwZGF0ZSIsInNjcm9sbFNsaWRlciIsInRvRml4ZWQiLCJtYXJrZXJFbmQiLCJpbm5lckhUTUwiLCJmcm9tIiwiZGlzcGxheSIsImRlbGF5IiwiZWFzZSIsIm9uQ29tcGxldGUiLCJjb250YWlucyIsIm1vdmVTbGlkZXIiLCJwcm9ncmVzc051bSIsInN0eWxlIiwic2NhbGUiLCJhYnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=