function initBridge() {
  window.alitanative = 'web';

  if (window.WebViewJavascriptBridge) {
    return;
  }

  if (!window.onerror) {
    window.onerror = function (msg, url, line) {
      console.log("WebViewJavascriptBridge: ERROR:" + msg + "@" + url + ":" + line);
    }
  }
  window.WebViewJavascriptBridge = {
    callHandler: callHandler,
  };

  function callHandler(handlerName, data, responseCallback) {
    console.log('callHandler')
    switch (handlerName) {
      case 'device.platform':
        responseCallback({ status: 0, message: 'success', responseData: 'web' });
        break;
      case 'media.chooseImage':
        responseCallback({ status: 0, message: 'success', responseData: { files: [{ path: 'https://alitajs.com/assets/ad/umi3banner.jpeg', base64: '' }] } });
        break;
      default:
        responseCallback({ status: 3, message: 'error: handlerName not found!' });
        break;
    }
  }
}
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development' && !window.alitanative) {
  initBridge();
}
