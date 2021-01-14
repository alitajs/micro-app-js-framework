interface NoticeParams {
  name: string; // 通知名称
  userInfo: { [key: string]: any }; // 传给原生的参数
}

interface Notice {
  /**
   * @name postMessage
   * @description 给原生发送通知
   */
  postMessage(params: NoticeParams);
}
