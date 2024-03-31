import * as React from "react";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Image from "next/image";
import { useEffect } from "react";

interface SimpleGrowProps {
  images: string[];
  delay?: number;
}

export default function SimpleGrow(props: SimpleGrowProps) {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    let isMounted = true;

    const showImagesInSequence = async () => {
      await sleep(props.delay || 0);

      while (isMounted) {
        for (let i = 0; i < props.images.length; i++) {
          if (!isMounted) break;
          setCurrentIndex(i);
          await sleep(3000);
        }
      }
    };

    showImagesInSequence();

    return () => {
      isMounted = false;
    };
  }, [props.images.length]);

  return (
    <Box sx={{ height: 180, width: 200, position: "relative" }}>
      {props.images.map((src, index) => (
        <Grow
          key={src}
          in={index === currentIndex}
          style={{
            transformOrigin: "0 0 0",
            position: "absolute",
            left: 0,
            top: 0,
          }}
          {...(index === currentIndex ? { timeout: 1000 } : {})}>
          <Image src={src} height={200} width={200} alt="" />
        </Grow>
      ))}
    </Box>
  );
}
