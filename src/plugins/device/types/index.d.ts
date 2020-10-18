interface Device {
  /**
   * @name 平台
   * @description 获取当前所在的平台，模拟环境下返回 web
   */
  platform: () => Promise<'ios' | 'android'>;
  /**
   * @name 扫码
   * @description 调用原生扫描二维码
   * @param {boolean} params.onlyFromCamera 是否只能从相机扫码，不允许从相册选择图片
   */
  scanCode: (params: { onlyFromCamera: boolean }) => Promise<{ result: string }>;
}
