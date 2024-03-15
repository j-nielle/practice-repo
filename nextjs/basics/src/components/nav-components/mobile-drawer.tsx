import Link from 'next/link';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileDrawer({ isOpen, onClose }: { onClose: MouseEventHandler, isOpen: boolean}) {
  const pathname = usePathname()
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-5xl" icon={faXmark} />
      </button>
      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="text-xl hover:text-blue-900 hover:font-semibold">
          <Link className={`link ${pathname === '/posts' ? 'nav-active' : 'nav-inactive'}`} href="/posts">Posts</Link>
        </li>
        <li className="text-xl hover:text-blue-900 hover:font-semibold">
          <Link className={`link ${pathname === '/' ? 'nav-active' : 'nav-inactive'}`} href="/">Home</Link>
        </li>
        <li className="text-xl hover:text-blue-900 hover:font-semibold">
          <Link className={`link ${pathname === '/formik' ? 'nav-active' : 'nav-inactive'}`} href="/formik">Formik</Link>
        </li>
      </ul>
    </div>
  );
}