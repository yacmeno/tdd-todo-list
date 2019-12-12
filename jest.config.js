module.exports = {
	roots: ["<rootDir>/__tests__"],
	setupFilesAfterEnv: ["./jest.setup.js"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)",
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};
