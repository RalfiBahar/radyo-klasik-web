import Image from "next/image";
import { Modal } from ".";

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center px-4 py-4 md:px-16 lg:px-64">
      <div className="flex items-center w-1/2 h-full">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={50}
          className="md:w-[150px] md:h-[50px] lg:w-[150px] lg:h-[50px]"
          style={{
            objectFit: "contain",
            objectPosition: "left",
          }}
        />
      </div>
      <div className="flex items-center justify-center md:space-x-4">
        <div className="flex flex-col text-center md:text-right">
          <a
            href="http://www.radyoklasik.online"
            className="text-lg md:text-2xl lg:text-3xl"
          >
            www.radyoklasik.online
          </a>
          <a
            href="http://www.radyoklasik.online"
            className="text-sm md:text-lg"
          >
            HERKES İÇİN KLASİK MÜZİK
          </a>
        </div>
        <Modal />
      </div>
    </header>
  );
};

export default Header;
