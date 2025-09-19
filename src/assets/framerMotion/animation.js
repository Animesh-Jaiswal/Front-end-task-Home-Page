const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export {container, fadeInLeft, fadeInUp, fadeInRight};