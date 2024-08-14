import gsap from "gsap"

export const moveScale = ({ event, scale, duration, ease }: any) => {
    gsap.to(event.target, {
        scale: scale,
        duration: duration,
        ease: ease,
    });
};

export const onMouseEnter = (event: any) => {
    moveScale({
        event: event,
        scale: 1.5,
        duration: 0.5,
        ease: "power1.out"
    });
}

export const onMouseLeave = (event: any) => {
    moveScale({
        event: event,
        scale: 1,
        duration: 0.5,
        ease: "power1.inOut"
    });
}
