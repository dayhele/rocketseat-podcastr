import Image from "next-image";

export default function Header() {
  return (
    <header>
      <Image src="/logo.svg" alt="Podcastr" width={162} height={40} />
      <p></p>
      <span></span>
    </header>
  );
}
