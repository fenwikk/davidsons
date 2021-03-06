import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SVELTE_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Site = {
	id: string;
	site_info: SiteData;
	admins: string[];
	pages: Page[];
};

export type SiteData = {
	title: string;
	tagline: string;
	ico?: string;
	ico_url?: string;
};

export interface Page {
	slug: string;
	title: string;
	description: string;
	use_tagline: boolean;
	sections: Section[];
}

export interface Section {
	heading: string;
	body: string;
	ctas: CTA[];
}

export interface CTA {
	text: string;
	url: string;
}
