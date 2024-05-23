import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Hero = () => {
	return (
		<MaxWidthWrapper>
			<div className='flex flex-col h-[calc(100vh-3.5rem)] mx-auto justify-center md:items-center -my-24 gap-y-4'>
				<div>
					<h1 className=' font-bold text-xl text-left text-zinc-600 dark:text-zinc-300'>
						<span className='text-green-600 dark:text-green-300'>let</span> 
						{" "}prabesh 
						<span className='text-primary'>{" ="}</span>
					</h1>
					<span className=' font-bold text-4xl sm:text-6xl md:text-7xl text-primary'>
						{"<Web Developer />"}
					</span>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}

export default Hero
