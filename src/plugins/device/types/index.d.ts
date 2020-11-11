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
  scanCode: (params: { onlyFromCamera?: boolean }) => Promise<{ result: string }>;
  /**
   * @name 获取系统信息
   */
  systemInfo: () => Promise<SystemInfo>;
  /**
   * @name 打开网页
   * @param {string} url 地址
   */
  openWeb: (url: string) => Promise<any>;
  /**
   * @name 获取微应用列表
   */
  fetchMicroAppList: () => Promise<{ list: Array<MicroApp> }>;
  /**
   * @name 打开微应用
   * @param {MicroApp} app 微应用
   * @param {any} userData 传给微应用的参数
   */
  openMicroApp: (params: { app: MicroApp; userData: any }) => Promise<any>;
  /**
   * @name 从原生获取初始化信息
   */
  getUserData: () => Promise<any>;
}

interface SystemInfo {
  platform: string; // ios or android
  version: string; // 主app版本，如1.0.0
  uuid: string; // 设备唯一标识
  statusBarHeight: number;  // 导航栏高度
  SDKVersion: string; // 微应用基础库版本号，如1.0.0
}

interface MicroApp {
  id: string;
  appid: string;  // 微应用appid
  appsecret: string;
  appName: string;  // 微应用名称
  appDesc: string;
  appIconUrl: string; // 微应用图标
  versionId: string;  // 微应用版本id
}
