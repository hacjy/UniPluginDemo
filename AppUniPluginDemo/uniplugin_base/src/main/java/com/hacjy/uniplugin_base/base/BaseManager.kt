package com.hacjy.uniplugin_base.base

import android.util.Log

open class BaseManager(
    private val emit: (methodName: String, data: Map<String, Any?>?) -> Unit
) {
    private val TAG = "BaseManager"

    fun create(params: Map<String, *>, callback: Callback) {
        Log.d("$TAG", "create")
        callback.code(0)
    }

    fun setMessage(params: Map<String, *>, callback: Callback) {
        Log.d("$TAG", "setMessage")

        val data = "setMessage success"
        val methodName = "onSetMessage"
        emit(
            methodName,
            hashMapOf("data" to data)
        )

        callback.code(0)
    }
}