/** @type {import('./$types').LayoutLoad} */
export async function load() {
    return {};
}

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs18.x'
};