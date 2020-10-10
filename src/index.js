import Device from './Device';

if (!window.alita) {
    window.alita = {}
}

const plugins = [
    Device,
]

plugins.forEach((plugin) => {
    registerPlugin(plugin);
})

function registerPlugin(plugin) {
    const { nativePluginName, jsPluginName, methodsList } = plugin;
    if (!window.alita[jsPluginName]) {
        window.alita[jsPluginName] = {};
    }
    methodsList.forEach(methodName => {
        window.alita[jsPluginName][methodName] = (data) => {
            return new Promise((resolve, reject) => {
                WebViewJavascriptBridge.callHandler(`${nativePluginName}.${methodName}`, data === undefined ? null : data, (responseData) => {
                    resolve(responseData);
                })
            })
        }
    });
}