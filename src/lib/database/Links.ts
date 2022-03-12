import type { SupabaseClient } from '@supabase/supabase-js';
import type Link from '../types/Link';

const readLinks = async (supabase: SupabaseClient): Promise<Link[]> => {
	const { data, error } = await supabase.from('links').select('*')
	if (error) {
		throw error
	}
	return data
}

export default readLinks