module.exports = function (eleventyConfig) {
	return {
		dir: {
			input: "src",
			includes: "_Shared",
			data: "_data",
			output: "dist/Views",
		},
		pathPrefix: "/",
		templateFormats: ["njk", "md", "html"],
	};
};
/*
npm run build       # 정적 HTML 생성
npm run serve       # 로컬 서버 실행
*/
