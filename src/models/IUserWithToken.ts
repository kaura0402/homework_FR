// Login user and get tokens  дані які отримуєємо при аунтефікації
export interface IUserWithToken {
	firstName: string;
	lastName: string;
	image: string;
	gender: string;
	id: number;
	accessToken: string;
	email: string;
	username: string;
	refreshToken: string;
}


