import dotenv from 'dotenv';

dotenv.config();

export default {
	app: {
		port: Number(process.env.PORT)
	}
};
