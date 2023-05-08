import {
	addAll,
	addFailure,
	addStart,
	addSuccess,
	updateStart,
	updateFailure,
	updateSuccess,
	deleteFailure,
	deleteStart,
	deleteSuccess,
	detailFailure,
	detailStart,
	detailSuccess,
} from './productSlice'

export const addProduct = (dispatch, product) => {
	dispatch(addStart())
	try {
		dispatch(addSuccess(product))
	} catch (err) {
		dispatch(addFailure())
		console.log(err)
	}
}

export const productDetail = (dispatch, id) => {
	dispatch(detailStart())
	try {
		dispatch(detailSuccess(id))
	} catch (err) {
		dispatch(detailFailure())
		console.log(err)
	}
}

export const all = (dispatch, products) => {
	dispatch(addAll(products))
}

export const deleteProduct = (dispatch, id, push) => {
	dispatch(deleteStart())
	try {
		dispatch(deleteSuccess(id))
		push('/')
	} catch (err) {
		dispatch(deleteFailure())
		console.log(err)
	}
}

export const checkedDelete = (dispatch, array) => {
	dispatch(deleteStart())
	try {
		array.forEach(item => {
			dispatch(deleteSuccess(item))
		})
	} catch (err) {
		dispatch(deleteFailure())
		console.log(err)
	}
}

export const updateProduct = (dispatch, product) => {
	dispatch(updateStart())
	try {
		dispatch(updateSuccess(product))
	} catch (err) {
		dispatch(updateFailure())
		console.log(err)
	}
}
