import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/store/store'
// import { ThemeProvider } from '@material-tailwind/react'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
	return (
		<main className={inter.className}>
			<Head>
				<title>Products</title>
			</Head>
			<PersistGate loading={null} persistor={persistor}>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</PersistGate>
		</main>
	)
}
