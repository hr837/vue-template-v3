declare type ElFrom = {
	validate: (callback?: (result: boolean) => void) => Promise<boolean> | void;
	resetFields: () => void;
};
