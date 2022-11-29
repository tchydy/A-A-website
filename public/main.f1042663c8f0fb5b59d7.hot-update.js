/*! For license information please see main.f1042663c8f0fb5b59d7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/slider.js":(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var s=i("./node_modules/prefix/index.js"),n=i.n(s),h=i("./node_modules/gsap/index.js"),o=i("./node_modules/gsap/ScrollTrigger.js"),r=i("./app/classes/detection.js");const l=(t,e,i)=>(1-i)*t+i*e;class c{constructor(t){this.el=document.querySelector(t.el),this.wrap=this.el.querySelector(t.wrap),this.items=this.el.querySelectorAll(t.item),this.bar=document.querySelector(t.bar),this.leftBtn=document.querySelector(".btn__left"),this.rightBtn=document.querySelector(".btn__right"),this.section=document.querySelector(".home__services"),this.wrapper=document.querySelector(".home__services__wrapper"),this.slider=document.querySelector(".home__services__gallery"),this.DragText=document.querySelector(".cursor__text1"),this.progressNumber=document.querySelector(".home__services__nav__progress__progress__number"),this.init(),console.log("slider created"),this.inView=!1,this.centerSlide=null,this.transformPrefix=n()("transform"),h.default.registerPlugin(o.ScrollTrigger),this.scroll()}init(){this.progress=0,this.speed=0,this.oldX=0,this.x=0,this.playrate=0,this.bindings(),this.calculate(),this.activeSlide(),this.events(),this.raf()}bindings(){["events","calculate","raf","handleWheel","handleLeftClicks","handleRightClicks","move","raf","handleTouchStart","handleTouchMove","handleTouchEnd","activeSlide"].forEach((t=>{this[t]=this[t].bind(this)}))}calculate(){this.windowWidth=window.innerWidth,this.wrapWidth=this.slider.getBoundingClientRect().width,this.slideY=this.wrapWidth+this.ItemWidth-window.innerWidth,this.ItemWidth=this.wrapWidth/this.items.length,(r.default.isDesktop()||r.default.isTablet())&&(this.minScroll=this.wrap.getBoundingClientRect().left-this.ItemWidth,this.windowCenter=this.windowWidth/2+.25*this.ItemWidth,this.windowLeft=this.windowWidth/2-.75*this.ItemWidth),r.default.isPhone()&&(this.minScroll=this.wrap.getBoundingClientRect().left,this.windowCenter=this.windowWidth/2+.25*this.ItemWidth,this.windowLeft=this.minScroll-20,console.log(this.windowLeft,this.windowCenter)),this.maxScroll=this.wrapWidth-this.el.clientWidth-this.minScroll,this.sectionTop=this.section.getBoundingClientRect().top}activeSlide(){this.items.forEach(((t,e)=>{this.itemBoundsLeft=t.getBoundingClientRect().left,this.isCenter=this.itemBoundsLeft<this.windowCenter&&this.itemBoundsLeft>this.windowLeft,this.isCenter?(this.centerSlide=t,this.centerSlideIndex=e,this.centerSlide.classList.add("active")):t.classList.remove("active")}))}activeSlideClick(){this.items.forEach(((t,e)=>{this.rightClick?(this.itemBoundsLeft=t.getBoundingClientRect().left-this.ItemWidth,console.log("right click")):(this.itemBoundsLeft=t.getBoundingClientRect().left+this.ItemWidth,console.log("left click")),this.isCenter=this.itemBoundsLeft<this.windowCenter&&this.itemBoundsLeft>this.windowLeft,this.isCenter?(this.centerSlide=t,this.centerSlideIndex=e,this.centerSlide.classList.add("active")):t.classList.remove("active")}))}handleWheel(t){this.inView&&(this.inView?this.progress+=t.deltaY:this.progress=0,this.move())}handleLeftClicks(t){this.rightClick=!1,console.log("left click"),this.progress-=this.ItemWidth,this.activeSlideClick(),this.progress<=this.minScroll-100&&(console.log("gallery start",this.items[0].getBoundingClientRect().left),this.slideEnd=this.items[this.items.length-1],this.progress-=this.ItemWidth,this.items.forEach(((t,e)=>{t.classList.remove("active")})),this.progress=0,setTimeout((()=>{this.progress=this.maxScroll,this.slideEnd.classList.add("active"),this.centerSlideIndex=this.items.length-1}),1e3))}handleRightClicks(t){this.clicked=!0,this.rightClick=!0,console.log("right click"),this.progress+=this.ItemWidth,this.activeSlideClick(),this.progress>=this.maxScroll&&(this.slideStart=this.items[0],this.items.forEach(((t,e)=>{t.classList.remove("active")})),this.progress=this.maxScroll,setTimeout((()=>{this.progress=this.minScroll,this.slideStart.classList.add("active"),this.centerSlideIndex=0}),1e3))}handleTouchStart(t){t.preventDefault(),this.inView&&(this.dragging=!0,this.startX=t.clientX||t.touches[0].clientX,this.el.classList.add("dragging"),this.DragText.classList.add("none"),this.click=!1)}handleTouchMove(t){if(this.click=!1,!this.inView)return;if(!this.dragging)return!1;const e=t.clientX||t.touches[0].clientX;this.progress+=2.5*(this.startX-e),this.startX=e,this.move()}handleTouchEnd(){this.click=!1,this.inView&&(this.dragging=!1,this.el.classList.remove("dragging"),this.DragText.classList.remove("none"))}move(){var t,e,i;this.click=!1,this.progress=(t=this.progress,e=this.minScroll,i=this.maxScroll,Math.max(e,Math.min(t,i))),this.activeSlide()}events(){window.addEventListener("resize",this.calculate),window.addEventListener("wheel",this.handleWheel),this.rightBtn.addEventListener("click",this.handleRightClicks),this.leftBtn.addEventListener("click",this.handleLeftClicks),this.el.addEventListener("touchstart",this.handleTouchStart),this.el.addEventListener("touchmove",this.handleTouchMove),this.el.addEventListener("touchend",this.handleTouchEnd),window.addEventListener("mousedown",this.handleTouchStart),window.addEventListener("mousemove",this.handleTouchMove),window.addEventListener("mouseup",this.handleTouchEnd),document.body.addEventListener("mouseleave",this.handleTouchEnd)}scroll(){const t=this;this.tl=h.default.timeline({scrollTrigger:{trigger:".home__about",start:"bottom 10%",toggleActions:"restart complete none reset"}}),this.tl.to(".home__about__scrolltext .word",{y:"100%",opacity:0,duration:.5}),r.default.isDesktop()||r.default.isTablet()?this.tl1=h.default.timeline({scrollTrigger:{trigger:".home__services",start:"top top",end:`+=${this.slideY}`,toggleActions:"restart complete none reset",pin:".home__services",scrub:1,onEnter:function(){t.inView=!0,t.section.classList.add("in-view")},onLeave:function(){t.DragText.classList.add("none"),t.section.classList.remove("in-view")},onLeaveBack:function(){t.DragText.classList.add("none"),t.section.classList.remove("in-view")},onEnterBack:function(){t.section.classList.add("in-view"),t.DragText.classList.remove("none")}}}):this.tl1=h.default.timeline({scrollTrigger:{trigger:".home__services",start:"top top",end:"bottom top",toggleActions:"restart complete none reset",markers:{startColor:"white",start:"services"},pin:!0,onEnter:function(){t.inView=!0,t.section.classList.add("in-view")},onLeave:function(){t.section.classList.remove("in-view")},onLeaveBack:function(){t.section.classList.remove("in-view")},onEnterBack:function(){t.section.classList.add("in-view")},onUpdate:function(e){t.scrollSlider=e.progress*t.slideY,t.progress=+t.scrollSlider,t.move(),e.markerEnd.textContent=`end: ${t.progress.toFixed(2)}`,console.log()}}}),this.tl.from(".home__services__gallery__wrapper",{display:"none"}).to(".home__services__wrapper",{opacity:1,delay:5,duration:.5,ease:"expo.out",onComplete:function(){t.inView=!0,t.DragText.classList.remove("none")}}),this.section.classList.contains("in-view")||this.DragText.classList.add("none")}moveSlider(){this.sectionTop=this.section.getBoundingClientRect().top,this.raf()}raf(){this.inView&&(this.x=l(this.x,this.progress,.1),this.playrate=this.x/this.maxScroll,this.progressNum=this.centerSlideIndex+1,this.progressNumber.innerHTML=`0${this.progressNum}/07`,this.wrap.style[this.transformPrefix]=`translateX(${-this.x}px)`,this.bar.style[this.transformPrefix]=`scaleX(${.18+.82*this.playrate})`,this.speed=Math.min(100,this.oldX-this.x),this.oldX=this.x,this.scale=l(this.scale,this.speed,.1),this.items.forEach((t=>{t.style[this.transformPrefix]=`scale(${1-.002*Math.abs(this.speed)})`,t.querySelector("img").style[this.transformPrefix]=`scaleX(${1+.004*Math.abs(this.speed)})`})))}}}},(function(t){t.h=()=>"e2839ac0accc0705c12f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMTA0MjY2M2M4ZjBmYjViNTlkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MlJBS0EsTUFBTUEsRUFBTyxDQUFDQyxFQUFJQyxFQUFJQyxLQUFPLEVBQUlBLEdBQUtGLEVBQUtFLEVBQUlELEVBR2hDLE1BQU1FLEVBQ25CQyxZQUFZQyxHQUNWQyxLQUFLQyxHQUFLQyxTQUFTQyxjQUFjSixFQUFJRSxJQUNyQ0QsS0FBS0ksS0FBT0osS0FBS0MsR0FBR0UsY0FBY0osRUFBSUssTUFDdENKLEtBQUtLLE1BQVFMLEtBQUtDLEdBQUdLLGlCQUFpQlAsRUFBSVEsTUFDMUNQLEtBQUtRLElBQU1OLFNBQVNDLGNBQWNKLEVBQUlTLEtBQ3RDUixLQUFLUyxRQUFVUCxTQUFTQyxjQUFjLGNBQ3RDSCxLQUFLVSxTQUFXUixTQUFTQyxjQUFjLGVBRXZDSCxLQUFLVyxRQUFVVCxTQUFTQyxjQUFjLG1CQUN0Q0gsS0FBS1ksUUFBVVYsU0FBU0MsY0FBYyw0QkFDdENILEtBQUthLE9BQVNYLFNBQVNDLGNBQWMsNEJBQ3JDSCxLQUFLYyxTQUFXWixTQUFTQyxjQUFjLGtCQUN2Q0gsS0FBS2UsZUFBaUJiLFNBQVNDLGNBQzdCLG9EQUVGSCxLQUFLZ0IsT0FDTEMsUUFBUUMsSUFBSSxrQkFFWmxCLEtBQUttQixRQUFTLEVBRWRuQixLQUFLb0IsWUFBYyxLQUVuQnBCLEtBQUtxQixnQkFBa0JDLEdBQUFBLENBQU8sYUFDOUJDLEVBQUFBLFFBQUFBLGVBQW9CQyxFQUFBQSxlQUNwQnhCLEtBQUt5QixTQUdQVCxPQUNFaEIsS0FBSzBCLFNBQVcsRUFFaEIxQixLQUFLMkIsTUFBUSxFQUNiM0IsS0FBSzRCLEtBQU8sRUFDWjVCLEtBQUs2QixFQUFJLEVBQ1Q3QixLQUFLOEIsU0FBVyxFQUVoQjlCLEtBQUsrQixXQUNML0IsS0FBS2dDLFlBQ0xoQyxLQUFLaUMsY0FDTGpDLEtBQUtrQyxTQUNMbEMsS0FBS21DLE1BR1BKLFdBQ0UsQ0FDRSxTQUNBLFlBQ0EsTUFDQSxjQUNBLG1CQUNBLG9CQUNBLE9BQ0EsTUFDQSxtQkFDQSxrQkFDQSxpQkFDQSxlQUNBSyxTQUFTQyxJQUNUckMsS0FBS3FDLEdBQUtyQyxLQUFLcUMsR0FBR0MsS0FBS3RDLFNBSTNCZ0MsWUFDRWhDLEtBQUt1QyxZQUFjQyxPQUFPQyxXQUMxQnpDLEtBQUswQyxVQUFZMUMsS0FBS2EsT0FBTzhCLHdCQUF3QkMsTUFDckQ1QyxLQUFLNkMsT0FBUzdDLEtBQUswQyxVQUFZMUMsS0FBSzhDLFVBQVlOLE9BQU9DLFdBQ3ZEekMsS0FBSzhDLFVBQVk5QyxLQUFLMEMsVUFBWTFDLEtBQUtLLE1BQU0wQyxRQUN6Q0MsRUFBQUEsUUFBQUEsYUFBeUJBLEVBQUFBLFFBQUFBLGNBQzNCaEQsS0FBS2lELFVBQVlqRCxLQUFLSSxLQUFLdUMsd0JBQXdCTyxLQUFPbEQsS0FBSzhDLFVBQy9EOUMsS0FBS21ELGFBQWVuRCxLQUFLdUMsWUFBYyxFQUFxQixJQUFqQnZDLEtBQUs4QyxVQUNoRDlDLEtBQUtvRCxXQUFhcEQsS0FBS3VDLFlBQWMsRUFBcUIsSUFBakJ2QyxLQUFLOEMsV0FFNUNFLEVBQUFBLFFBQUFBLFlBQ0ZoRCxLQUFLaUQsVUFBWWpELEtBQUtJLEtBQUt1Qyx3QkFBd0JPLEtBQ25EbEQsS0FBS21ELGFBQWVuRCxLQUFLdUMsWUFBYyxFQUFxQixJQUFqQnZDLEtBQUs4QyxVQUNoRDlDLEtBQUtvRCxXQUFhcEQsS0FBS2lELFVBQVksR0FDdENoQyxRQUFRQyxJQUFJbEIsS0FBS29ELFdBQVlwRCxLQUFLbUQsZUFHL0JuRCxLQUFLcUQsVUFBWXJELEtBQUswQyxVQUFZMUMsS0FBS0MsR0FBR3FELFlBQWN0RCxLQUFLaUQsVUFFL0RqRCxLQUFLdUQsV0FBYXZELEtBQUtXLFFBQVFnQyx3QkFBd0JhLElBR3pEdkIsY0FFRWpDLEtBQUtLLE1BQU0rQixTQUFTLENBQUM3QixFQUFNa0QsS0FFekJ6RCxLQUFLMEQsZUFBaUJuRCxFQUFLb0Msd0JBQXdCTyxLQUluRGxELEtBQUsyRCxTQUNIM0QsS0FBSzBELGVBQWlCMUQsS0FBS21ELGNBQzNCbkQsS0FBSzBELGVBQWlCMUQsS0FBS29ELFdBRXpCcEQsS0FBSzJELFVBQ1AzRCxLQUFLb0IsWUFBY2IsRUFDbkJQLEtBQUs0RCxpQkFBbUJILEVBQ3hCekQsS0FBS29CLFlBQVl5QyxVQUFVQyxJQUFJLFdBVS9CdkQsRUFBS3NELFVBQVVFLE9BQU8sYUFNNUJDLG1CQUNJaEUsS0FBS0ssTUFBTStCLFNBQVEsQ0FBQzdCLEVBQU1rRCxLQUNwQnpELEtBQUtpRSxZQUNQakUsS0FBSzBELGVBQ0huRCxFQUFLb0Msd0JBQXdCTyxLQUFPbEQsS0FBSzhDLFVBQ3pDN0IsUUFBUUMsSUFBSSxpQkFFWmxCLEtBQUswRCxlQUNMbkQsRUFBS29DLHdCQUF3Qk8sS0FBT2xELEtBQUs4QyxVQUN6QzdCLFFBQVFDLElBQUksZUFLaEJsQixLQUFLMkQsU0FDSDNELEtBQUswRCxlQUFpQjFELEtBQUttRCxjQUMzQm5ELEtBQUswRCxlQUFpQjFELEtBQUtvRCxXQUV6QnBELEtBQUsyRCxVQUNQM0QsS0FBS29CLFlBQWNiLEVBQ25CUCxLQUFLNEQsaUJBQW1CSCxFQUN4QnpELEtBQUtvQixZQUFZeUMsVUFBVUMsSUFBSSxXQUUvQnZELEVBQUtzRCxVQUFVRSxPQUFPLGFBSzlCRyxZQUFZQyxHQUNMbkUsS0FBS21CLFNBQ0xuQixLQUFLbUIsT0FHUm5CLEtBQUswQixVQUFZeUMsRUFBRUMsT0FGbkJwRSxLQUFLMEIsU0FBVyxFQUlwQjFCLEtBQUtxRSxRQUdQQyxpQkFBaUJILEdBQ2hCbkUsS0FBS2lFLFlBQWEsRUFDakJoRCxRQUFRQyxJQUFJLGNBQ1psQixLQUFLMEIsVUFBWTFCLEtBQUs4QyxVQUN0QjlDLEtBQUtnRSxtQkFHRGhFLEtBQUswQixVQUFhMUIsS0FBS2lELFVBQVcsTUFDcENoQyxRQUFRQyxJQUFJLGdCQUFpQmxCLEtBQUtLLE1BQU0sR0FBR3NDLHdCQUF3Qk8sTUFDbkVsRCxLQUFLdUUsU0FBV3ZFLEtBQUtLLE1BQU1MLEtBQUtLLE1BQU0wQyxPQUFTLEdBRS9DL0MsS0FBSzBCLFVBQWExQixLQUFLOEMsVUFFckI5QyxLQUFLSyxNQUFNK0IsU0FBUyxDQUFDN0IsRUFBTWtELEtBQzNCbEQsRUFBS3NELFVBQVVFLE9BQU8sYUFJdkIvRCxLQUFLMEIsU0FBVyxFQUVoQjhDLFlBQVcsS0FDVHhFLEtBQUswQixTQUFXMUIsS0FBS3FELFVBQ3JCckQsS0FBS3VFLFNBQVNWLFVBQVVDLElBQUksVUFDNUI5RCxLQUFLNEQsaUJBQW1CNUQsS0FBS0ssTUFBTTBDLE9BQVMsSUFDMUMsTUFJUDBCLGtCQUFrQk4sR0FDbEJuRSxLQUFLMEUsU0FBVSxFQUNmMUUsS0FBS2lFLFlBQWEsRUFDaEJoRCxRQUFRQyxJQUFJLGVBQ1psQixLQUFLMEIsVUFBWTFCLEtBQUs4QyxVQUN0QjlDLEtBQUtnRSxtQkFFRGhFLEtBQUswQixVQUFZMUIsS0FBS3FELFlBQ3hCckQsS0FBSzJFLFdBQWEzRSxLQUFLSyxNQUFNLEdBRzdCTCxLQUFLSyxNQUFNK0IsU0FBUSxDQUFDN0IsRUFBTWtELEtBQ3hCbEQsRUFBS3NELFVBQVVFLE9BQU8sYUFHeEIvRCxLQUFLMEIsU0FBVzFCLEtBQUtxRCxVQUVyQm1CLFlBQVcsS0FDVHhFLEtBQUswQixTQUFXMUIsS0FBS2lELFVBQ3JCakQsS0FBSzJFLFdBQVdkLFVBQVVDLElBQUksVUFDOUI5RCxLQUFLNEQsaUJBQW1CLElBQ3ZCLE1BS1BnQixpQkFBaUJULEdBQ2ZBLEVBQUVVLGlCQUNFN0UsS0FBS21CLFNBQ1RuQixLQUFLOEUsVUFBVyxFQUNoQjlFLEtBQUsrRSxPQUFTWixFQUFFYSxTQUFXYixFQUFFYyxRQUFRLEdBQUdELFFBQ3hDaEYsS0FBS0MsR0FBRzRELFVBQVVDLElBQUksWUFDdEI5RCxLQUFLYyxTQUFTK0MsVUFBVUMsSUFBSSxRQUM1QjlELEtBQUtrRixPQUFRLEdBR2ZDLGdCQUFnQmhCLEdBRWQsR0FEQW5FLEtBQUtrRixPQUFRLEdBQ1RsRixLQUFLbUIsT0FBUSxPQUNqQixJQUFLbkIsS0FBSzhFLFNBQVUsT0FBTyxFQUUzQixNQUFNakQsRUFBSXNDLEVBQUVhLFNBQVdiLEVBQUVjLFFBQVEsR0FBR0QsUUFDcENoRixLQUFLMEIsVUFBZ0MsS0FBbkIxQixLQUFLK0UsT0FBU2xELEdBQ2hDN0IsS0FBSytFLE9BQVNsRCxFQUNkN0IsS0FBS3FFLE9BSVBlLGlCQUNFcEYsS0FBS2tGLE9BQVEsRUFDVGxGLEtBQUttQixTQUNUbkIsS0FBSzhFLFVBQVcsRUFDaEI5RSxLQUFLQyxHQUFHNEQsVUFBVUUsT0FBTyxZQUN6Qi9ELEtBQUtjLFNBQVMrQyxVQUFVRSxPQUFPLFNBSWpDTSxPQWhQWSxJQUFDZ0IsRUFBS0MsRUFBS0MsRUFpUHJCdkYsS0FBS2tGLE9BQVEsRUFDYmxGLEtBQUswQixVQWxQTTJELEVBa1BXckYsS0FBSzBCLFNBbFBYNEQsRUFrUHFCdEYsS0FBS2lELFVBbFByQnNDLEVBa1BnQ3ZGLEtBQUtxRCxVQWxQN0JtQyxLQUFLRCxJQUFJRCxFQUFLRSxLQUFLRixJQUFJRCxFQUFLRSxLQW1QdkR2RixLQUFLaUMsY0FLVEMsU0FFRU0sT0FBT2lELGlCQUFpQixTQUFVekYsS0FBS2dDLFdBQ3ZDUSxPQUFPaUQsaUJBQWlCLFFBQVN6RixLQUFLa0UsYUFFdENsRSxLQUFLVSxTQUFTK0UsaUJBQWlCLFFBQVN6RixLQUFLeUUsbUJBQzdDekUsS0FBS1MsUUFBUWdGLGlCQUFpQixRQUFTekYsS0FBS3NFLGtCQUU1Q3RFLEtBQUtDLEdBQUd3RixpQkFBaUIsYUFBY3pGLEtBQUs0RSxrQkFDNUM1RSxLQUFLQyxHQUFHd0YsaUJBQWlCLFlBQWF6RixLQUFLbUYsaUJBQzNDbkYsS0FBS0MsR0FBR3dGLGlCQUFpQixXQUFZekYsS0FBS29GLGdCQUUxQzVDLE9BQU9pRCxpQkFBaUIsWUFBYXpGLEtBQUs0RSxrQkFDMUNwQyxPQUFPaUQsaUJBQWlCLFlBQWF6RixLQUFLbUYsaUJBQzFDM0MsT0FBT2lELGlCQUFpQixVQUFXekYsS0FBS29GLGdCQUN4Q2xGLFNBQVN3RixLQUFLRCxpQkFBaUIsYUFBY3pGLEtBQUtvRixnQkFJcEQzRCxTQUNFLE1BQU1rRSxFQUFPM0YsS0FDYkEsS0FBSzRGLEdBQUtyRSxFQUFBQSxRQUFBQSxTQUFjLENBQ3RCc0UsY0FBZSxDQUNiQyxRQUFTLGVBQ1RDLE1BQU8sYUFDUEMsY0FBZSxpQ0FJbkJoRyxLQUFLNEYsR0FDRkssR0FBRyxpQ0FBa0MsQ0FDcENDLEVBQUcsT0FDSEMsUUFBUyxFQUNUQyxTQUFVLEtBRVJwRCxFQUFBQSxRQUFBQSxhQUF5QkEsRUFBQUEsUUFBQUEsV0FDM0JoRCxLQUFLcUcsSUFBTTlFLEVBQUFBLFFBQUFBLFNBQWMsQ0FDdkJzRSxjQUFlLENBQ2JDLFFBQVMsa0JBQ1RDLE1BQU8sVUFFUE8sSUFBTSxLQUFJdEcsS0FBSzZDLFNBQ2ZtRCxjQUFlLDhCQUVmTyxJQUFLLGtCQUNMQyxNQUFPLEVBQ1BDLFFBQVMsV0FDUGQsRUFBS3hFLFFBQVMsRUFDZHdFLEVBQUtoRixRQUFRa0QsVUFBVUMsSUFBSSxZQUU3QjRDLFFBQVMsV0FFUGYsRUFBSzdFLFNBQVMrQyxVQUFVQyxJQUFJLFFBQzVCNkIsRUFBS2hGLFFBQVFrRCxVQUFVRSxPQUFPLFlBRWhDNEMsWUFBYSxXQUNYaEIsRUFBSzdFLFNBQVMrQyxVQUFVQyxJQUFJLFFBQzVCNkIsRUFBS2hGLFFBQVFrRCxVQUFVRSxPQUFPLFlBRWhDNkMsWUFBYSxXQUVYakIsRUFBS2hGLFFBQVFrRCxVQUFVQyxJQUFJLFdBQzNCNkIsRUFBSzdFLFNBQVMrQyxVQUFVRSxPQUFPLFlBS3JDL0QsS0FBS3FHLElBQU05RSxFQUFBQSxRQUFBQSxTQUFjLENBQ3ZCc0UsY0FBZSxDQUNiQyxRQUFTLGtCQUNUQyxNQUFPLFVBQ1BPLElBQUssYUFDTE4sY0FBZSw4QkFDZmEsUUFBUyxDQUFFQyxXQUFZLFFBQVNmLE1BQVEsWUFDeENRLEtBQUssRUFDTEUsUUFBUyxXQUNQZCxFQUFLeEUsUUFBUyxFQUNkd0UsRUFBS2hGLFFBQVFrRCxVQUFVQyxJQUFJLFlBRTdCNEMsUUFBUyxXQUNQZixFQUFLaEYsUUFBUWtELFVBQVVFLE9BQU8sWUFFaEM0QyxZQUFhLFdBQ1hoQixFQUFLaEYsUUFBUWtELFVBQVVFLE9BQU8sWUFFaEM2QyxZQUFhLFdBQ1hqQixFQUFLaEYsUUFBUWtELFVBQVVDLElBQUksWUFFN0JpRCxTQUFVLFNBQVV0RixHQUNsQmtFLEVBQUtxQixhQUFldkYsRUFBT0MsU0FBV2lFLEVBQUs5QyxPQUMzQzhDLEVBQUtqRSxVQUFZaUUsRUFBS3FCLGFBQ3RCckIsRUFBS3RCLE9BQ0w1QyxFQUFPd0YsVUFBVUMsWUFBZSxRQUFPdkIsRUFBS2pFLFNBQVN5RixRQUFRLEtBQzdEbEcsUUFBUUMsVUFPakJsQixLQUFLNEYsR0FDRndCLEtBQUssb0NBQXFDLENBQzFDQyxRQUFTLFNBRVRwQixHQUFHLDJCQUE0QixDQUM5QkUsUUFBUyxFQUNUbUIsTUFBTyxFQUNQbEIsU0FBVSxHQUNWbUIsS0FBTSxXQUNOQyxXQUFZLFdBQ1Y3QixFQUFLeEUsUUFBUyxFQUNkd0UsRUFBSzdFLFNBQVMrQyxVQUFVRSxPQUFPLFdBS2pDL0QsS0FBS1csUUFBUWtELFVBQVU0RCxTQUFTLFlBQ25DekgsS0FBS2MsU0FBUytDLFVBQVVDLElBQUksUUFJaEM0RCxhQUNFMUgsS0FBS3VELFdBQWF2RCxLQUFLVyxRQUFRZ0Msd0JBQXdCYSxJQUV2RHhELEtBQUttQyxNQUlQQSxNQUVNbkMsS0FBS21CLFNBQ1RuQixLQUFLNkIsRUFBSXBDLEVBQUtPLEtBQUs2QixFQUFHN0IsS0FBSzBCLFNBQVUsSUFFckMxQixLQUFLOEIsU0FBVzlCLEtBQUs2QixFQUFJN0IsS0FBS3FELFVBRTlCckQsS0FBSzJILFlBQWMzSCxLQUFLNEQsaUJBQW1CLEVBRzNDNUQsS0FBS2UsZUFBZTZHLFVBQWEsSUFBRzVILEtBQUsySCxpQkFFekMzSCxLQUFLSSxLQUFLeUgsTUFBTTdILEtBQUtxQixpQkFBb0IsZUFBY3JCLEtBQUs2QixPQUM1RDdCLEtBQUtRLElBQUlxSCxNQUFNN0gsS0FBS3FCLGlCQUFvQixVQUFTLElBQXVCLElBQWhCckIsS0FBSzhCLFlBRTdEOUIsS0FBSzJCLE1BQVE2RCxLQUFLRixJQUFJLElBQUt0RixLQUFLNEIsS0FBTzVCLEtBQUs2QixHQUM1QzdCLEtBQUs0QixLQUFPNUIsS0FBSzZCLEVBRWpCN0IsS0FBSzhILE1BQVFySSxFQUFLTyxLQUFLOEgsTUFBTzlILEtBQUsyQixNQUFPLElBQzFDM0IsS0FBS0ssTUFBTStCLFNBQVNDLElBQ2xCQSxFQUFFd0YsTUFBTTdILEtBQUtxQixpQkFBb0IsU0FBUSxFQUEyQixLQUF2Qm1FLEtBQUt1QyxJQUFJL0gsS0FBSzJCLFVBQzNEVSxFQUFFbEMsY0FBYyxPQUFPMEgsTUFBTTdILEtBQUtxQixpQkFBb0IsVUFDcEQsRUFBMkIsS0FBdkJtRSxLQUFLdUMsSUFBSS9ILEtBQUsyQiwrQkNwWjFCcUcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvU2Nyb2xsVHJpZ2dlcic7XG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gJy4uL2NsYXNzZXMvZGV0ZWN0aW9uJ1xuXG5jb25zdCBsZXJwID0gKGYwLCBmMSwgdCkgPT4gKDEgLSB0KSAqIGYwICsgdCAqIGYxO1xuY29uc3QgY2xhbXAgPSAodmFsLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWwsIG1heCkpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnU2Nyb2xsIHtcbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqLmVsKTtcbiAgICB0aGlzLndyYXAgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3Iob2JqLndyYXApO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwob2JqLml0ZW0pO1xuICAgIHRoaXMuYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmouYmFyKTtcbiAgICB0aGlzLmxlZnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19sZWZ0Jyk7XG4gICAgdGhpcy5yaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX3JpZ2h0Jyk7XG4gICAgLy8gdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX3NlcnZpY2VzX19nYWxsZXJ5Jyk7XG4gICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX3NlcnZpY2VzJyk7XG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX3NlcnZpY2VzX193cmFwcGVyJyk7XG4gICAgdGhpcy5zbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fc2VydmljZXNfX2dhbGxlcnknKTtcbiAgICB0aGlzLkRyYWdUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnNvcl9fdGV4dDEnKTtcbiAgICB0aGlzLnByb2dyZXNzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuaG9tZV9fc2VydmljZXNfX25hdl9fcHJvZ3Jlc3NfX3Byb2dyZXNzX19udW1iZXInXG4gICAgKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zb2xlLmxvZygnc2xpZGVyIGNyZWF0ZWQnKTtcblxuICAgIHRoaXMuaW5WaWV3ID0gZmFsc2U7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBhY3RpdmUgc2xpZGVcbiAgICB0aGlzLmNlbnRlclNsaWRlID0gbnVsbFxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpO1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgLy8gdGhpcy5taW5TY3JvbGwgPSAwO1xuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIHRoaXMub2xkWCA9IDA7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnBsYXlyYXRlID0gMDtcbiAgICAvL1xuICAgIHRoaXMuYmluZGluZ3MoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgIHRoaXMuYWN0aXZlU2xpZGUoKVxuICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgdGhpcy5yYWYoKTtcbiAgfVxuXG4gIGJpbmRpbmdzKCkge1xuICAgIFtcbiAgICAgICdldmVudHMnLFxuICAgICAgJ2NhbGN1bGF0ZScsXG4gICAgICAncmFmJyxcbiAgICAgICdoYW5kbGVXaGVlbCcsXG4gICAgICAnaGFuZGxlTGVmdENsaWNrcycsXG4gICAgICAnaGFuZGxlUmlnaHRDbGlja3MnLFxuICAgICAgJ21vdmUnLFxuICAgICAgJ3JhZicsXG4gICAgICAnaGFuZGxlVG91Y2hTdGFydCcsXG4gICAgICAnaGFuZGxlVG91Y2hNb3ZlJyxcbiAgICAgICdoYW5kbGVUb3VjaEVuZCcsXG4gICAgICAnYWN0aXZlU2xpZGUnLFxuICAgIF0uZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgdGhpc1tpXSA9IHRoaXNbaV0uYmluZCh0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZSgpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLndyYXBXaWR0aCA9IHRoaXMuc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHRoaXMuc2xpZGVZID0gdGhpcy53cmFwV2lkdGggKyB0aGlzLkl0ZW1XaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuSXRlbVdpZHRoID0gdGhpcy53cmFwV2lkdGggLyB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICBpZiAoRGV0ZWN0aW9uLmlzRGVza3RvcCgpIHx8IERldGVjdGlvbi5pc1RhYmxldCgpKSB7XG4gICAgICB0aGlzLm1pblNjcm9sbCA9IHRoaXMud3JhcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdGhpcy5JdGVtV2lkdGg7XG4gICAgICB0aGlzLndpbmRvd0NlbnRlciA9IHRoaXMud2luZG93V2lkdGggLyAyICsgdGhpcy5JdGVtV2lkdGggKiAwLjI1O1xuICAgICAgdGhpcy53aW5kb3dMZWZ0ID0gdGhpcy53aW5kb3dXaWR0aCAvIDIgLSB0aGlzLkl0ZW1XaWR0aCAqIDAuNzU7XG4gICAgfVxuICAgIGlmIChEZXRlY3Rpb24uaXNQaG9uZSgpKXtcbiAgICAgIHRoaXMubWluU2Nyb2xsID0gdGhpcy53cmFwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgIHRoaXMud2luZG93Q2VudGVyID0gdGhpcy53aW5kb3dXaWR0aCAvIDIgKyB0aGlzLkl0ZW1XaWR0aCAqIDAuMjU7XG4gICAgICB0aGlzLndpbmRvd0xlZnQgPSB0aGlzLm1pblNjcm9sbCAtIDIwO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy53aW5kb3dMZWZ0LCB0aGlzLndpbmRvd0NlbnRlcilcbiAgICB9XG4gICAgICAvLyB0aGlzLndyYXAuc3R5bGUud2lkdGggPSBgJHt0aGlzLndyYXBXaWR0aH1weGA7XG4gICAgICB0aGlzLm1heFNjcm9sbCA9IHRoaXMud3JhcFdpZHRoIC0gdGhpcy5lbC5jbGllbnRXaWR0aCAtIHRoaXMubWluU2Nyb2xsO1xuICAgIC8vIC0gdGhpcy5taW5TY3JvbGw7XG4gICAgdGhpcy5zZWN0aW9uVG9wID0gdGhpcy5zZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgfVxuXG4gIGFjdGl2ZVNsaWRlICgpIHtcbiAgICAvLyBDbGlja1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCggKGl0ZW0sIGluZGV4KSA9PiB7XG5cbiAgICAgIHRoaXMuaXRlbUJvdW5kc0xlZnQgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcblxuICAgICAgLy8gY29uc3QgaXRlbVRpdGxlU3BhbnMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKVxuXG4gICAgICB0aGlzLmlzQ2VudGVyID1cbiAgICAgICAgdGhpcy5pdGVtQm91bmRzTGVmdCA8IHRoaXMud2luZG93Q2VudGVyICYmXG4gICAgICAgIHRoaXMuaXRlbUJvdW5kc0xlZnQgPiB0aGlzLndpbmRvd0xlZnQ7XG5cbiAgICAgIGlmICh0aGlzLmlzQ2VudGVyKSB7XG4gICAgICAgIHRoaXMuY2VudGVyU2xpZGUgPSBpdGVtXG4gICAgICAgIHRoaXMuY2VudGVyU2xpZGVJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNlbnRlclNsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICBpdGVtVGl0bGVTcGFuc1swXS5pbm5lckhUTUwsXG4gICAgICAgIC8vICAgdGhpcy5jZW50ZXJTbGlkZSxcbiAgICAgICAgLy8gICB0aGlzLml0ZW1Cb3VuZHNMZWZ0LFxuICAgICAgICAvLyAgIHRoaXMud2luZG93TGVmdCxcbiAgICAgICAgLy8gICB0aGlzLndpbmRvd0NlbnRlclxuICAgICAgICAvLyApO1xuICAgICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gcHJldmlvdXMgYW5kIGFkZCB0byBjdXJyZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICB9XG5cbiAgICB9KVxuICB9XG5cbiAgYWN0aXZlU2xpZGVDbGljayAoKSB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0Q2xpY2spIHtcbiAgICAgICAgICB0aGlzLml0ZW1Cb3VuZHNMZWZ0ID1cbiAgICAgICAgICAgIGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHRoaXMuSXRlbVdpZHRoO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JpZ2h0IGNsaWNrJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbUJvdW5kc0xlZnQgPVxuICAgICAgICAgICAgaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgdGhpcy5JdGVtV2lkdGg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGVmdCBjbGljaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3QgaXRlbVRpdGxlU3BhbnMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcblxuICAgICAgICB0aGlzLmlzQ2VudGVyID1cbiAgICAgICAgICB0aGlzLml0ZW1Cb3VuZHNMZWZ0IDwgdGhpcy53aW5kb3dDZW50ZXIgJiZcbiAgICAgICAgICB0aGlzLml0ZW1Cb3VuZHNMZWZ0ID4gdGhpcy53aW5kb3dMZWZ0O1xuXG4gICAgICAgIGlmICh0aGlzLmlzQ2VudGVyKSB7XG4gICAgICAgICAgdGhpcy5jZW50ZXJTbGlkZSA9IGl0ZW07XG4gICAgICAgICAgdGhpcy5jZW50ZXJTbGlkZUluZGV4ID0gaW5kZXhcbiAgICAgICAgICB0aGlzLmNlbnRlclNsaWRlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlV2hlZWwoZSkge1xuICAgIGlmICghdGhpcy5pblZpZXcpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaW5WaWV3KSB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2dyZXNzICs9IGUuZGVsdGFZO1xuICB9XG4gIHRoaXMubW92ZSgpO1xufVxuXG5oYW5kbGVMZWZ0Q2xpY2tzKGUpIHtcblx0dGhpcy5yaWdodENsaWNrID0gZmFsc2VcbiAgY29uc29sZS5sb2coJ2xlZnQgY2xpY2snKTtcbiAgdGhpcy5wcm9ncmVzcyAtPSB0aGlzLkl0ZW1XaWR0aDtcbiAgdGhpcy5hY3RpdmVTbGlkZUNsaWNrKCk7XG5cbiAgLy8gaWYgYXQgdGhlIHN0YXJ0IG9mIGdhbGxlcnkgbW92ZSB0byBlbmQgb2Ygc2xpZGVcbiAgaWYgKHRoaXMucHJvZ3Jlc3MgPD0gKHRoaXMubWluU2Nyb2xsIC0xMDAgKSkge1xuICAgIGNvbnNvbGUubG9nKCdnYWxsZXJ5IHN0YXJ0JywgdGhpcy5pdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtcbiAgICB0aGlzLnNsaWRlRW5kID0gdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdO1xuXG4gICAgdGhpcy5wcm9ncmVzcyAtPSAodGhpcy5JdGVtV2lkdGggKTtcbiAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgfVxuICAgICApXG5cbiAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG5cbiAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMubWF4U2Nyb2xsO1xuICAgICAgIHRoaXMuc2xpZGVFbmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICB0aGlzLmNlbnRlclNsaWRlSW5kZXggPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSaWdodENsaWNrcyhlKSB7XG5cdFx0dGhpcy5jbGlja2VkID0gdHJ1ZTtcblx0XHR0aGlzLnJpZ2h0Q2xpY2sgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdyaWdodCBjbGljaycpO1xuICAgIHRoaXMucHJvZ3Jlc3MgKz0gdGhpcy5JdGVtV2lkdGg7XG4gICAgdGhpcy5hY3RpdmVTbGlkZUNsaWNrKCk7XG4gICAgLy8gaWYgYXQgdGhlIGVuZCBvZiBnYWxsZXJ5IG1vdmUgdG8gc3RhcnQgb2Ygc2xpZGVcbiAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSB0aGlzLm1heFNjcm9sbCkge1xuICAgICAgdGhpcy5zbGlkZVN0YXJ0ID0gdGhpcy5pdGVtc1swXTtcblxuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLm1heFNjcm9sbDtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLm1pblNjcm9sbDtcbiAgICAgICAgdGhpcy5zbGlkZVN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmNlbnRlclNsaWRlSW5kZXggPSAwXG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2dhbGxlcnkgZW5kJywgdGhpcy5pdGVtc1swXSk7XG4gIH1cblxuICBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoIXRoaXMuaW5WaWV3KSByZXR1cm47XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLmNsaWVudFggfHwgZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgIHRoaXMuRHJhZ1RleHQuY2xhc3NMaXN0LmFkZCgnbm9uZScpXG4gICAgdGhpcy5jbGljayA9IGZhbHNlXG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgIHRoaXMuY2xpY2sgPSBmYWxzZVxuICAgIGlmKCF0aGlzLmluVmlldykgcmV0dXJuO1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGNvbnN0IHggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbiAgICBjb25zdCB4ID0gZS5jbGllbnRYIHx8IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIHRoaXMucHJvZ3Jlc3MgKz0gKHRoaXMuc3RhcnRYIC0geCkgKiAyLjU7XG4gICAgdGhpcy5zdGFydFggPSB4O1xuICAgIHRoaXMubW92ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZ3Jlc3MpO1xuICB9XG5cbiAgaGFuZGxlVG91Y2hFbmQoKSB7XG4gICAgdGhpcy5jbGljayA9IGZhbHNlO1xuICAgIGlmKCF0aGlzLmluVmlldykgcmV0dXJuO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgdGhpcy5EcmFnVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gIH1cblxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5jbGljayA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcCh0aGlzLnByb2dyZXNzLCB0aGlzLm1pblNjcm9sbCwgdGhpcy5tYXhTY3JvbGwpO1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSgpO1xuXG5cbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICAvLyBpZighdGhpcy5pblZpZXcpIHJldHVybjtpZighdGhpcy5pblZpZXcpIHJldHVybjtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjdWxhdGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuaGFuZGxlV2hlZWwpO1xuICAgIC8vXG4gICAgdGhpcy5yaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUmlnaHRDbGlja3MpO1xuICAgIHRoaXMubGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTGVmdENsaWNrcyk7XG4gICAgLy9cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVRvdWNoU3RhcnQpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5oYW5kbGVUb3VjaE1vdmUpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVRvdWNoRW5kKTtcbiAgICAvL1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVRvdWNoU3RhcnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZVRvdWNoRW5kKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZVRvdWNoRW5kKTtcblxuICB9XG5cbiAgc2Nyb2xsKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMudGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogJy5ob21lX19hYm91dCcsXG4gICAgICAgIHN0YXJ0OiAnYm90dG9tIDEwJScsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdyZXN0YXJ0IGNvbXBsZXRlIG5vbmUgcmVzZXQnLFxuICAgICAgICAvLyBtYXJrZXJzOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnRsXG4gICAgICAudG8oJy5ob21lX19hYm91dF9fc2Nyb2xsdGV4dCAud29yZCcsIHtcbiAgICAgICAgeTogJzEwMCUnLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgfSlcbiAgICAgIGlmIChEZXRlY3Rpb24uaXNEZXNrdG9wKCkgfHwgRGV0ZWN0aW9uLmlzVGFibGV0KCkpIHtcbiAgICAgICAgdGhpcy50bDEgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiAnLmhvbWVfX3NlcnZpY2VzJyxcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wIHRvcCcsXG4gICAgICAgICAgICAvLyAgZW5kOiBgKz0ke3RoaXMud3JhcFdpZHRofSBib3R0b21gLFxuICAgICAgICAgICAgZW5kOiBgKz0ke3RoaXMuc2xpZGVZfWAsXG4gICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiAncmVzdGFydCBjb21wbGV0ZSBub25lIHJlc2V0JyxcbiAgICAgICAgICAgIC8vICBtYXJrZXJzOiB0cnVlLFxuICAgICAgICAgICAgcGluOiAnLmhvbWVfX3NlcnZpY2VzJyxcbiAgICAgICAgICAgIHNjcnViOiAxLFxuICAgICAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLmluVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkIG5vbmUnKTtcbiAgICAgICAgICAgICAgc2VsZi5EcmFnVGV4dC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5EcmFnVGV4dC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FbnRlckJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZCBub25lJyk7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICAgIHNlbGYuRHJhZ1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGwxID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJy5ob21lX19zZXJ2aWNlcycsXG4gICAgICAgICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgZW5kOiAnYm90dG9tIHRvcCcsXG4gICAgICAgICAgICB0b2dnbGVBY3Rpb25zOiAncmVzdGFydCBjb21wbGV0ZSBub25lIHJlc2V0JyxcbiAgICAgICAgICAgIG1hcmtlcnM6IHsgc3RhcnRDb2xvcjogJ3doaXRlJywgc3RhcnQgOiAnc2VydmljZXMnIH0sXG4gICAgICAgICAgICBwaW46IHRydWUsXG4gICAgICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgc2VsZi5zZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2luLXZpZXcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25MZWF2ZUJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5zZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2luLXZpZXcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVudGVyQmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLnNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW4tdmlldycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAoc2Nyb2xsKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2Nyb2xsU2xpZGVyID0gc2Nyb2xsLnByb2dyZXNzICogc2VsZi5zbGlkZVk7XG4gICAgICAgICAgICAgIHNlbGYucHJvZ3Jlc3MgPSArc2VsZi5zY3JvbGxTbGlkZXI7XG4gICAgICAgICAgICAgIHNlbGYubW92ZSgpO1xuICAgICAgICAgICAgICBzY3JvbGwubWFya2VyRW5kLnRleHRDb250ZW50ID0gYGVuZDogJHtzZWxmLnByb2dyZXNzLnRvRml4ZWQoMil9YDtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsLm1hcmtlckVuZC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgdGhpcy50bFxuICAgICAgIC5mcm9tKCcuaG9tZV9fc2VydmljZXNfX2dhbGxlcnlfX3dyYXBwZXInLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICB9KVxuICAgICAgIC50bygnLmhvbWVfX3NlcnZpY2VzX193cmFwcGVyJywge1xuICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgIGRlbGF5OiA1LFxuICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgIHNlbGYuaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgc2VsZi5EcmFnVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvcGFjaXR5IDEnLCBzZWxmLmluVmlldyk7XG4gICAgICAgICB9LFxuICAgICAgIH0pO1xuXG4gICAgIGlmKCF0aGlzLnNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbi12aWV3JykpIHtcbiAgICAgIHRoaXMuRHJhZ1RleHQuY2xhc3NMaXN0LmFkZCgnbm9uZScpXG4gICAgIH1cbiAgfVxuXG4gIG1vdmVTbGlkZXIgKCkge1xuICAgIHRoaXMuc2VjdGlvblRvcCA9IHRoaXMuc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9ncmVzcywgdGhpcy5tYXhTY3JvbGwsIHRoaXMuc2VjdGlvblRvcCk7XG4gICAgdGhpcy5yYWYoKVxuXG4gIH1cblxuICByYWYoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5pblZpZXcpO1xuICAgIGlmKCF0aGlzLmluVmlldykgcmV0dXJuXG4gICAgdGhpcy54ID0gbGVycCh0aGlzLngsIHRoaXMucHJvZ3Jlc3MsIDAuMSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy54LCB0aGlzLnByb2dyZXNzKVxuICAgIHRoaXMucGxheXJhdGUgPSB0aGlzLnggLyB0aGlzLm1heFNjcm9sbDtcbiAgICAvLyB0aGlzLnByb2dyZXNzTnVtID0gTWF0aC5yb3VuZCgoMC4xOCArIHRoaXMucGxheXJhdGUgKiAwLjgyKSAqIDcpO1xuICAgIHRoaXMucHJvZ3Jlc3NOdW0gPSB0aGlzLmNlbnRlclNsaWRlSW5kZXggKyAxO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2VudGVyU2xpZGVJbmRleCArIDEpO1xuICAgIC8vXG4gICAgdGhpcy5wcm9ncmVzc051bWJlci5pbm5lckhUTUwgPSBgMCR7dGhpcy5wcm9ncmVzc051bX0vMDdgXG4gICAgLy9cbiAgICB0aGlzLndyYXAuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHstdGhpcy54fXB4KWA7XG4gICAgdGhpcy5iYXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWCgkezAuMTggKyB0aGlzLnBsYXlyYXRlICogMC44Mn0pYDtcbiAgICAvL1xuICAgIHRoaXMuc3BlZWQgPSBNYXRoLm1pbigxMDAsIHRoaXMub2xkWCAtIHRoaXMueCk7XG4gICAgdGhpcy5vbGRYID0gdGhpcy54O1xuICAgIC8vXG4gICAgdGhpcy5zY2FsZSA9IGxlcnAodGhpcy5zY2FsZSwgdGhpcy5zcGVlZCwgMC4xKTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlKCR7MSAtIE1hdGguYWJzKHRoaXMuc3BlZWQpICogMC4wMDJ9KWA7XG4gICAgICBpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGBzY2FsZVgoJHtcbiAgICAgICAgMSArIE1hdGguYWJzKHRoaXMuc3BlZWQpICogMC4wMDRcbiAgICAgIH0pYDtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEluc3RhbmNlc1xuICovXG5cblxuXG5cblxuLyoqXG4gKiBPbmUgcmFmIHRvIHJ1bGUgZW0gYWxsXG4gKi9cblxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUyODM5YWMwYWNjYzA3MDVjMTJmXCIpIl0sIm5hbWVzIjpbImxlcnAiLCJmMCIsImYxIiwidCIsIkRyYWdTY3JvbGwiLCJjb25zdHJ1Y3RvciIsIm9iaiIsInRoaXMiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndyYXAiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtIiwiYmFyIiwibGVmdEJ0biIsInJpZ2h0QnRuIiwic2VjdGlvbiIsIndyYXBwZXIiLCJzbGlkZXIiLCJEcmFnVGV4dCIsInByb2dyZXNzTnVtYmVyIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJpblZpZXciLCJjZW50ZXJTbGlkZSIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwic2Nyb2xsIiwicHJvZ3Jlc3MiLCJzcGVlZCIsIm9sZFgiLCJ4IiwicGxheXJhdGUiLCJiaW5kaW5ncyIsImNhbGN1bGF0ZSIsImFjdGl2ZVNsaWRlIiwiZXZlbnRzIiwicmFmIiwiZm9yRWFjaCIsImkiLCJiaW5kIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid3JhcFdpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzbGlkZVkiLCJJdGVtV2lkdGgiLCJsZW5ndGgiLCJEZXRlY3Rpb24iLCJtaW5TY3JvbGwiLCJsZWZ0Iiwid2luZG93Q2VudGVyIiwid2luZG93TGVmdCIsIm1heFNjcm9sbCIsImNsaWVudFdpZHRoIiwic2VjdGlvblRvcCIsInRvcCIsImluZGV4IiwiaXRlbUJvdW5kc0xlZnQiLCJpc0NlbnRlciIsImNlbnRlclNsaWRlSW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhY3RpdmVTbGlkZUNsaWNrIiwicmlnaHRDbGljayIsImhhbmRsZVdoZWVsIiwiZSIsImRlbHRhWSIsIm1vdmUiLCJoYW5kbGVMZWZ0Q2xpY2tzIiwic2xpZGVFbmQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlUmlnaHRDbGlja3MiLCJjbGlja2VkIiwic2xpZGVTdGFydCIsImhhbmRsZVRvdWNoU3RhcnQiLCJwcmV2ZW50RGVmYXVsdCIsImRyYWdnaW5nIiwic3RhcnRYIiwiY2xpZW50WCIsInRvdWNoZXMiLCJjbGljayIsImhhbmRsZVRvdWNoTW92ZSIsImhhbmRsZVRvdWNoRW5kIiwidmFsIiwibWluIiwibWF4IiwiTWF0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5Iiwic2VsZiIsInRsIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsInRvZ2dsZUFjdGlvbnMiLCJ0byIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJ0bDEiLCJlbmQiLCJwaW4iLCJzY3J1YiIsIm9uRW50ZXIiLCJvbkxlYXZlIiwib25MZWF2ZUJhY2siLCJvbkVudGVyQmFjayIsIm1hcmtlcnMiLCJzdGFydENvbG9yIiwib25VcGRhdGUiLCJzY3JvbGxTbGlkZXIiLCJtYXJrZXJFbmQiLCJ0ZXh0Q29udGVudCIsInRvRml4ZWQiLCJmcm9tIiwiZGlzcGxheSIsImRlbGF5IiwiZWFzZSIsIm9uQ29tcGxldGUiLCJjb250YWlucyIsIm1vdmVTbGlkZXIiLCJwcm9ncmVzc051bSIsImlubmVySFRNTCIsInN0eWxlIiwic2NhbGUiLCJhYnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=