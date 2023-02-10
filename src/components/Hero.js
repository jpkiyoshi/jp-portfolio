import React from 'react';
import HeroImg from '../assets/hero-img.png';

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Hero = () => {
	return (
		<section className='px-5 py-32 text-white bg-primary'>
			<div className='container grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between'>
				<div className='pb-5 hero-info md:pb-0'>
					<h1 className='text-4xl lg:text-6xl'>
						Olá, <br />
						Sou João Paulo <span className='text-accent'>Kiyoshi</span> <br />
						Desenvolvedor Front-end
					</h1>

					<div className='flex py-5 mb-4'>
						<a
							href='https://github.com/jpkiyoshi'
							className='inline-block pr-4 text-accent hover:text-white'
						>
							{' '}
							<AiOutlineGithub size={40} />{' '}
						</a>
						<a
							href='https://www.linkedin.com/in/joao-paulo-kiyoshi/'
							className='inline-block pr-4 text-accent hover:text-white'
						>
							{' '}
							<AiOutlineLinkedin size={40} />{' '}
						</a>
					</div>

					<a
						href='/#projects'
						className=' btn bg-accent rounded border-2 border-[#7477FF] text-white px-6 mt-16 py-3 hover:bg-transparent'
					>
						Ver Projetos
					</a>
				</div>

				<div className='hero-img'>
					<img
						src={HeroImg}
						alt='coding illustration'
						className='lgw-[80%] ml-auto'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
