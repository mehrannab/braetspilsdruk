import { Layout } from "@/common/layouts/Layout";
import { HomeContent } from "@/modules/home";
import { Typography } from "@mui/material";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

export const getStaticProps: GetStaticProps = async () => {
  // const datadummy = await prisma.user.findMany();

  return {
    props: {
      // datadummy: JSON.parse(JSON.stringify(datadummy)),
    },
  };
};

export default function Home() {
  return (
    <div>
      <HomeContent />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
