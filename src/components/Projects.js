import React from 'react';
import adivinheNumero from '../assets/adivinhe-o-numero.png';
import bonitaaoquadrado from '../assets/bonitaaoquadrado.png';
import contasdefadas from '../assets/contas-de-fadas.png';
import jpconverter from '../assets/jp-converter.png';
import frontendmentor from '../assets/frontendmentor.png';

const Projects = () => {
	const projects = [
		{
			img: contasdefadas,
			title: 'Contas de Fadas',
			desc: 'E-commerce desenvolvido utilizando Next.js e Sanity.io, em parceria com o desenvolvedor Jamil Derzi',
			live: 'https://contasdefadas.vercel.app/',
			code: 'https://github.com/jpkiyoshi/contasdefadas-nextjs',
		},
		{
			img: adivinheNumero,
			title: 'Adivinhe o Número',
			desc: 'Jogo de adivinhação desenvolvido completamento do zero, utilizando apenas HTML, CSS e JavaScript.',
			live: 'https://guessthenumber-jp.netlify.app/',
			code: 'https://github.com/jpkiyoshi/adivinhe-o-numero',
		},
		{
			img: bonitaaoquadrado,
			title: 'Bonita AO Quadrado',
			desc: 'Landing page desenvolvida para a loja Bonita AO Quadrado, utilizando HTML, CSS, JavaScript e SASS',
			live: 'https://bonitaaoquadrado.netlify.app/',
			code: 'https://github.com/jpkiyoshi/website_bonita_ao_quadrado',
		},
		{
			img: jpconverter,
			title: 'JP Converter',
			desc: 'Ferramenta que mostra o preço do kg/litro de um produto baseado em seu preço e seu peso/volume.',
			live: 'https://jp-converter.netlify.app/',
			code: 'https://github.com/jpkiyoshi/jp-converter',
		},
		{
			img: frontendmentor,
			title: 'Desafios do frontendmentor.io',
			desc: 'Minhas soluções aos desafios do frontendmentor.io (site que fornece desafios de design e desenvolvimento front-end)',
			live: 'https://www.frontendmentor.io/profile/jpkiyoshi/solutions',
			code: 'https://github.com/jpkiyoshi',
		},
	];

	return (
		<section className='px-5 py-32 text-white bg-primary' id='projects'>
			<div className='container grid items-center mx-auto md:grid-cols-2 md:justify-between'>
				<div className='mb-5 about-info'>
					<h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2'>
						Projetos
					</h2>

					<p className='pb-5'>
						Esses são alguns de meus projetos. Construídos com React, Next.js
						e JavaScript vanilla.
					</p>
				</div>

				<div className='about-img'></div>
			</div>

			<div className='container grid gap-10 mx-auto projects md:grid-cols-3'>
				{projects.map((project, i) => {
					return (
						<div className='relative' key={i}>
							<img
								src={project.img}
								alt={project.title}
								className='object-cover'
							/>
							<div className='flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 '>
								<p className='px-2 py-5 font-bold text-center text-white'>
									{project.desc}
								</p>

								<div className='mx-auto'>
									<a
										href={project.live}
										className='px-5 py-2 mr-5 font-bold bg-blue-500 hover:bg-blue-600'
									>
										Link
									</a>
									<a
										href={project.code}
										className='px-5 py-2 font-bold bg-blue-700 hover:bg-blue-800'
									>
										GitHub
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
