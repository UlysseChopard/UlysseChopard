import Title from "../Title";

function Schooling({ schooling }) {
  return (
    <div className="flex flex-col justify-between text-justify m-2">
      <p>
        <span className="font-semibold">
          {schooling.degree} in {schooling.domain}{" "}
        </span>
        &mdash;
        <a href={schooling.school.link}>{schooling.school.name}</a>
        <span className="italic">{schooling.location}</span>
      </p>
      {schooling.description && (
        <ul className="ml-4 font-mono">
          {schooling.description.map((desc) => (
            <li className="text-sm" key={desc}>
              {desc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Education({ education }) {
  return (
    <div className="my-4">
      <Title>Education</Title>
      <div className="content flex flex-col-reverse">
        {education.map((schooling) => (
          <Schooling
            key={schooling.location + schooling.description.length}
            schooling={schooling}
          />
        ))}
      </div>
    </div>
  );
}
