import { setupWebViewJavascriptBridge } from './setupJSBridge';
import { registerPlugins } from './plugins';

setupWebViewJavascriptBridge(function (bridge) {
    registerPlugins();
});