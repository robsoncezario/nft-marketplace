import { MINT_MODAL_TOGGLE_VISIBILITY } from './types';

const initialState = {
	isVisible: undefined,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case MINT_MODAL_TOGGLE_VISIBILITY:
			return {
				...state,
				...{
					isVisible: action.payload,
				},
			};
		default:
			return state;
	}
}
