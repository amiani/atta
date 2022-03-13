import sb from '$lib/database'
import { getLinks } from '$lib/database/link'
 
export async function get() {
	try {
    return {
      body: { links: await getLinks(sb) }
    }
	} catch (error) {
		console.error(error)
		return {
			status: 404
		}
	}
 
}