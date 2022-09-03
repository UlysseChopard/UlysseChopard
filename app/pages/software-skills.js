export default function SoftwareSkills() {
  return (
    <div id="software-skills">
      <input
        className="form-input border-tertiary px-4 w-60 m-4 rounded-lg"
        id="search"
        type="search"
        placeholder="search"
      />
      <div className="flex flex-wrap justify-center">
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            development tools
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">zsh</li>
            <li className="capitalize">bash</li>
            <li className="capitalize">command</li>
            <li className="capitalize">VS Code</li>
            <li className="capitalize">vim</li>
            <li className="capitalize">ssh</li>
            <li className="capitalize">Git</li>
            <li className="capitalize">Github / Gitlab</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            devops
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">docker</li>
            <li className="capitalize">docker-compose</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            server
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">node.js</li>
            <li className="capitalize">nginx</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            views
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">html5</li>
            <li className="capitalize">css3</li>
            <li className="capitalize">javascript</li>
            <li className="capitalize">react</li>
            <li className="capitalize">vue</li>
            <li className="capitalize">pug</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            state management
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">redux</li>
            <li className="capitalize">vuex</li>
            <li className="capitalize">vue-router</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            preprocessors
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">sass</li>
            <li className="capitalize">scss</li>
            <li className="capitalize">postcss</li>
            <li className="capitalize">typescript</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            bundlers
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">webpack</li>
            <li className="capitalize">vite</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            databases
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">MongoDB</li>
            <li className="capitalize">MySQL</li>
            <li className="capitalize">PostgreSQL</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            object relational mappers
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">Sequelize</li>
            <li className="capitalize">Mongoose</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            css library
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">vuetify</li>
            <li className="capitalize">tailwindcss</li>
            <li className="capitalize">material-ui</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            test
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">Cypress</li>
            <li className="capitalize">Jest</li>
            <li className="capitalize">Mocha / Chai</li>
          </ul>
        </div>
        <div className="rounded-lg m-4 p-4 w-60 shadow-md">
          <h2 className="uppercase font-semibold text-lg text-secondary">
            notions
          </h2>
          <ul className="ml-8 font-mono search-results">
            <li className="capitalize">Python</li>
            <li className="capitalize">C</li>
            <li className="capitalize">Elixir</li>
            <li className="capitalize">Go</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
