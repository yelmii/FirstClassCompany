module.exports = function (eleventyConfig) {
	return {
		dir: {
			input: "src/pages",
			includes: "../_Shared",
			output: "dist",
		},
		templateFormats: ["njk", "md", "html"],
		htmlTemplateEngine: "njk",
    	markdownTemplateEngine: "njk"
	};
};
/*
npm run build       # 정적 HTML 생성
npm run serve       # 로컬 서버 실행
*/
