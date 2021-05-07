declare type ElFrom = {
	validate: () => Promise<boolean>;
	resetFields: () => void;
};
