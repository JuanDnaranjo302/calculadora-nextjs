export interface LoggerEntry {
	error: unknown;
	message: string;
	type: "error" | "warn" | "info" | "debug";
	module: string;
}

export function log({ error, message, type, module }: LoggerEntry): void {
	const entry = { module, message, error };
	if (type === "error") console.error(entry);
	else if (type === "warn") console.warn(entry);
	else if (type === "debug") console.debug(entry);
	else console.info(entry);
}
