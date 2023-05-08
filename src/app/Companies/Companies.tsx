import Image from "next/image";
import styles from "./Companies.module.css";
import careemLogo from "./careem-logo.svg";
import didarisLogo from "./didaris-logo.png";
import eventumLogo from "./eventum-logo.png";
import fridayLogo from "./friday-logo.svg";
import koLogo from "./ko-logo.svg";
import tempoLogo from "./tempo-logo.svg";

export default function Companies() {
  return (
    <div className={styles.container}>
      <a
        target="_blank"
        rel="noreferrer"
        href="http://eventumsolutions.com/careers/"
      >
        <Image
          src={eventumLogo}
          alt="Eventum IT Solutions"
          title="Eventum IT Solutions"
          width={100}
          height={70}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://didaris.com">
        <Image
          src={didarisLogo}
          alt="Didaris"
          title="Didaris"
          width={129}
          height={44}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://friday.de">
        <Image
          src={fridayLogo}
          alt="Friday"
          title="Friday"
          width={104}
          height={14}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://careem.com">
        <Image
          src={careemLogo}
          alt="Careem"
          title="Careem"
          width={104}
          height={42}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://knowledgeofficer.com">
        <Image
          src={koLogo}
          alt="Knowledge Officer"
          title="Knowledge Officer"
          width={124}
          height={36}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://tempo.fit">
        <Image
          src={tempoLogo}
          alt="Tempo"
          title="Tempo"
          width={93}
          height={20}
        />
      </a>
    </div>
  );
}
