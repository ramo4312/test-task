import { addProduct, updateProduct } from '@/store/apiCalls'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const EditModal = ({ modal, setModal }) => {
	const { oneProduct } = useSelector(state => state.products)

	const [name, setName] = useState('')
	const [vendorCode, setVendorCode] = useState('')
	const [count, setCount] = useState('')
	const [price, setPrice] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		if (oneProduct) {
			setName(oneProduct.name)
			setVendorCode(oneProduct.vendorCode)
			setCount(oneProduct.count)
			setPrice(oneProduct.price)
		}
	}, [oneProduct])

	function handleUpdate() {
		if (!name.trim() || !vendorCode.trim() || !count.trim() || !price.trim()) {
			alert('Some inputs are empty')
			return
		}

		const product = {
			id: oneProduct.id,
			name,
			vendorCode,
			count,
			price,
		}

		updateProduct(dispatch, product)
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
						className='bg-gray-900 p-8 rounded-2xl min-w-[300px] max-[640px]:w-4/6 max-w-3xl w-4/5'
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
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white max-[640px]:text-xs'
								>
									Product name
								</label>
								<input
									type='text'
									id='name'
									value={name}
									onChange={e => setName(e.target.value.trim())}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 max-[640px]:text-xs max-[640px]:p-1.5'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='vendorCode'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white max-[640px]:text-xs'
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
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 max-[640px]:text-xs max-[640px]:p-1.5'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='count'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white max-[640px]:text-xs'
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
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 max-[640px]:text-xs max-[640px]:p-1.5'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='price'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white max-[640px]:text-xs'
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
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 max-[640px]:text-xs max-[640px]:p-1.5'
									required
								/>
							</div>
							<div className='flex justify-end'>
								<button
									type='button'
									className='text-gray-900 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 hover:bg-gradient-to-br focus:outline-none focus:ring-orange-300 shadow-lg hover:duration-200 shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg px-7 py-2.5 text-center text-lg active:translate-y-1 active:shadow-none duration-200 active:duration-200 max-[640px]:text-sm max-[640px]:py-2 max-[640px]:px-5'
									onClick={handleUpdate}
								>
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			) : null}
		</>
	)
}

export default EditModal
