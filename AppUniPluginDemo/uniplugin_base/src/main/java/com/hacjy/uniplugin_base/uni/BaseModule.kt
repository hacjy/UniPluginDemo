package com.hacjy.uniplugin_base.uni

import android.util.Log
import com.alibaba.fastjson.JSONObject
import com.hacjy.uniplugin_base.base.BaseManager
import io.dcloud.feature.uniapp.annotation.UniJSMethod
import io.dcloud.feature.uniapp.bridge.UniJSCallback
import io.dcloud.feature.uniapp.common.UniModule

/**
 * 对外开放的调用模块
 */
class BaseModule : UniModule() {
    companion object {
        var manager: BaseManager? = null
            private set
    }

    private val PREFIX = "com.hacjy.uniplugin_base."

    //内部具体实现类
    private val manager = BaseManager(emit = { methodName, data -> emit(methodName, data) })

    init {
        BaseModule.manager = manager
    }

    //发送事件给uniapp 在uniapp主要是使用GlobalEvent模块
    private fun emit(methodName: String, data: Map<String, Any?>?) {
        mUniSDKInstance.fireGlobalEventCallback(PREFIX + methodName, data)
    }

    @UniJSMethod(uiThread = false)
    fun callMethod(params: JSONObject?, callback: UniJSCallback?) {
        params?.getString("method")?.let { methodName ->
            manager.javaClass.declaredMethods.find { it.name == methodName }?.let { function ->
                function.let { method ->
                    try {
                        val parameters = mutableListOf<Any?>()
                        params.getJSONObject("args")?.toMap()?.toMutableMap()?.let {
                            if (methodName == "create") {
                                it["context"] = mUniSDKInstance.context.applicationContext
                            }
                            parameters.add(it)
                        }
                        method.invoke(manager, *parameters.toTypedArray(), UniCallback(callback))
                    } catch (e: Exception) {
                        Log.e("BaseModule Exception", e.toString())
                    }

                }

            }
        }
    }
}