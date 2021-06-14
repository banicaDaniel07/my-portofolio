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
    exit: {
        x: '100vw',
        transition: { 
            duration: 1,
            type: 'spring',
        },
    }
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
    exit: {
        x: '-100vw',
        transition: { 
            duration: 1,
            type: 'spring',
        },
    }
};

export const coverVariants = {
    initial: { 
        width: '100%',
        height: '100%'
    },
    animate: {
        width: '0%',
        height: '1000%',
        transition: {
            duration: 1
        }
    },
    exit: {
        width: '100%',
        height: '100%',
        transition: {
            duration: 1
        }
    }
};


// export const pageAnimation = {
//     hidden: {
//       opacity: 0,
//       y: 300,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: 300,
//       transition: {
//         duration: 1,
//       },
//     },
//   };
