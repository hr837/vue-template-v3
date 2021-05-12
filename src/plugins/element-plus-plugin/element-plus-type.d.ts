declare type ElFrom = {
	validate: (callback?: (result: boolean) => void) => Promise<boolean>;
	resetFields: () => void;
	$el: HTMLElement;
};
