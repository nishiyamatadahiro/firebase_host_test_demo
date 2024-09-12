package com.example.auto_web_android

import android.app.Activity
import android.webkit.JavascriptInterface
import android.webkit.WebView

class WebViewJavaScript {

    companion object {
        var riset = "1"
        private const val CONST_JAVA_SCRIPT_NAME = "Android"

        var webView: WebView? = null

        private const val TITLE_EDIT_JS =
            "let title=document.querySelector('meta[name=\"app-title\"].content');" +
                    "if(title===undefined||title==null){title=document.title;}" +
                    "if(title!=null){$CONST_JAVA_SCRIPT_NAME.setTitle(title);}"

        fun addJavascriptInterface(view: WebView, activity: Activity) {
            webView = view
            view.addJavascriptInterface(WebAppInterface(activity), CONST_JAVA_SCRIPT_NAME)
        }

        fun startJavascript(view: WebView, javacoed: String) {
            webView = view
            val script = "javascript:{ localStorage.tv_auto_site = " +riset + "; " + javacoed +"};"

            view.loadUrl(script)
        }

    }
}

class WebAppInterface(val activity: Activity) {
    @JavascriptInterface
    fun appDate(toast: String) {
        WebViewJavaScript.riset = toast
    }
    /**
     * ブランク用WebViewを開く
     */
    @JavascriptInterface
    fun blank(url: String) {
        WebViewJavaScript.webView?.loadUrl(url)
    }
}