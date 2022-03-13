import type { SupabaseClient } from '@supabase/supabase-js'

import type Link from '$lib/types/Link'

const getLinks = async (sb: SupabaseClient): Promise<Link[]> => {
	const { data, error } = await sb
		.from('links').select('*')
		.limit(15)
		.order('inserted_at', { ascending: false })

	if (error) {
		throw error
	}
	return data
}

const insertLink = async (sb: SupabaseClient, link: Link): Promise<void> => {
	const { error } = await sb.from('links').insert(link)
	if (error) {
		throw error
	}
}

export {
	getLinks,
	insertLink
}