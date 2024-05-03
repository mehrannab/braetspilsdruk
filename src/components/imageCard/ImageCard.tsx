import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ImageCardProps {
  imgSrc: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ImageCard(props: ImageCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <Image src={props.imgSrc} height={600} width={600} alt={""} />
      </div>
      <motion.h2 style={{ y }}>{`#00$`}</motion.h2>
    </section>
  );
}
