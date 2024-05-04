/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "../../styles/PremadeContent.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import faerdigeBraetspil from "../../data/faerdigeBraetspil.json";
import PrimaryButton from "@/components/primaryButton/PrimaryButton";
import CartContext, { Item } from "@/contexts/CartContext";
import ShowQuestionsButton from "@/components/showQuestionsButton/ShowQuestionsButton";
import DialogQuestions from "../checkout/components/dialogQuestions/DialogQuestions";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageCustom({
  id,
  titel,
  description,
  price,
  item,
}: {
  id: string;
  titel: string;
  description: string;
  price: number;
  item: Item;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const { addToCart, ordres } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <section className={styles.customSection}>
        <Grid container alignItems="center" justifyContent={"center"}>
          <Grid item>
            <ShowQuestionsButton
              text={"Se felterne"}
              onClick={handleClickOpen}
            />
          </Grid>
          <Grid item marginRight={18}>
            <div className={styles.customDiv} ref={ref}>
              <img
                src={id}
                height={500}
                width={500}
                alt="A London skyscraper"
                className={styles.customImg}
              />
            </div>
          </Grid>
          <Grid item>
            <Grid container direction={"column"} spacing={6}>
              <Grid item>
                <motion.h2 className={styles.customH2} style={{ y }}>
                  {titel}
                </motion.h2>
              </Grid>
              <Grid item marginTop={1}>
                <motion.h2 className={styles.customH3} style={{ y }}>
                  {description}
                </motion.h2>
              </Grid>
              <Grid item marginTop={2}>
                <motion.h2 className={styles.customH3} style={{ y }}>
                  <Box display="flex" alignItems="center">
                    <PrimaryButton
                      text={"Tilføj til kurven"}
                      onClick={() => addToCart(item)}
                    />
                    <Box marginLeft={1}>{price} kr</Box>
                  </Box>
                </motion.h2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <DialogQuestions item={item} onClose={handleClose} open={open} />
    </>
  );
}

export function PremadeContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {faerdigeBraetspil.map((item) => (
        <>
          <ImageCustom
            id={item.imgUrl}
            titel={item.name}
            description={item.description}
            price={item.price}
            item={item}
          />
        </>
      ))}
      <motion.div className={styles.customProgress} style={{ scaleX }} />
    </>
  );
}
