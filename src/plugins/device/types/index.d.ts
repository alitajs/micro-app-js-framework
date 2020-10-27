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
  systemInfo: () => Promise<SystemInfo>;
  openWeb: (url: string) => Promise<any>;
}

interface SystemInfo {
  platform: string; // ios or android
  version: string; // 主app版本，如1.0.0
  uuid: string; // 设备唯一标识
  statusBarHeight: number;  // 导航栏高度
  SDKVersion: string; // 微应用基础库版本号，如1.0.0
}
