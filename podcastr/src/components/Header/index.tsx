import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Image src="/logo.svg" alt="Podcastr" width={162} height={40} />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}
