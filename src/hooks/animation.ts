import gsap from "gsap"
import { props } from "./props";

export const moveScale = ({ event, scale, duration, ease }: props) => {
    gsap.to(event.target, {
        scale: scale,
        duration: duration,
        ease: ease,
    });
};