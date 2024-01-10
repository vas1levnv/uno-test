export interface State {
	queryTextForFriends: string,
	friendsList: Array<object>,
	isShowContent: boolean,
}

export interface Mutations {
	changeQueryTextForFriends(state: State, payload: State['todos'][number]): void;

	deleteTodo(state: State, payload: State['todos'][number]): void;

	setTodos(state: State, payload: State['todos']): void;
}