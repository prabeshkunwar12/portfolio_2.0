import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Hero = () => {
	return (
		<MaxWidthWrapper>
			<div className='flex flex-col h-[calc(100vh-3.5rem)] mx-auto justify-center md:items-center -my-[3.5rem]'>
				<div className='flex flex-col gap-y-4 sm:gap-y-8 md:gap-y-12 lg:gap-y-20'>
					<h1 className=' font-bold text-xl md:text-2xl lg:text-3xl text-left text-neutralCode'>
						<span className='text-secondaryCode'>let</span> 
						{" "}prabesh 
						<span className='text-primary'>{" ="}</span>
					</h1>
					<span className=' font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-primaryCode'>
						{"<Web Developer />"}
					</span>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}

export default Hero
