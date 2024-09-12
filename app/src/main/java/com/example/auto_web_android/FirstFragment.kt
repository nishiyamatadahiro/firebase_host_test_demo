package com.example.auto_web_android

import android.graphics.Bitmap
import android.os.Bundle
import android.os.Looper
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.fragment.app.Fragment
import com.example.auto_web_android.databinding.FragmentFirstBinding

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class FirstFragment : Fragment() {

    private var _binding: FragmentFirstBinding? = null

    private var stop = false

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {

        _binding = FragmentFirstBinding.inflate(inflater, container, false)
        binding.web.webViewClient = getWebViewClient()
        binding.web.settings.apply {
            this.setJavaScriptEnabled(true)
            this.setDomStorageEnabled(true)
            this.setUseWideViewPort(true)
            this.setLoadWithOverviewMode(true)
            this.setSupportZoom(true)
            this.setBuiltInZoomControls(true)
            this.setDisplayZoomControls(false)
            this.setSupportMultipleWindows(true)
            this.userAgentString = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36"
        }

        WebViewJavaScript.addJavascriptInterface( binding.web, requireActivity())
        binding.web.loadUrl("https://t-mall.tsite.jp/entamenews/?scid=top_3sen")


        return binding.root

    }

    protected fun getWebViewClient() = object : WebViewClient() {

        override fun onPageFinished(view: WebView, url: String) {
            super.onPageFinished(view, url)
        }

        override fun onPageStarted(view: WebView, url: String, favicon: Bitmap?) {
            super.onPageStarted(view, url, favicon)
        }

        override fun onReceivedError(
            view: WebView,
            request: WebResourceRequest,
            error: WebResourceError
        ) {
            super.onReceivedError(view, request, error)
        }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.buttonFirst.setOnClickListener {
            WebViewJavaScript.riset = binding.input.text.toString()
            startAuto()
        }
        binding.stop.setOnClickListener {
            stop = true
        }

    }

    private fun startAuto(){
        stop = false
        startVPointAuto()
    }

    private fun startVPointAuto(){
        if(stop){
            return
        }
        android.os.Handler(Looper.getMainLooper()).postDelayed( {
            WebViewJavaScript.startJavascript(
                binding.web,
                resources.assets.open("content.js").bufferedReader().readText()
            )
            startVPointAuto()
        },2000L)
    }



    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}