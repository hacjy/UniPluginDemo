"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = void 0;
//====以上几行代码必须定义，否则运行后会报_base._default.xxx is not function===

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}
	return obj;
}

//在package.json中module名称组成=id-类名,否则会找不到module
const BaseModule = uni.requireNativePlugin('Uni-Base-BaseModule');
const BaseEvent = uni.requireNativePlugin('globalEvent');

let engine;
let Prefix = "com.hacjy.uniplugin_base."

class BaseEngine {
	constructor() {
		_defineProperty(this, "_listeners", new Map());
	}

	static async create(context) {

		if (engine) return engine;
		try {
			await BaseEngine._callMethod('create', {
				config: {
					...context
				},
				appType: 14
			});
		} catch (e) {
			console.log(e)
		}
		engine = new BaseEngine();
		return engine;

	}

	static _callMethod(method, args) {
		console.log("_callMethod run", method, args)
		return new Promise((resolve, reject) => {
			BaseModule.callMethod({
				method: method,
				args: args
			}, res => {
				console.log("_callMethod callback", res)
				if (res && res.code) {
					reject(res);
				} else {
					resolve(res);
				}
			});
		});
	}

	addListener(event, listener) {
		plus.globalEvent.addEventListener(Prefix+event, listener);
	}

	setMessage(params) {
		console.log('setMessage run')
		return BaseEngine._callMethod('setMessage', {
			params
		});
	}
}

exports.default = BaseEngine;