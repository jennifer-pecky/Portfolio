
export const pageAnim = {
   hidden: {
       opacity: 0
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
    opacity: 0
   }
}

export const pagelineAnim = {
    hidden: {
        y: '-130%'
    },
    show: {
        y: '100%',
        transition: {
            ease: "easeOut", 
            duration: 0.8
        }
    }
}

export const navAnim = {
    hidden: {
        opacity: 0,
        x: -80
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            ease: "easeIn"
         }
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
            duration: 0.7
        }
    }
}

export const lineAnimContainer = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1  
        }
    },
    exit: {
        opacity: 0
       }
 }

