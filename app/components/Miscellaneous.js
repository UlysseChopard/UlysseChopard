export default function Miscellaneous({ miscellaneous }) {
  return (
    <div id="miscellaneous" className="flex flex-wrap justify-center">
      {miscellaneous.map((category) => (
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            {category.title}
          </h2>
          {category.content && (
            <ul className="ml-8 font-mono search-results">
              {category.content.map((item) => (
                <li className="capitalize">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
