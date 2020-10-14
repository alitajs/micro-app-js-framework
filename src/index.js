import { setupWebViewJavascriptBridge } from './setupJSBridge';
import { registerPlugins } from './plugins';

setupWebViewJavascriptBridge(function (bridge) {
    bridge.fireDocumentEvent = (type, data) => {
        const event = new CustomEvent(type, { detail: data });
        document.dispatchEvent(event);
    }
    registerPlugins();
});