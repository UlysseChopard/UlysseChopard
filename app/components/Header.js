import Image from "next/image";
import profilePic from "public/images/ulysse-cut.jpeg";

export default function Header() {
  return (
    <header className="fixed z-1 left-0 w-60 max-w-xs h-screen bg-primary p-4 text-white shadow-md shadow-tertiary">
      <h1 className="font-bold text-xl text-center">
        Ulysse Chopard-Guillaumot
      </h1>
      <div className="flex justify-center w-50">
        <Image
          className="rounded-lg object-fill drop-shadow-md"
          src={profilePic}
          alt="My picture"
          priority
        />
      </div>
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
              <a className="text-white" href="mailto:chopard.ulysse@gmail.com">
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
              <a className="text-white" href="https://github.com/UlysseChopard">
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
  );
}
