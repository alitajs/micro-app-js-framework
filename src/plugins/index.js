import Device from './device';
import Media from './media';

if (!window.alita) {
    window.alita = {};
}

const plugins = [
    Device,
    Media,
];

/**
 * 初始化单个插件
 * @param any plugin 插件
 */
export function registerPlugin(plugin) {
    const { pluginName, methodsList, hooks } = plugin;
    if (!window.alita[pluginName]) {
        window.alita[pluginName] = {};
    }
    if (!window.alitanative) {
        window.alita[pluginName] = hooks;
        return;
    }
    methodsList.forEach(methodName => {
        window.alita[pluginName][methodName] = (data) => {
            return new Promise((resolve, reject) => {
                WebViewJavascriptBridge?.callHandler(`${pluginName}.${methodName}`, data === undefined ? null : data, (responseData) => {
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
