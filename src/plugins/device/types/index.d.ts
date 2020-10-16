interface Device {
    /**
     * @name 平台
     * @description 获取当前所在的平台，模拟环境下返回 web
     */
    platform: () => Promise<'ios' | 'android'>
}