import Layout from '@/components/layout/Layout'
import { deleteProduct, productDetail } from '@/store/apiCalls'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductPage = () => {
	const { oneProduct } = useSelector(state => state.products)
	const dispatch = useDispatch()

	const { query, push, back } = useRouter()

	useEffect(() => {
		productDetail(dispatch, query.id)
	}, [dispatch, query.id])

	function handleDelete(id) {
		deleteProduct(dispatch, id, push)
	}

	return (
		<Layout>
			<div className='bg-white dark:bg-slate-800 h-[77.2vh] flex justify-center items-center flex-col relative'>
				<div className='w-11/12 my-9'>
					<button
						onClick={back}
						type='button'
						className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg hover:duration-200 dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-7 py-2.5 text-center '
					>
						Back
					</button>
				</div>
				<div className='min-w-[300px] max-w-3xl w-11/12'>
					<table className=' w-full text-white mb-9'>
						<thead></thead>
						{oneProduct ? (
							<tbody>
								<tr className='product-item'>
									<th>Наименование:</th>
									<td>{oneProduct.name}</td>
								</tr>
								<tr className='product-item'>
									<th>Артикул:</th>
									<td>{oneProduct.vendorCode}</td>
								</tr>
								<tr className='product-item'>
									<th>Количество:</th>
									<td>{oneProduct.count}</td>
								</tr>
								<tr className='product-item'>
									<th>Стоимость:</th>
									<td>${oneProduct.price}</td>
								</tr>
							</tbody>
						) : null}
					</table>
					<div className='flex justify-between w-full mb-9'>
						<button
							type='button'
							className='text-gray-900 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 hover:bg-gradient-to-br focus:outline-none focus:ring-orange-300 shadow-lg hover:duration-200 shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg px-7 py-2.5 text-center text-lg active:translate-y-1 active:shadow-none duration-200 active:duration-200'
						>
							Update
						</button>
						<button
							type='button'
							className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 dark:shadow-lg hover:duration-200 dark:shadow-red-800/80 font-medium rounded-lg px-7 py-2.5 text-center text-lg active:translate-y-1 active:shadow-none duration-200 active:duration-200'
							onClick={() => handleDelete(oneProduct.id)}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ProductPage
