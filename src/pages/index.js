import Layout from '@/components/layout/Layout'
import ProductList from '@/components/products/ProductList'

export default function Home() {
	return (
		<Layout>
			<div className='pt-14 bg-slate-900'>
				<ProductList />
			</div>
		</Layout>
	)
}
