export default function httpRequest(method, url, data) {
	return new Promise(function(resolve, reject) {
		uni.request({
			method,
			url,
			data,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			},
		});
	});
}