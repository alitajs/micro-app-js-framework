import Device from './device';

if (!window.alita) {
    window.alita = {};
}

const plugins = [
    Device,
];

/**
 * 初始化单个插件
 * @param any plugin 插件
 */
export function registerPlugin(plugin) {
    const { nativePluginName, jsPluginName, methodsList } = plugin;
    if (!window.alita[jsPluginName]) {
        window.alita[jsPluginName] = {};
    }
    methodsList.forEach(methodName => {
        window.alita[jsPluginName][methodName] = (data) => {
            return new Promise((resolve, reject) => {
                WebViewJavascriptBridge.callHandler(`${nativePluginName}.${methodName}`, data === undefined ? null : data, (responseData) => {
                    resolve(responseData);
                });
            });
        };
    });
}

/**
 * 初始化内置插件
 */
export function registerPlugins() {
    plugins.forEach((plugin) => {
        registerPlugin(plugin);
    });
}
