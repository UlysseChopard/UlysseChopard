export default function CV() {
  return (
    <>
      <div id="cursus">
        <div className="bg-gray-200 p-4 rounded-lg drop-shadow-md">
          <p className="border-l-solid border-l-2 border-l-secondary pl-4 text-secondary">
            Currently working as a fullstack developer at Ksaar on a no-code
            tool, I am looking for a challenging next position. Ideally, I would
            work on a broad range of technologies since I am really interested
            in all aspects of web developement, from DevOps to UI by the API and
            load-balancer management.
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
                  In a team of four software developers
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
                <li className="text-sm">Ecole Normale Supérieur competition</li>
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
      {/*<script type="text/javascript">
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
