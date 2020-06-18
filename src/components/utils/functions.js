import { getFromStorage } from './storage'
import firebase from '../../firebase'

export async function verifyUser(callback) {
	const obj = getFromStorage('the_main_app')
	if (obj) {
		const tempTokon = obj.token
		fetch('/auth/verify?token=' + tempTokon).then((res) => res.json()).then((json) => {
			callback(json, tempTokon)
		})
	}
}

export function getUsername(uid, callback) {
	firebase
		.database()
		.ref('users/' + uid)
		.once('value')
		.then((snapshot) => {
			callback(snapshot.val().username)
		})
		.catch((err) => {
			return err
		})
}
