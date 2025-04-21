import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky flex items-center border-b p-2">
      <Image src={'/logo.png'} alt="logo" width={44} height={44} />
      <h2 className="font-sans text-xl">TechThreads</h2>
    </header>
  );
};

export default Header;
