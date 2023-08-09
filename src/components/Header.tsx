import CheckScreenSmallMd from "@/hooks/CheckScreenSmallMd";
import BiggerHeader from "./header/BiggerHeader";
import SmallerHeader from "./header/SmallerHeader";
import ResponsiveHeader from "./header/ResponsiveHeader";

export default function Header() {
  return (
    <header className="flex flex-col">
      <CheckScreenSmallMd />
      <BiggerHeader />
      <SmallerHeader />
      <ResponsiveHeader />
    </header>
  );
}
