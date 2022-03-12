import db from '$lib/database'
import { getLinks } from '$lib/database/link'
 
export async function get() {
	try {
    return {
      body: { links: await getLinks(db) }
    }
	} catch (error) {
		console.error(error)
		return {
			status: 404
		}
	}
 
}