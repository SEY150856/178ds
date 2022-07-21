import request from './request'

// 首页banner
export function getBannerList(params) {
	return new Promise((resolve, reject) => {
		request.post("index/banner", params).then((result) => {
			resolve(result)
		}).catch(err => {
			reject(err)
		});
	});
}

//首页news
export function getnewslist(params) {
	return new Promise((resolve, reject) => {
		request.post("info/desc", params).then((result) => {
			resolve(result)
		}).catch(err => {
			reject(err)
		});
	});
}

//文章页面列表
export function postArticle(params) {
	return new Promise((resolve, reject) => {
		request.post("/info/desc", params).then((result) => {
			resolve(result);
		}).catch((error) => {
			reject(error);
		});
	});
}

//文章页面x详情
export function postArticleDetails(params) {
	return new Promise((resolve, reject) => {
		request.post("/info/n_details", params).then((result) => {
			resolve(result);
		}).catch((error) => {
			reject(error);
		});
	});
}











// 如果说比较懒，或者是不想这么麻烦，也可直接用这两个，调用的时候第一个参数换成接口地址即可
export function httpGet(url, params) {
	return new Promise((resolve, reject) => {
		request.get(url, params).then((result) => {
			resolve(result)
		}).catch(err => {
			reject(err)
		});
	});
}

export function httpPost(url, params) {
	return new Promise((resolve, reject) => {
		request.post(url, params).then((result) => {
			resolve(result)
		}).catch(err => {
			reject(err)
		});
	});
}
