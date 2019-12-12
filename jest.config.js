module.exports = {
	roots: ["<rootDir>/__tests__"],
	setupFilesAfterEnv: ["./jest.setup.js"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)",
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};
