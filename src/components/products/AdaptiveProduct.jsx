import { deleteProduct, productDetail } from '@/store/apiCalls'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const AdaptiveProduct = ({ product, setEditModal }) => {
	const [options, setOptions] = useState(false)

	const productObject = [
		{ id: 1, key: 'Наименование', value: product.name },
		{ id: 2, key: 'Артикул', value: product.vendorCode },
		{ id: 3, key: 'Количество', value: product.count },
		{ id: 4, key: 'Стоимость', value: `$${product.price}` },
	]

	const dispatch = useDispatch()

	function handleDelete(id) {
		deleteProduct(dispatch, id)
	}

	return (
		<div className='w-[47%] max-[530px]:w-5/6 bg-indigo-950 active:translate-y-[0.5px] select-none hover:duration-300 duration-200 active:shadow-[0_10px_40px_-25px_white] hover:-translate-y-[0.5px] hover:shadow-[0_18px_40px_-15px_white] p-6 rounded-xl relative'>
			<div
				onMouseLeave={() => setOptions(false)}
				className={`absolute ${
					options ? 'opacity-100 z-10' : 'opacity-0 -z-10'
				} bg-slate-400 flex-col flex duration-300 rounded-lg overflow-hidden right-6`}
			>
				<button
					className='py-1 px-4 hover:via-orange-400 hover:to-orange-500 hover:from-orange-200 duration-200 hover:bg-gradient-to-br focus:outline-none shadow-lg hover:duration-200'
					onClick={() => {
						productDetail(dispatch, product.id)
						setEditModal(true)
					}}
				>
					Update
				</button>
				<button
					className='py-1 px-4 hover:bg-slate-600 hover:via-red-400 hover:to-red-500 duration-200 hover:from-red-200 hover:bg-gradient-to-br focus:outline-none shadow-lg hover:duration-200'
					onClick={() => handleDelete(product.id)}
				>
					Delete
				</button>
			</div>
			<table className=' w-full text-white mb-3 '>
				<div className='mb-4 flex justify-end'>
					<Image
						src='/options.svg'
						onClick={e => {
							setOptions(!options)
							e.stopPropagation()
						}}
						className='cursor-pointer rounded-lg p-1 active:bg-slate-900'
						width={25}
						height={25}
						alt=''
					/>
				</div>
				<thead></thead>
				<tbody className='flex flex-col gap-y-4'>
					{productObject.map(item => (
						<tr
							className='flex justify-between text-xs sm:text-sm adaptive-product-item'
							key={item.id}
						>
							<th className='shadow-[0_1.5px_0_whit] font-light w-full text-left'>
								{item.key}:
							</th>
							<td className='shadow-[0_1.5px_0_whit] w-full font-light text-right'>
								{item.value}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default AdaptiveProduct
