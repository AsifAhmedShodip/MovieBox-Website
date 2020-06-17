import { getFromStorage } from './storage'

export async function verifyUser(callback) {
	const obj = getFromStorage('the_main_app')
	if (obj) {
		const tempTokon = obj.token
		fetch('/auth/verify?token=' + tempTokon).then((res) => res.json()).then((json) => {
			callback(json,tempTokon)
		})
	}
}
