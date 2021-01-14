import Device from './device';
import Media from './media';
import UI from './ui';
import File from './file';
import Location from './location';
import Notice from './notice';

if (!window.alita) {
    window.alita = {};
}

const plugins = [
    Device,
    Media,
    UI,
    File,
    Location,
    Notice
];

const AlitaCommandStatus = {
    OK: 0,
    CLASS_NOT_FOUND_EXCEPTION: 1,
    INVALID_ACTION: 2,
    ERROR: 3,
}

/**
 * 初始化单个插件
 * @param any plugin 插件
 */
export function registerPlugin(plugin) {
    const { pluginName, methodsList, hooks } = plugin;
    if (!window.alita[pluginName]) {
        window.alita[pluginName] = {};
    }

    methodsList.forEach(methodName => {
        window.alita[pluginName][methodName] = (data) => {
            return new Promise((resolve, reject) => {
                WebViewJavascriptBridge?.callHandler(`${pluginName}.${methodName}`, data === undefined ? null : data, (response) => {
                    if (!response) {
                        reject(new Error('调用异常'));
                    } else {
                        const { status, message, responseData } = response;
                        if (AlitaCommandStatus.OK === status) {
                            resolve(responseData);
                        } else {
                            reject(new Error(message));
                        }
                    }
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
