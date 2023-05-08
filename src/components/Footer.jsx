import Image from 'next/image'
import { useRouter } from 'next/router'

const Footer = () => {
	const { push } = useRouter()

	return (
		<footer className='bg-white dark:bg-gray-900'>
			<div className='w-full max-w-screen-xl mx-auto p-4 py-8'>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<button
						onClick={() => push('/')}
						className='flex items-center mb-4 sm:mb-0'
					>
						<Image
							src='/logo.svg'
							className='h-8 mr-3'
							width={32}
							height={32}
							alt='Flowbite Logo'
						/>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							Products
						</span>
					</button>
					<ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
						<li>
							<a href='#' className='mr-4 hover:underline md:mr-6 '>
								About
							</a>
						</li>
						<li>
							<a href='#' className='mr-4 hover:underline md:mr-6'>
								Privacy Policy
							</a>
						</li>
						<li>
							<a href='#' className='mr-4 hover:underline md:mr-6 '>
								Licensing
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline'>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className='border-gray-200 sm:mx-auto dark:border-gray-700 my-8' />
				<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2023{' '}
					<a href='https://flowbite.com/' className='hover:underline'>
						Products™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}

export default Footer
