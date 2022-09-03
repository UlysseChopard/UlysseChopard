export default function Miscellaneous() {
  return (
    <div id="miscellaneous">
      <div className="flex flex-wrap justify-center">
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            languages
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">english: fluent</li>
            <li className="capitalize">spanish: school level</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            soft skills
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">initiative</li>
            <li className="capitalize">inquisitiveness</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            hobbies
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">boxing</li>
            <li className="capitalize">mountain hiking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
