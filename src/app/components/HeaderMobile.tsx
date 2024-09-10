import Image from "next/image";
import { useWindowSize } from "../hooks/useWindowSize";

const HeaderMobile = () => {
  const { width, height } = useWindowSize();

  return (
    <header className="flex justify-center items-center px-4 py-4 bg-transparent relative z-10">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={width * 0.3 || 60}
          height={40}
        />
      </div>
    </header>
  );
};

export default HeaderMobile;
