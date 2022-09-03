import Education from "./Education";
import Experience from "./Experience";

export default function Cursus({ experience, education }) {
  return (
    <div id="cursus" className="my-4">
      <Experience experience={experience} />
      <Education education={education} />
    </div>
  );
}
