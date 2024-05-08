// import { Input } from "@/components/input";
import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const toggled = theme === "dark";
  const toggle = () => setTheme(toggled ? "light" : "dark");

  return (
    <div className="flex items-center flex-col">
      <div className="max-w-screen-xl w-full">
        <header className=" flex justify-between items-center py-4 px-4">
          <Link to="/">
            <div className="font-bold text-4xl select-none">Tasks</div>
          </Link>
          <Expand className="p-2 text-3xl" duration={350} toggle={toggle} toggled={toggled} />
        </header>
        <div className="flex justify-center py-20">{children}</div>
      </div>
    </div>
  );
}

export default function Root() {
  return <Layout>App</Layout>;
}
