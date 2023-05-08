import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
	name: 'user',
	initialState: {
		oneProduct: null,
		selectedProducts: [],
		products: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		addStart: state => {
			state.isFetching = true
			state.error = false
		},
		addSuccess: (state, action) => {
			state.isFetching = false
			state.products.push(action.payload)
		},
		addFailure: state => {
			state.isFetching = false
			state.error = true
		},
		updateStart: state => {
			state.isFetching = true
			state.error = false
		},
		updateSuccess: (state, action) => {
			state.isFetching = false
			state.products[
				state.products.findIndex(item => item.id === action.payload.id)
			] = action.payload
			state.error = false
		},
		updateFailure: state => {
			state.isFetching = false
			state.error = true
		},
		deleteStart: state => {
			state.isFetching = true
			state.error = false
		},
		deleteSuccess: (state, action) => {
			state.isFetching = false
			state.products.splice(
				state.products.findIndex(item => item.id === action.payload),
				1
			)
			state.error = false
		},
		deleteFailure: state => {
			state.isFetching = false
			state.error = true
		},
		detailStart: state => {
			state.isFetching = true
			state.error = false
		},
		detailSuccess: (state, action) => {
			state.isFetching = false
			state.products.map(item => {
				if (item.id == action.payload) {
					state.oneProduct = item
				}
			})
			state.error = false
		},
		detailFailure: state => {
			state.isFetching = false
			state.error = true
		},
		addAll: (state, action) => {
			state.products = action.payload
		},
	},
})

export const {
	addStart,
	addSuccess,
	addFailure,
	detailStart,
	detailSuccess,
	detailFailure,
	deleteStart,
	deleteSuccess,
	deleteFailure,
	updateStart,
	updateSuccess,
	updateFailure,
	addAll,
} = productSlice.actions
export default productSlice.reducer
