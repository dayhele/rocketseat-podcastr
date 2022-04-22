import styles from "./styles.module.scss";
import Image from "next/image";

export default function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <Image src="/playing.svg" alt="Tocando agora" width={32} height={32} />
        <strong>Tocando agora</strong>
      </header>
      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>
      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <Image src="/shuffle.svg" alt="Aleatório" width={24} height={24} />
          </button>
          <button type="button">
            <Image
              src="/play-previous.svg"
              alt="Anterior"
              width={24}
              height={24}
            />
          </button>
          <button type="button" className={styles.playButton}>
            <Image src="/play.svg" alt="Tocar" width={32} height={32} />
          </button>
          <button type="button">
            <Image src="/play-next.svg" alt="Próximo" width={24} height={24} />
          </button>
          <button type="button">
            <Image src="/repeat.svg" alt="Repetir" width={24} height={24} />
          </button>
        </div>
      </footer>
    </div>
  );
}
