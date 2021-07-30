import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => (
	<nav>
		<div className="logo">
			{/* use Image from next/image instead of img standard for dynamic images */}
			<Image src="/logo.svg" width={128} height={77} />
		</div>
		<Link href="/">
			{/* use Link from next/link instead of a link and change href to Link */}
			<a>Home</a>
		</Link>
		<Link href="/about">
			<a>About</a>
		</Link>
		<Link href="/list">
			<a>Hurley listing</a>
		</Link>
	</nav>
);

export default Navbar;
