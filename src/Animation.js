//import gsap from 'gsap';
//import {ScrollTrigger} from 'gsap/ScrollTrigger';

export const pageAnim = {
   hidden: {
       opacity: 0,
       scaleY: 0.1,
   },
   show: {
       opacity: 1,
       scaleY: 1,
       transition: {
           duration: 0.5,
           when: "beforeChildren",
           staggerChildren: 0.3
       }
   },
   exit: {
    opacity: 0,
    scaleY: 0.1
   }
}

export const heroh1 = {
    hidden: {
        y: -50,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
           duration: 1,
           ease: "easeIn"
        }
       }
}

export const heroAnim = {
    hidden: {
       y: 50,
       opacity: 0
    },
    show: {
     y: 0,
     opacity: 1,
     transition: {
        duration: 1,
        ease: "easeOut"
     }
    }
}

export const fadein={
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "easeOut"
        }
    }
}

export const imgAnim = {
    hidden: {
        scale: 1.4,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1
        }
    }
}

export const lineAnim = {
    hidden: {
        x: '-130%',
        skew: "45deg",
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: "easeOut", 
            duration: 0.8,
        }
    }
}

export const lineAnimContainer = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        scaleY: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,  
        }
    }
 }

 /*
 export const scroll = () => {
   
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  //x: () => -(sections.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".project-section",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector('.project-section').offsetWidth
  }
});


 /*   
    let container = document.querySelector(".project-section");
    
    gsap.to(container, {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      //xPercent: -100 * (container.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        invalidateOnRefresh: true,
        start: 'top 10%',
        end: 'bottom 40%',
        pin: true,
        scrub: 1,
        //end: () => "+=" + container.offsetWidth
      }
    })

 }
 */
