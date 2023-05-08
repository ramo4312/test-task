import { addProduct } from '@/store/apiCalls'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Modal = ({ modal, setModal }) => {
	const [name, setName] = useState('')
	const [vendorCode, setVendorCode] = useState('')
	const [count, setCount] = useState('')
	const [price, setPrice] = useState('')

	const dispatch = useDispatch()

	function handleAdd() {
		if (!name.trim() || !vendorCode.trim() || !count.trim() || !price.trim()) {
			alert('Some inputs are empty')
			return
		}

		const product = {
			id: Date.now(),
			name,
			vendorCode,
			count,
			price,
		}

		addProduct(dispatch, product)
		setName('')
		setVendorCode('')
		setCount('')
		setPrice('')
		setModal(!modal)
	}

	return (
		<>
			{modal ? (
				<div
					className='w-full h-full fixed backdrop-blur-[5px] bg-[rgb(0,0,0,0.4)] left-0 top-0 z-20 flex justify-center items-center'
					onClick={() => setModal(!modal)}
				>
					<div
						className='bg-gray-900 p-8 rounded-2xl min-w-[300px] max-w-3xl w-4/5'
						onClick={e => e.stopPropagation()}
					>
						<div
							className='flex justify-start mb-10
				'
						>
							<p className='text-2xl font-black text-gray-900 dark:text-white'>
								Add new product
							</p>
						</div>
						<form
							action=''
							className='flex flex-col gap-y-5'
							onSubmit={e => {
								e.preventDefault()
							}}
						>
							<div>
								<label
									htmlFor='name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Product name
								</label>
								<input
									type='text'
									id='name'
									value={name}
									onChange={e => setName(e.target.value.trim())}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='vendorCode'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Vendor code
								</label>
								<input
									type='text'
									id='vendorCode'
									value={vendorCode}
									onChange={e => {
										const value = e.target.value.replace(/\D/g, '')

										setVendorCode(value.trim())
									}}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='count'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Count
								</label>
								<input
									type='text'
									id='count'
									value={count}
									onChange={e => {
										const value = e.target.value.replace(/\D/g, '')

										setCount(value.trim())
									}}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='price'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Price
								</label>
								<input
									type='text'
									id='price'
									value={price}
									onChange={e => {
										const value = e.target.value.replace(/\D/g, '')

										setPrice(value.trim())
									}}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500'
									required
								/>
							</div>
							<div className='flex justify-end'>
								<button
									type='button'
									className='text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none focus:ring-lime-300 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg px-7 py-1.5 text-center text-lg active:translate-y-1 active:shadow-none duration-200 active:duration-200'
									onClick={handleAdd}
								>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			) : null}
		</>
	)
}

export default Modal
