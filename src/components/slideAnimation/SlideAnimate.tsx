import { motion, Variants } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,

    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export default function Card(props: CardProps) {
  const background = `linear-gradient(306deg, ${hue(props.hueA)}, ${hue(
    props.hueB
  )})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}>
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {props.children}
      </motion.div>
    </motion.div>
  );
}
