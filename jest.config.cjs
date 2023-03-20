module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['@testing-library/react'],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
};
