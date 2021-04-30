import { State } from "./types";

export default {
	updateDirectory(state: State, directory: string) {
		state.directory = directory;
	},
};
