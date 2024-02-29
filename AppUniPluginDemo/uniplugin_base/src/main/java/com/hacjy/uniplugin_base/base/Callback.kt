package com.hacjy.uniplugin_base.base

abstract class Callback {
  fun code(code: Int?, runnable: ((Int?) -> Any?)? = null) {
    if (code == null || code < 0) {
      val newCode = 500
      failure(newCode.toString(), "500 fail")
      return
    }

    val res = if (runnable != null) runnable(code) else Unit
    if (res is Unit) {
      success(null)
    } else {
      success(res)
    }
  }

  fun <T> resolve(source: T?, runnable: (T) -> Any?) {
    if (source == null) {
      val code = 500
      failure(code.toString(), "500 fail")
      return
    }

    val res = runnable(source)
    if (res is Unit) {
      success(null)
    } else {
      success(res)
    }
  }

  abstract fun success(data: Any?)

  abstract fun failure(code: String, message: String)
}
