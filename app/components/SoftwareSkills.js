import Title from "./Title";
import { useCallback, useState } from "react";

export default function SoftwareSkills({ skills }) {
  const [search, setSearch] = useState("");
  const [searchedSkills, setSearchedSkills] = useState(skills);
  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      setSearch(e.target.value.trim().toLowerCase());
      if (!search) setSearchedSkills(skills);
      else {
        const filteredSkills = skills.map((item) => {
          item.content = item.content.filter((item) =>
            item.toLowerCase().startsWith(search.toLowerCase())
          );
          return item;
        });
        setSearchedSkills(filteredSkills);
      }
    },
    [setSearch, search, searchedSkills, setSearchedSkills]
  );

  return (
    <div id="software-skills">
      <input
        className="form-input border-tertiary px-4 w-60 m-4 rounded-lg"
        id="search"
        type="search"
        placeholder="search"
        onChange={handleChange}
        value={search}
      />
      <div className="flex flex-wrap justify-center">
        {searchedSkills.map((skill) => (
          <div key={skill.title} className="rounded-lg m-4 p-4 w-60 shadow-md">
            <Title>{skill.title}</Title>
            {skill.content && (
              <ul className="ml-8 font-mono search-results">
                {skill.content.map((item) => (
                  <li
                    key={item.length + skill.title + item}
                    className="capitalize"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
