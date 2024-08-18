import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 border-b-2 border-custom-green">
      <div className="flex-1">
        <Image src="/logo.png" alt="Klasik" width={150} height={50} />
      </div>
      <div className="text-black font-campton">
        <p className="text-lg tracking-widest">HERKES İÇİN KLASİK MÜZİK</p>
      </div>
      <div>
        <button className="text-3xl bg-transparent border-none cursor-pointer">
          ≡
        </button>
      </div>
    </header>
  );
};

export default Header;
