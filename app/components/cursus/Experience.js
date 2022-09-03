import Title from "../Title";

function SingleExperience({ experience }) {
  return (
    <div className="flex flex-col justify-between text-justify m-2">
      <p>
        <span className="font-semibold">{experience.position}</span>
        &mdash;
        <a href={experience.company.link}>{experience.company.name}</a>
        <span className="italic">{experience.location}</span>
      </p>
      {experience.description && (
        <ul className="ml-4 font-mono">
          {experience.description.map((item) => (
            <li className="text-sm" key={item + experience.position.length}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experience({ experience }) {
  return (
    <div className="my-4">
      <Title>Experience</Title>
      <div className="content flex flex-col-reverse">
        {experience.map((exp) => (
          <SingleExperience
            key={exp.location + exp.position.length}
            experience={exp}
          />
        ))}
      </div>
    </div>
  );
}
