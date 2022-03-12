import type { SupabaseClient } from '@supabase/supabase-js';

import type Link from '$lib/types/Link';

const getLinks = async (supabase: SupabaseClient): Promise<Link[]> => {
	const { data, error } = await supabase.from('links').select('*')
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