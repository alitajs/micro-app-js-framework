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
    switch (handlerName) {
      case 'device.platform':
        responseCallback('web');
        break;
      case 'media.chooseImage':
        responseCallback({ files: { path: 'https://alitajs.com/assets/ad/umi3banner.jpeg', base64: '' } });
        break;
      default:
        responseCallback('');
        break;
    }

  }
}

if (process.env.NODE_ENV === 'development' && !window.alitanative) {
  initBridge();
}
