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
      case 'device.scanCode':
        responseCallback({ status: 0, message: 'success', responseData: { result: 'web 开发时这个值是固定的，要想获得真实的数据，请在真机上调试' } });
        break;
      case 'device.systemInfo':
        responseCallback({
          status: 0, message: 'success', responseData: {
            platform: 'web',
            version: '1.0.0',
            uuid: 'uuid',
            statusBarHeight: '60',
            SDKVersion: '0.0.1-beta.7'
          }
        });
        break;
      case 'device.openWeb':
        window.open("http://www.alitajs.com");
        responseCallback({ status: 0, message: 'success', responseData: 'success' });
        break;
      case 'device.fetchMicroAppList':
        responseCallback({ status: 0, message: 'success', responseData: { list: [] } });
        break;
      case 'device.openMicroApp':
        responseCallback({ status: 0, message: 'success', responseData: 'web 中无法打开微应用，请在真机或模拟器上调试' });
        break;
      case 'device.getUserData':
        responseCallback({ status: 0, message: 'success', responseData: { files: [{ path: 'https://alitajs.com/assets/ad/umi3banner.jpeg', base64: '' }] } });
        break;

      case 'file.openDocument':
        responseCallback({ status: 0, message: 'success', responseData: 'web 中无法打开文件，请在真机或模拟器上调试' });
        break;
      case 'file.saveFile':
        responseCallback({ status: 0, message: 'success', responseData: 'web 中无法保存文件，请在真机或模拟器上调试' });
        break;
      case 'media.chooseImage':
        responseCallback({ status: 0, message: 'success', responseData: { files: [{ path: 'https://alitajs.com/assets/ad/umi3banner.jpeg', base64: '' }] } });
        break;

      case 'ui.setNavBar':
        responseCallback({ status: 0, message: 'success', responseData: 'web 中无法修改状态栏，请在真机或模拟器上调试，如果是 web 项目，可修改 alita-layout 的 navBar' });
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
