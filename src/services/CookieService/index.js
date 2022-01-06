import { Cookies } from 'react-cookie';

class CookieService {
	constructor() {
		this.cookies = new Cookies();
	}
}

const cookies = new CookieService().cookies;

export default cookies;
