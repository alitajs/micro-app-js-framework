interface AlitaBridge {
    callHandler: (handlerName: string, data: any, responseCallback: (response: any) => void) => void;
}

declare var WebViewJavascriptBridge: AlitaBridge;

interface Alita {
    device: Device;
    media: Media;
}

declare var alita: Alita;

