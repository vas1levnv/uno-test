export interface Address {
	street: string,
}

export interface Friend {
	id: string | number,
	name: string,
	email: string,
	username: string,
	address: Address,
}

export interface State {
	queryTextForFriends: string,
	friendsList: Array<Friend>,
	isShowContent: boolean,
	friend: Friend,
}


export interface ResponseData {
	data: object
}