import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => setToggle(!toggle);

	return (
		<header className='fixed z-10 flex justify-between w-full px-5 py-2 text-white bg-primary'>
			<a href='/' className='text-2xl font-bold logo text-accent'>
				<span className='text-white'>JP</span> Kiyoshi
			</a>

			{/* Desktop Nav */}
			<nav className='hidden md:block'>
				<ul className='flex'>
					<li>
						<a href='/#about'>Sobre</a>
					</li>
					<li>
						<a href='/#projects'>Projetos</a>
					</li>

					<li>
						<a href='/#contact'>Contato</a>
					</li>
				</ul>
			</nav>

			{/* Mobile Nav */}
			<nav className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}>
				<ul className='flex flex-col'>
					<li>
						<a href='/#about'>Sobre</a>
					</li>
					<li>
						<a href='/#projects'>Projetos</a>
					</li>

					<li>
						<a href='/#contact'>Contato</a>
					</li>
				</ul>
			</nav>

			{/* Toggle button */}
			<button onClick={handleToggle} className='block md:hidden'>
				{!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
			</button>
		</header>
	);
};

export default Header;
