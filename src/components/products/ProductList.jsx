import { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Product from './Product'
import Modal from '../modals/addModal'
import EditModal from '../modals/editModal'
import AdaptiveProduct from './AdaptiveProduct'

const sorts = [
	{ id: 1, name: 'name', label: 'Наименование' },
	{ id: 2, name: 'vendorCode', label: 'Артикул' },
	{ id: 3, name: 'count', label: 'Количество' },
	{ id: 4, name: 'price', label: 'Стоимость' },
]

const ProductList = () => {
	const [sort, setSort] = useState({ to: '', name: '' })
	const [modal, setModal] = useState(false)
	const [editModal, setEditModal] = useState(false)

	const { products } = useSelector(state => state.products)

	return (
		<>
			<EditModal modal={editModal} setModal={setEditModal} />
			<Modal modal={modal} setModal={setModal} />
			<div
				className={`relative shadow-md ${
					products.length < 7 ? 'h-[77.2vh]' : ''
				} dark:bg-gray-900 py-11 px-9`}
			>
				<div className='pb-4 mb-11 max-[530px]:flex-col bg-white dark:bg-gray-900 flex justify-between items-center gap-y-5'>
					<div className='relative mt-1 w-full'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full'>
							<svg
								className='w-5 h-5 text-gray-500 dark:text-gray-400'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
									clipRule='evenodd'
								></path>
							</svg>
						</div>
						<input
							type='text'
							id='table-search'
							className='block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 max-[530px]:w-full dark:focus:border-blue-500'
							placeholder='Search htmlFor items'
						/>
					</div>
					<div className=' flex gap-4 max-[530px]:w-full justify-end'>
						<button
							type='button'
							className='text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none focus:ring-lime-300 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg px-7 py-1.5 text-center text-lg active:translate-y-1 active:shadow-none duration-200 active:duration-200'
							onClick={() => setModal(!modal)}
						>
							Add
						</button>
					</div>
				</div>
				<table className='w-full max-[785px]:hidden text-sm text-left text-gray-500 dark:text-gray-400 '>
					<thead className='text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							{sorts.map(item => (
								<th
									key={item.id}
									onClick={() => {
										if (sort.to == '') setSort({ to: 'a-b', name: item.name })
										else if (sort.to == 'a-b')
											setSort({ to: 'b-a', name: item.name })
										else if (sort.to == 'b-a')
											setSort({ to: 'a-b', name: item.name })
									}}
									scope='col'
									className='px-6 py-3 select-none active:bg-slate-400 cursor-pointer active:duration-200 duration-200 active:text-slate-900 hover:bg-slate-500 hover:text-slate-800'
								>
									<div className='flex gap-2 items-center'>
										<p>{item.label}</p>
										{sort.name == item.name ? (
											<Image
												src='/arrow.svg'
												className={`duration-300 ${
													sort.to === 'a-b' && sort.name === item.name
														? 'rotate-0 translate-y-1'
														: 'rotate-180 -translate-y-1'
												}`}
												width={15}
												height={15}
												alt=''
											/>
										) : null}
									</div>
								</th>
							))}
							<th
								scope='col'
								className='px-6 py-3 select-none active:bg-slate-400 cursor-pointer active:duration-200 duration-200 active:text-slate-900 hover:bg-slate-500 hover:text-slate-800'
							>
								Действия
							</th>
						</tr>
					</thead>
					<tbody className='rounded-xl'>
						{products?.map(product => (
							<Product
								key={product.id}
								setEditModal={setEditModal}
								product={product}
							/>
						))}
					</tbody>
				</table>
				<div className='flex-wrap justify-between max-[530px]:justify-center gap-y-10 hidden max-[785px]:flex '>
					{products?.map(product => (
						<AdaptiveProduct
							setEditModal={setEditModal}
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default ProductList
