/** Set `NEXT_PUBLIC_GTM_ID` in `.env.local` (e.g. `GTM-WVZ6Z3CR`). */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";

export const isGtmEnabled = GTM_ID.length > 0 && GTM_ID.startsWith("GTM-");
