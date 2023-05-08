import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
	const [isVis, setIsVis] = useState(false)
	const [email, setEmail] = useState('')
	const [code, setCode] = useState('')
	const [pass, setPass] = useState('')

	const { push } = useRouter()

	function handlePush() {
		// if (!email.trim() || !code.trim() || !pass.trim()) {
		// 	alert('Some inputs are empty')
		// 	return
		// }

		push('/products')
	}

	return (
		<div className='pt-14 bg-slate-900'>
			<form
				action=''
				className='flex flex-col gap-y-7 max-w-2xl w-4/5 mx-auto py-24'
				onSubmit={e => {
					// e.preventDefault()
					handlePush()
				}}
			>
				<h2 className='text-4xl text-white font-black'>Admin panel</h2>
				<div>
					<label
						htmlFor='name'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Email
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type='text'
						id='name'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='vendorCode'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Admin code
					</label>
					<input
						onChange={e => setCode(e.target.value)}
						type='text'
						id='vendorCode'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='count'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Password
					</label>
					<input
						onChange={e => setPass(e.target.value)}
						type={`${isVis ? 'text' : 'password'}`}
						id='count'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
						required
					/>
					<div className='flex justify-end pt-3 text-blue-600'>
						<p onClick={() => setIsVis(!isVis)} className='cursor-pointer'>
							показать пароль
						</p>
					</div>
				</div>
				{/* <div>
					<label
						htmlFor='price'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Price
					</label>
					<input
						type='text'
						id='price'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
						required
					/>
				</div> */}
				<div className='flex justify-end pt-5'>
					<button
						type='button'
						className='text-gray-900 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-7 py-1.5 text-center text-lg active:translate-y-1 active:shadow-none duration-200 active:duration-200'
						onClick={handlePush}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}
