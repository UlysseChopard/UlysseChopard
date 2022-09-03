import Cursus from "components/cursus";
import experience from "data/experience.json";
import education from "data/education.json";

export default function CV() {
  return <Cursus experience={experience} education={education} />;
}
