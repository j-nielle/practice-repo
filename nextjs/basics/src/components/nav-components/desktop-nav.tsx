import LogoPlaceholder from '@/components/logo-placeholder';
import NavLinks from './nav-links';

export default function DesktopNav() {
	return (
		<div className="nav-div">
			<LogoPlaceholder />
				<div>
					<NavLinks />
				</div>
			<LogoPlaceholder />
    </div>
/* 		<ul className="nav-div">
      <NavLinks />
    </ul> */
	)
}