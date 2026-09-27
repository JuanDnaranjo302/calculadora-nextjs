export function formatCurrency(amount: number, currency = "COP", locale = "es-CO"): string {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
		maximumFractionDigits: currency === "COP" ? 0 : 2,
	}).format(amount);
}
