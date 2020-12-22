/// <reference path="../plugins/device/types/index.d.ts" />
/// <reference path="../plugins/media/types/index.d.ts" />
/// <reference path="../plugins/ui/types/index.d.ts" />
/// <reference path="../plugins/file/types/index.d.ts" />

interface AlitaBridge {
    callHandler: (handlerName: string, data: any, responseCallback: (response: any) => void) => void;
    registerPlugin: (pugin: { pluginName: string; methodsList: string[] }) => void;
}

interface Alita {
    device: Device;
    media: Media;
    file: File;
    ui: UI;
}

interface Window {
    /**
     * @name alita 微应用SDK
     * @description 一些设备相关的接口
     */
    alita: Alita;
    /**
     * @ignore
     */
    WebViewJavascriptBridge: AlitaBridge;
}