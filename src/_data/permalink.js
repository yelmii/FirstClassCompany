module.exports = (data) => {
	console.log(data);
	if (data.page && data.page.fileSlug) {
		return `${data.page.fileSlug}.html`;
	}
	return "index.html"; // 기본값 (index 페이지)
};
