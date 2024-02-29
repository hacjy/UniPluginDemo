package com.hacjy.uniplugin_base.uni

import com.alibaba.fastjson.JSONObject
import com.hacjy.uniplugin_base.base.Callback
import io.dcloud.feature.uniapp.bridge.UniJSCallback

class UniCallback(
        private val callback: UniJSCallback?
) : Callback() {
    override fun success(data: Any?) {
        callback?.invoke(data)
    }

    override fun failure(code: String, message: String) {
        callback?.invoke(JSONObject().apply {
            put("code", code)
            put("message", message)
        })
    }
}
