import SimpleGrow from "@/components/customMorph/CustomMorph";
import InfoBox from "@/components/infoBox/InfoBox";
import SlideAnimate from "@/components/slideAnimation/SlideAnimate";
import LaunchIcon from "@mui/icons-material/Launch";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export function HomeContent() {
  const router = useRouter();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginBottom={10}
        marginTop={14}>
        <Grid item>
          <Image src="/celebration.svg" height={500} width={500} alt={""} />
        </Grid>
      </Grid>

      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={20}
        marginLeft={6}>
        <Grid item display={"flex"} marginBottom={12} marginTop={8}>
          <Grid container direction={"column"} justifyContent={"space-between"}>
            <Grid item>
              <SimpleGrow
                images={[
                  "/animateSection1/cocktail.svg",
                  "/animateSection1/boardgames.svg",
                  "/animateSection1/party.svg",
                ]}
              />
            </Grid>
            <Grid item>
              <SimpleGrow
                images={[
                  "/animateSection3/board-game.svg",
                  "/animateSection3/cocktail1.svg",
                  "/animateSection3/lol.svg",
                ]}
                delay={2000}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={"column"}
            alignItems="center"
            justifyContent="center"
            rowGap={10}>
            <SlideAnimate hueA={50} hueB={80}>
              <InfoBox
                title={"Velkommen"}
                text={"Vi garanterer for en god stund og sjove momenter"}
                hasButton={false}
                iconSVG={
                  <Image src="/deal.svg" height={90} width={90} alt={""} />
                }
              />
            </SlideAnimate>
            <SlideAnimate hueA={150} hueB={180}>
              <InfoBox
                title={"Design eget"}
                text={
                  "Slip tankerne løs og design dit helt eget drukspil ! Kun du sætter sværhedsgraden"
                }
                hasButton={true}
                buttonText={"Byg her"}
                buttonIcon={<LaunchIcon />}
                iconSVG={
                  <Image src="/lego.svg" height={60} width={60} alt={""} />
                }
                routingOnClick={() => router.push("/custom")}
              />
            </SlideAnimate>
            <SlideAnimate hueA={290} hueB={320}>
              <InfoBox
                title={"Færdiglavede"}
                text={
                  "Grib øjeblikket med vores færdiglavede drukspil ! De udskifter konstant og er der i begrænset tid "
                }
                hasButton={true}
                buttonText={"Se samlingen"}
                buttonIcon={<LaunchIcon />}
                iconSVG={
                  <Image src="/hobby.svg" height={70} width={70} alt={""} />
                }
                routingOnClick={() => router.push("/premade")}
              />
            </SlideAnimate>
          </Grid>
        </Grid>

        <Grid item marginRight={12} marginTop={62}>
          <SimpleGrow
            images={[
              "/animateSection2/dance.svg",
              "/animateSection2/dices.svg",
              "/animateSection2/happy.svg",
            ]}
            delay={1000}
          />
        </Grid>
      </Grid>
    </>
  );
}
