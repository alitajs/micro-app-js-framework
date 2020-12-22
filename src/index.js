import { setupWebViewJavascriptBridge } from "./setupJSBridge";
import { registerPlugins, registerPlugin } from "./plugins";
import "./browser";

const alitaBridgeReady = () => {
  let myEvent = new CustomEvent("AlitaBridgeReady", {});
  // 随后在对应的元素上触发该事件
  if (document.dispatchEvent) {
    document.dispatchEvent(myEvent);
  } else {
    document.fireEvent(myEvent);
  }
};

setupWebViewJavascriptBridge(function (bridge) {
  bridge.fireDocumentEvent = (type, data) => {
    const event = new CustomEvent(type, { detail: data });
    document.dispatchEvent(event);
  };
  registerPlugins();
  window.WebViewJavascriptBridge.registerPlugin = registerPlugin;
  alitaBridgeReady();
});
