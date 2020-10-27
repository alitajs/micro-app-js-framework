interface File {
  /**
   * @name 打开文件
   * @description 调用原生能力打开文件，支持pdf、doc、ppt、xls、jpg等
   * @param {string} url 文件地址
   */
  openDocument: (params: { url: string }) => Promise<any>;
  /**
   * @name 保存文件到本地
   * @param {string} url 文件地址
   */
  saveFile: (params: { url: string }) => Promise<any>;
}