import React from 'react';
import AboutImg from '../assets/about-img.png';

const About = () => {
	return (
		<section className='px-5 py-32 text-white bg-secondery' id='about'>
			<div className='container grid items-center justify-center mx-auto md:grid-cols-2 md:justify-between'>
				<div className='about-info'>
					<h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>
						Sobre
					</h2>

					<p className='pb-5'>
						Olá! Me chamo João Paulo Kiyoshi, e sou um desenvolvedor front-end
						apaixonado por criar experiências digitais incríveis. Trabalho
						arduamente para transformar ideias em realidade na tela, sempre
						procurando aprender e melhorar minhas habilidades.
					</p>
					<p className='pb-5'>
						Eu tenho uma ampla gama de habilidades na tecnologia da web,
						incluindo conhecimentos profundos em HTML, CSS, JavaScript e
						TypeScript. Além disso, eu tenho experiência em frameworks
						modernos como React e Next.js, bem como em bibliotecas de estilo
						como Styled-Components e TailwindCSS.
					</p>
				</div>

				<div className='about-img'>
					<img
						src={AboutImg}
						alt='coding illustration'
						className='lgw-[80%] md:ml-auto'
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
