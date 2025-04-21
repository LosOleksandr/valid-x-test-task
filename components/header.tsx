import { verifySession } from '@/lib/session';
import Image from 'next/image';
import Link from 'next/link';
import Button from './shared/button';
import LogoutButton from './shared/logout-button';

const Header = async () => {
  const { isAuth } = await verifySession();

  return (
    <header className="sticky flex items-center border-b p-2">
      <Link href={'/'} className="flex items-center">
        <Image src={'/logo.png'} alt="logo" width={44} height={44} />
        <h2 className="font-sans text-xl">TechThreads</h2>
      </Link>
      {isAuth ? (
        <LogoutButton />
      ) : (
        <Button className="ml-auto px-4" variant="outline">
          <Link href={'/login'}>Login</Link>
        </Button>
      )}
    </header>
  );
};

export default Header;
