import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Typography, Container } from "@material-ui/core"
import Section, { BG_COLOR } from "@components/Section"
import Project from "./Project"

const useStyles = makeStyles(theme => ({
  section: {
    transform: "skewY(-7deg)",
    padding: "8rem 0",
    margin: "6rem 0",
    "& > *": {
      transform: "skewY(7deg)",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "3rem 0",
    },
  },
  projects: {
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
}))

function Projects() {
  const classes = useStyles()
  return (
    <Section className={classes.section} bgColor={BG_COLOR.PRIMARY}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Projekty
        </Typography>
        <div className={classes.projects}>
          {projects.map((project, index) => {
            return (
              <Project
                key={project.title}
                {...project}
                reverse={(index + 1) % 2 === 0}
              />
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

const projects = [
  {
    title: "TWHelp",
    description:
      "Serwis zawierający różne pomoce dla graczy plemion, zaczynając od bota na Discorda i przeróżnych skryptów, kończąc na ogólnodostępnym API z danymi serwerów plemion (informacje o graczach, wioskach, plemionach, zmianach plemion itd.).",
    technologies: [
      "React",
      "Gatsby",
      "Material-UI",
      "Golang",
      "gqlgen",
      "Gin",
      "discordgo",
      "robfig/cron",
      "PostgreSQL",
      "Docker",
      "Traefik",
    ],
    github: "",
    live: "https://tribalwarshelp.com/",
  },
  {
    title: "Zdam Egzamin Zawodowy",
    description:
      "Aplikacja mobilna oraz webowa przeznaczona do wykonywania testów zawodowych.",
    technologies: [
      "React",
      "Next.JS",
      "Material-UI",
      "Apollo Client",
      "Golang",
      "gqlgen",
      "Echo",
      "PostgreSQL",
      "React Native",
    ],
    github: "",
    live: "https://zdamegzaminzawodowy.pl/",
  },
  {
    title: "matura-z-informatyki.pl",
    description: "",
    technologies: ["React", "Next.JS", "Bulma", "Ghost"],
    github: "https://github.com/Kichiyaki/matura-z-informatyki.pl",
    live: "https://matura-z-informatyki.pl/",
  },
  {
    title: "dawid-wysokinski.pl",
    description: "Moje portfolio.",
    technologies: ["React", "Gatsby", "Material-UI"],
    github: "https://github.com/Kichiyaki/dawid-wysokinski.pl",
    live: "https://dawid-wysokinski.pl",
  },
  {
    title: "tribalbooster.pl",
    description: "",
    technologies: ["React", "Gatsby", "Material-UI"],
    live: "http://tribalbooster.pl/",
  },
  {
    title: "Instaling.pl Bot",
    description: "Bot automatycznie wykonujący sesje na stronie instaling.pl.",
    technologies: ["Golang", "Lorca"],
    github: "https://github.com/Kichiyaki/Instaling-Bot",
  },
  {
    title: "Margonem Mini Bot",
    description:
      "Bot służący do zużywania staminy w mobilnej wersji gry margonem, sprzedawania itemów i autoleczenia.",
    technologies: ["Golang", "Colly"],
    github: "https://github.com/Kichiyaki/margonem-mini-bot",
  },
  {
    title: "Akademia Młodego Inżyniera",
    description: "",
    technologies: ["HTML", "CSS", "Bootstrap"],
    live: "https://dawid-wysokinski.pl/podglad/akademia/",
  },
  {
    title: "Freshline",
    description: "",
    technologies: ["Wordpress", "CSS", "Bootstrap"],
    live: "http://fresh-line.pl/",
  },
]

export default Projects
