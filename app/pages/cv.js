export default function CV() {
  return (
    <>
      <nav
        className="fixed top-2 left-64 z-10 bg-primary rounded-lg drop-shadow-md"
        id="main-nav"
      >
        <a
          className="px-4 py-2 rounded-lg text-white hover_bg-secondary uppercase"
          type="button"
          href="#cursus"
        >
          cursus
        </a>
        <a
          className="px-4 py-2 rounded-lg text-white hover_bg-secondary uppercase"
          type="button"
          href="#software-skills"
        >
          software skills
        </a>
        <a
          className="px-4 py-2 rounded-lg text-white hover_bg-secondary uppercase"
          type="button"
          href="#miscellaneous"
        >
          miscellaneous
        </a>
      </nav>
      <header className="fixed z-1 left-0 w-60 max-w-xs h-screen flex flex-col items-center justify-between bg-primary p-4 text-white shadow-md shadow-tertiary">
        <h1 className="font-bold text-xl text-center">
          Ulysse Chopard-Guillaumot
        </h1>
        <img
          className="w-32 h-48 rounded-lg object-fill drop-shadow-md"
          src="images/image-cv.jpeg"
        />
        <table className="text-xs mb-10">
          <caption className="invisible">Reach me</caption>
          <tbody>
            <tr className="h-10">
              <th className="align-middle text-justify" scope="row">
                Address
              </th>
              <td className="align-middle text-right">
                <a
                  className="text-white"
                  href="https://www.google.fr/maps/place/Le+Moulin+de+Guillerand,+86500+Saulg%C3%A9/@46.3490229,0.8862922,2006m/data=!3m1!1e3!4m5!3m4!1s0x47fc233a05ecdb0d:0x5c6d951f12032395!8m2!3d46.349009!4d0.895047"
                >
                  Lieu-dit le Moulin de Guillerand 86500 Saulgé
                </a>
              </td>
            </tr>
            <tr className="h-10">
              <th className="align-middle text-justify" scope="row">
                Phone number
              </th>
              <td className="align-middle text-right">
                <a className="text-white" href="tel:+33670417865">
                  +33670417865
                </a>
              </td>
            </tr>
            <tr className="h-10">
              <th className="align-middle text-justify" scope="row">
                Email address
              </th>
              <td className="align-middle text-right">
                <a
                  className="text-white"
                  href="mailto:chopard.ulysse@gmail.com"
                >
                  chopard.ulysse@gmail.com
                </a>
              </td>
            </tr>
            <tr className="h-10">
              <th className="align-middle text-justify" scope="row">
                Nationality
              </th>
              <td className="align-middle text-right">French</td>
            </tr>
            <tr className="h-10">
              <th className="align-middle text-justify" scope="row">
                Working conditions
              </th>
              <td className="align-middle text-right">Remote</td>
            </tr>
            <tr className="h-10">
              <th className="align-middle text-justify" scope="row">
                Github
              </th>
              <td className="align-middle text-right">
                <a
                  className="text-white"
                  href="https://github.com/UlysseChopard"
                >
                  @UlysseChopard
                </a>
              </td>
            </tr>
            <tr className="h-10">
              <th className="align-middle text-justify" scope="row">
                LinkedIn
              </th>
              <td className="align-middle text-right">
                <a
                  className="text-white"
                  href="https://www.linkedin.com/in/ulysse-chopard/"
                >
                  Ulysse Chopard-Guillaumot
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
      <main className="ml-64 mr-4 pt-14">
        <div id="cursus">
          <div className="bg-gray-200 p-4 rounded-lg drop-shadow-md">
            <p className="border-l-solid border-l-2 border-l-secondary pl-4 text-secondary">
              Currently working as a fullstack developer at Ksaar on a no-code
              tool, I am looking for a challenging next position. Ideally, I
              would work on a broad range of technologies since I am really
              interested in all aspects of web developement, from DevOps to UI
              by the API and load-balancer management.
            </p>
          </div>
          <div className="my-4">
            <h2 className="uppercase font-semibold text-lg text-secondary">
              experience
            </h2>
            <div className="content flex flex-col-reverse">
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">Sales BtoB</span>
                  &mdash;
                  <a href="https://signy.fr/">Beer of the Abbey of Signy</a>
                  <span className="italic">Paris and Picardie</span>
                </p>
              </div>
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">
                    Business Intelligence consultant
                  </span>
                  &mdash;
                  <a href="https://bertin.fr/">Bertin IT</a>
                  <span className="italic">
                    Montigny-le-Bretonneux, Île de France
                  </span>
                </p>
                <ul className="ml-4 font-mono">
                  <li className="text-sm">Analysis and report</li>
                  <li className="text-sm">Security domain</li>
                </ul>
              </div>
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">
                    Competitive Intelligence consultant
                  </span>
                  &mdash;
                  <a href="https://www.fragmos-chain.com/">Fragmos Chain</a>
                  <span className="italic">Paris</span>
                </p>
                <ul className="ml-4 font-mono">
                  <li className="text-sm">For a startup</li>
                  <li className="text-sm">Fintech environment</li>
                  <li className="text-sm">Blockchain technology</li>
                </ul>
              </div>
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">Web developer</span>
                  &mdash;
                  <a href="https://www.medhop.fr/">Medhop</a>
                  <span className="italic">Remote</span>
                </p>
                <ul className="ml-4 font-mono">
                  <li className="text-sm">E2E tests setup with Cypress</li>
                  <li className="text-sm">
                    Beginning of the implementation of UI with Vue and Material
                    Design
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">Fullstack web developer</span>
                  &mdash;
                  <a href="https: //www.ksaar.com/">Ksaar</a>
                  <span className="italic">Remote</span>
                </p>
                <ul className="ml-4 font-mono">
                  <li className="text-sm">
                    in a team of four software developers
                  </li>
                  <li className="text-sm">Agile methodologies</li>
                  <li className="text-sm">
                    React / Node.js / TypeScript / Nginx / Docker
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-4">
            <h2 className="uppercase font-semibold text-lg text-secondary">
              education
            </h2>
            <div className="content flex flex-col-reverse">
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">Bachelor in Humanities </span>
                  &mdash;
                  <a href="http://www.cite-scolaire-michelet-vanves.ac-versailles.fr/classes-preparatoires/prepas-a-michelet/">
                    Jules Michelet preparation school
                  </a>
                  <span className="italic">Vanves, Île de France</span>
                </p>
                <ul className="ml-4 font-mono">
                  <li className="text-sm">
                    Ecole Normale Supérieur competition
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">Master in Management </span>
                  &mdash;
                  <a href="https://www.st-cyr.terre.defense.gouv.fr/">
                    Special Military School of Saint-Cyr
                  </a>
                  <span className="italic">Guer, Cöetquidan, Bretagne</span>
                </p>
                <ul className="ml-4 font-mono">
                  <li className="text-sm">Interrupted for reorientation</li>
                </ul>
              </div>
              <div className="flex flex-col justify-between text-justify m-2">
                <p>
                  <span className="font-semibold">
                    Bachelor in Software development
                  </span>
                  &mdash;
                  <a href="https://openclassrooms.com/">OpenClassrooms</a>
                  <span className="italic">Remote</span>
                </p>
                <ul className="ml-4 font-mono">
                  <li className="text-sm">Project-based formation</li>
                  <li className="text-sm">A dedicated mentor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      </main>
      <footer className="ml-60">
        <p className="w-full border-t-solid border-t-2 border-t-tertiary p-4 text-center">
          2022 - Made with Node.js, JSON-server, Pug and TailwindCSS
        </p>
      </footer>
      {/*<script>
      const input = document.getElementById("search");
      const items = document.querySelectorAll(".search-results > li");
      const lists = document.querySelectorAll(".search-results");
      input.addEventListener("input", (e) => {
        const searchText = e.target.value.trim().toLowerCase();
        items.forEach(
          (item) =>
            (item.style.display = item.textContent
              .toLowerCase()
              .startsWith(searchText)
              ? "list-item"
              : "none")
        );
        lists.forEach((list) => {
          let isEmpty = true;
          list
            .querySelectorAll("li")
            .forEach(
              (item) => item.style.display !== "none" && (isEmpty = false)
            );
          if (isEmpty) list.parentNode.classList.add("bg-black");
          else list.parentNode.classList.remove("bg-black");
        });
      });
    </script>*/}
    </>
  );
}
