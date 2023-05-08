import React from 'react'
import { Navbar } from 'flowbite-react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Nav = () => {
	const { push } = useRouter()

	return (
		<Navbar
			fluid={true}
			className='fixed w-full z-10 bg-gray-900 dark:bg-[rgb(55,65,81,0.6)] backdrop-blur-[5px] shadow-xl'
		>
			<Navbar.Brand to='/' onClick={() => push('/')} className='cursor-pointer'>
				<Image
					src='/logo.svg'
					className='mr-3 h-6 sm:h-9'
					width={24}
					height={24}
					alt='Flowbite Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Products
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href='/'>Home</Navbar.Link>
				<Navbar.Link href='/products'>Products</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Nav
