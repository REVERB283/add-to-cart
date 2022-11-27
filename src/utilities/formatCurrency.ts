const CURRENT_FORMATTER = new Intl.NumberFormat(undefined, { currency: "INR", style: "currency" });

export function formatCurrency(num: number) {
	return CURRENT_FORMATTER.format(num);
}
