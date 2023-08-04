import BiggerHeader from "./header/BiggerHeader";
import SmallerHeader from "./header/SmallerHeader";

export default function Header() {
  return (
    <header className="flex flex-col">
      <BiggerHeader />
      <SmallerHeader />
    </header>
  );
}
