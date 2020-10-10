interface AlitaBridge {
    callHandler: (handlerName: string, data: any, responseCallback: (response: any) => void) => void;
}

declare var WebViewJavascriptBridge: AlitaBridge;

interface Alita {

}

declare var alita: Alita;

