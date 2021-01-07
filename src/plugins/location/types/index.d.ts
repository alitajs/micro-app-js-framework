interface LocationInfo {
  latitude?: string; // 纬度，范围为 -90~90，负数表示南纬
  longitude?: string; // 经度，范围为 -180~180，负数表示西经
}

interface Location {
  /**
   * @name 获取当前地址
   * @description 调用原生能力获取位置信息
   */
  getLocation: (param: { [key: string]: any }) => Promise<LocationInfo>;
}
