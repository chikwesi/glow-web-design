export const SlideUpVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
}
export const SlideUpItemVariant = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
    },
  },
}


export const SlideUpItemLongVariant = {
  hidden: {
    y: 600,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.6  ,
    },
  },
}

export const ScaleUpVariant = {
  hidden: {
    scale: 0.1,
  },
  show: {
    scale: 1,
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}

export const ScaleDownImageVariant = {
  hidden: {
    scale: 4,
  },
  show: {
    scale: 1,
    transition: {
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
}

export const SlideInLeftVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
}

export const SlideInLeftItemVariant = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
    },
  },
}

export const SlideInLeftFeedBackVariant = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
}

export const SlideDiagRightItemVariant = {
  hidden: {
    x: -150,
    y: 150,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
}

export const ExpandWidthVariant = {
  hidden: {
    width: '20%',
  },
  show: {
    width: '100%',
    transition: {
      ease: 'easeOut',
      duration: 0.4,
    },
  },
}

export const RotateVariant = {
  show: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: 'linear'
    },
  },
}

export const FadeInVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.6,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
}
