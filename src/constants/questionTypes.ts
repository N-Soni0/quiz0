export const questionTypes = [
	'select',
    'multiple-select'
] as const;

export const questionTypesNames: Record<(typeof questionTypes)[number], string> = {
    'multiple-select': 'Multiple Select',
    'select': 'Select'
};
