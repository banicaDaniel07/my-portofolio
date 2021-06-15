export const titleVariants = {
    initial: { 
        x: '100vw'
    },
    animate: {
        x: 0,
        transition: { 
            duration: 1,
            type: 'spring',
            delay: 0.5,
        },
    },
    // exit: {
    //     x: '100vw',
    //     transition: { 
    //         duration: 1,
    //         type: 'spring',
    //     },
    // }
};

export const subtitleVariants = {
    initial: { 
        x: '-100vw', 
    },
    animate: {
        x: 0,
        transition: { 
            duration: 1,
            delay: 0.5,
            type: 'spring',
        },
    },
};

// Page transiton animation
export const leftVariants = {
    initial: { 
        width: '51%',
        height: '100%'
    },
    animate: {
        width: '0%',
        height: '100%',
        transition: {
            duration: 0.75,
            delay: 0.1
        }
    },
    exit: {
        width: '51%',
        height: '100%',
        transition: {
            duration: 0.75,
            delay: 0.1
        }
    }
};


export const rightVariants = {
    initial: { 
        width: '51%',
        height: '100%'
    },
    animate: {
        width: '0%',
        height: '100%',
        transition: {
            duration: 0.75,
            delay: 0.1
        }
    },
    exit: {
        width: '51%',
        height: '100%',
        transition: {
            duration: 0.75,
            delay: 0.1
        }
    }
};

// Title animation
export const titleDownAnimation = {
    initial: {
        y: 100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            delay: 0.4
        },
    },
}
export const titleUpAnimation = {
    initial: {
        y: -100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            delay: 0.4
        },
    },
}

//  Projects buttons animations 
export const optionMiddleButtonAnimation = {
    initial: {
        y: 100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            delay: 0.4
        },
    },
}
export const optionLeftButtonAnimation = {
    initial: {
      x: -100,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.4
      },
    },
}
export const optionRightButtonAnimation = {
    initial: {
      x: 100,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.4
      },
    },
}
export const optionRight1ButtonAnimation = {
    initial: {
      x: 100,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      },
    },
}
export const optionLeft1ButtonAnimation = {
    initial: {
      x: -100,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      },
    },
}
export const borderButtonAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
    opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4
      },
    },
}

// Card Animation
export const cardAnimation = {
    initial: {
      width: '0%',
    },
    animate: {
    width: '100%',
      transition: {
        duration: 0.5,
        type: 'spring',
      },
    },
    exit: {
        width: '0%',
          transition: {
            duration: 0.5,
            type: 'spring',
          },
        },
}

// Description animation

export const descriptionAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
    opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4
      },
    },
}

// About Card animation

export const aboutDownCardAnimation = {
    initial: {
        y: '100vh',
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            delay: 0.4
        },
    },
}
export const aboutLeftCardAnimation = {
    initial: {
      x: '-100vw',
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.4
      },
    },
}
export const aboutRightCardAnimation = {
    initial: {
      x: '100vw',
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.4
      },
    },
}

// Contact me animation
export const contactTextAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.15,
      transition: {
        duration: 0.75,
        delay: 0.4
      },
    },
}
// Info Box animation
export const infoBoxAnimation = {
    initial: {
      y: 300,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.4
      },
    },
}
