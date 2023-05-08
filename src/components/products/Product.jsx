import { deleteProduct, productDetail } from '@/store/apiCalls'
import { unSelect } from '@/store/productSlice'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Product = ({ product, setEditModal }) => {
	const { push } = useRouter()
	const dispatch = useDispatch()

	useEffect(() => {
		if (product.checked === false) {
			dispatch(unSelect(product.id))
		}
	}, [product, dispatch])

	function handleDelete(id) {
		deleteProduct(dispatch, id)
	}

	return (
		<tr
			onClick={() => push(`/product/${product.id}`)}
			className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
		>
			{/* <td className='w-4 p-4'>
				<div className='flex items-center'>
					<input
						onClick={e => {
							// e.preventDefault()
							e.stopPropagation()
							handleCheck(product)
						}}
						id='checkbox-table-search-1'
						type='checkbox'
						defaultChecked={product.checked}
						className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600/'
					/>
					<label htmlFor='checkbox-table-search-1' className='sr-only'>
						checkbox
					</label>
				</div>
			</td> */}
			<th
				scope='row'
				className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
			>
				{product.name}
			</th>
			<td className='px-6 py-4'>{product.vendorCode}</td>
			<td className='px-6 py-4'>{product.count}</td>
			<td className='px-6 py-4'>{`$${product.price}`}</td>
			<td className='py-4' onClick={e => e.stopPropagation()}>
				<div className='pr-7'>
					<button
						type='button'
						className='text-gray-900 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 hover:bg-gradient-to-br focus:outline-none focus:ring-orange-300 shadow-lg hover:duration-200 shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-tl-lg rounded-bl-lg px-4 py-1 text-center text-sm active:translate-y-1 active:shadow-none duration-200 active:duration-200'
						onClick={() => {
							productDetail(dispatch, product.id)
							setEditModal(true)
						}}
					>
						Update
					</button>
					<button
						type='button'
						className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 dark:shadow-lg hover:duration-200 dark:shadow-red-800/80 font-medium rounded-tr-lg rounded-br-lg px-4 py-1 text-center text-sm active:translate-y-1 active:shadow-none duration-200 active:duration-200'
						onClick={() => handleDelete(product.id)}
					>
						Delete
					</button>
				</div>
			</td>
		</tr>
	)
}

export default Product
