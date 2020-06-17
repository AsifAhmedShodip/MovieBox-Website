

export const getFromStorage = (key) => {
	if (!key) return null

	try {
		const value = localStorage.getItem(key)
		if (value) {
			return JSON.parse(value)
		}
		return null
	} catch (error) {
		return null
	}
}

export const setInStorage = (key, obj) => {
	if (!key) console.error('No key')

	console.log(obj)
	try {
		localStorage.setItem(key, JSON.stringify(obj))
	} catch (error) {
		console.error(error)
	}
}
