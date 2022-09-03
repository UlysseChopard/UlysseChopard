import Cursus from "components/cursus";

export default function CV({ experience, education }) {
  return <Cursus experience={experience} education={education} />;
}

export async function getStaticProps() {
  return {
    props: {
      experience: require("data/experience.json"),
      education: require("data/education.json"),
    },
  };
}
