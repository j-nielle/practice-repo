import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
	const pathname = usePathname()
	return (
		<div className="space-x-4">
			<Link className={`link ${pathname === '/posts' ? 'nav-active' : 'nav-inactive'}`} href="/posts">Posts</Link>
			<Link className={`link ${pathname === '/' ? 'nav-active' : 'nav-inactive'}`} href="/">Home</Link>
			<Link className={`link ${pathname === '/formik' ? 'nav-active' : 'nav-inactive'}`} href="/formik">Formik</Link>
		</div>
	)
}
