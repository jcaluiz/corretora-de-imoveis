import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  url: string;
}

export default function SocialMediaButton({ children, url }: Props) {
  const redirectToPage = () => window.open(url);
  return (
    <button onClick={redirectToPage} className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
      {children}
    </button>
  );
}
