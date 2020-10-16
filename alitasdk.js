/**
* Created by xiaohuoni on 2020/6/30.
*/
// 所有的方法都有统一的参数格式。
// 如:Alita.getSystemInfo({success,fail,...otherProps});
// success 成功回调
// fail 失败回调

// TODO: 这里的方法可能也需要原生提供，或者看日志需要输出到什么位置决定
Alita.debug = console.log;
/**
* AlitaSDK 的主类
*/
class AlitaClass {

}

/**
* AlitaSDK(JSB)接口定义，只有在 Alita 微应用上才支持导出该接口，其他情况下为 mock 方案。引用其他的文件。
* @module Alita
* @class Alita(JSB)
* @constructor
* **/
var AlitaBridge = AlitaClass.extend({
  /**
  * 基础能力:获取系统信息
  */
  getSystemInfo: function () { },

  /**
  * 基础能力:获取当前主应用信息
  */
  getAppInfo: function () { },

  /**
  * 路由: 退出微应用，返回主应用
  */
  back: function () {
  },

  /**
  * 网络: 发起 HTTPS 网络请求。
  * @param {*} data fetch 参数 如 {url:"", data:"", header:"", filePath:""} 等
  */
  request: function (data) {
  },

  /**
  * 网络: 下载文件资源到本地
  * @param {*} data {url:"", data:"", header:"", filePath:"下载后保存路径"}
  */
  downloadFile: function (data) {
  },

  /**
  * 网络: 将本地资源上传到服务器
  * @param {*} data {url:"", filePath:"", name:"", header:"", formData:""}
  */
  uploadFile: function (data) {
  },
  // TODO: 这里需要补充 WebSocket 连接的方法

  /**
  * 图片: 保存图片到系统相册
  * @param {*} data { filePath:'图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径' }
  */
  saveImageToPhotosAlbum: function (data) {
  },

  /**
  * 图片: 全屏预览大图，调用的是原生的视图
  * @param {*} data { filePath:'图片文件路径' }
  */
  previewImage: function (data) {
  },

  /**
  * 图片: 压缩图片，一般用于上传接口之前调用
  * @param {*} data { filePath:'图片文件路径',quality:'压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）' }
  */
  compressImage: function (data) {
  },

  /**
  * 文件: 选择一个文件（看看是否需要转成 base64）
  * @param {*} data {count:'选择数量',type:'默认是图片，支持文件格式file',extension:'文件后缀名，当type为文件时，有效'}
  */
  chooseMessageFile: function (data) {
  },

  /**
  * 图片: 从本地相册选择图片或使用相机拍照
  * @param {*} data {count:'选择数量',sizeType:'所选的图片的尺寸 ['original', 'compressed']',sourceType:'选择图片的来源 ['album', 'camera']'}
  */
  chooseImage: function (data) {
  },

  /**
  * 位置: 获取用户的地理坐标
  */
  getLocation: function () {
  },

  /**
  * 开发能力: 统一登录接口，考虑一下如果直接获取 token 这个接口就不需要
  */
  login: function () {
  },

  /**
  * 开发能力: 获取用户的唯一ID
  */
  getUID: function () {
  },

  /**
  * 开发能力: 获取当前用户的有效 token
  */
  getToken: function () {
  },

  /**
  * 支付
  * @param {*} data { payType:'支付宝，微信',...other 支付需要的数据参数 }
  */
  requestPayment: function (data) {
  },

  /**
  * 扫码，打开扫一扫页面，原生视图，最后返回扫码结果就行
  */
  scanCode: function () {
  },

  /**
  * 分享
  * @param data {title:"", desc:"", link:"", imgUrl:""}
  * title: 分享标题
  * desc: 分享描述
  * link: 分享的链接
  * imgUrl: 分享的图标 url
  * @returns {boolean}
  */
  share: function (data) {
  },

});

var AlitaAndroid = AlitaBridge.extend({
  // TODO: 预想的包名
  _className: "com/alitajs/platform/javascript/AppActivity",
  _callGetStringMethod: function (method) {
    return jsb.reflection.callStaticMethod(this._className, method, "()Ljava/lang/String;");
  },

  _callGetIntMethod: function (method) {
    return jsb.reflection.callStaticMethod(this._className, method, "()I");
  },

  _callVoidMethod: function (method) {
    return jsb.reflection.callStaticMethod(this._className, method, "()V");
  },

  /**
  * 基础能力:获取系统信息
  */
  getSystemInfo: function () {
    this._callVoidMethod("getSystemInfo");
  },

  /**
  * 基础能力:获取当前主应用信息
  */
  getAppInfo: function () {
    this._callVoidMethod("getAppInfo");
  },

  /**
  * 路由: 退出微应用，返回主应用
  */
  back: function () {
    this._callVoidMethod("back");
  },

  /**
  * 网络: 发起 HTTPS 网络请求。
  * @param {*} data fetch 参数 如 {url:"", data:"", header:"", filePath:""} 等
  */
  request: function (data) {
  },

  /**
  * 网络: 下载文件资源到本地
  * @param {*} data {url:"", data:"", header:"", filePath:"下载后保存路径"}
  */
  downloadFile: function (data) {
  },

  /**
  * 网络: 将本地资源上传到服务器
  * @param {*} data {url:"", filePath:"", name:"", header:"", formData:""}
  */
  uploadFile: function (data) {
  },
  // TODO: 这里需要补充 WebSocket 连接的方法

  /**
  * 图片: 保存图片到系统相册
  * @param {*} data { filePath:'图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径' }
  */
  saveImageToPhotosAlbum: function (data) {
  },

  /**
  * 图片: 全屏预览大图，调用的是原生的视图
  * @param {*} data { filePath:'图片文件路径' }
  */
  previewImage: function (data) {
  },

  /**
  * 图片: 压缩图片，一般用于上传接口之前调用
  * @param {*} data { filePath:'图片文件路径',quality:'压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）' }
  */
  compressImage: function (data) {
  },

  /**
  * 文件: 选择一个文件（看看是否需要转成 base64）
  * @param {*} data {count:'选择数量',type:'默认是图片，支持文件格式file',extension:'文件后缀名，当type为文件时，有效'}
  */
  chooseMessageFile: function (data) {
  },

  /**
  * 图片: 从本地相册选择图片或使用相机拍照
  * @param {*} data {count:'选择数量',sizeType:'所选的图片的尺寸 ['original', 'compressed']',sourceType:'选择图片的来源 ['album', 'camera']'}
  */
  chooseImage: function (data) {
  },

  /**
  * 位置: 获取用户的地理坐标
  */
  getLocation: function () {
    this._callVoidMethod("getLocation");
  },

  /**
  * 开发能力: 统一登录接口，考虑一下如果直接获取 token 这个接口就不需要
  */
  login: function () {
    this._callVoidMethod("login");
  },

  /**
  * 开发能力: 获取用户的唯一ID
  */
  getUID: function () {
    this._callVoidMethod("getUID");
  },

  /**
  * 开发能力: 获取当前用户的有效 token
  */
  getToken: function () {
    this._callVoidMethod("getToken");
  },

  /**
  * 支付
  * @param {*} data { payType:'支付宝，微信',...other 支付需要的数据参数 }
  */
  requestPayment: function (data) {
  },

  /**
  * 扫码，打开扫一扫页面，原生视图，最后返回扫码结果就行
  */
  scanCode: function () {
    this._callVoidMethod("bascanCodeck");
  },

  /**
  * 分享
  * @param data {title:"", desc:"", link:"", imgUrl:""}
  * title: 分享标题
  * desc: 分享描述
  * link: 分享的链接
  * imgUrl: 分享的图标 url
  * @returns {boolean}
  */
  share: function (data) {
    return jsb.reflection.callStaticMethod(this._className,
      "share",
      "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Z",
      data['title'],
      data['desc'],
      data['link'],
      data['imgUrl']
    );
  },

});

var AlitaIOS = AlitaBridge.extend({
  /**
  * 基础能力:获取系统信息
  */
  getSystemInfo: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "getSystemInfo");
  },

  /**
  * 基础能力:获取当前主应用信息
  */
  getAppInfo: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "getAppInfo");
  },

  /**
  * 路由: 退出微应用，返回主应用
  */
  back: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "back");
  },

  /**
  * 网络: 发起 HTTPS 网络请求。
  * @param {*} data fetch 参数 如 {url:"", data:"", header:"", filePath:""} 等
  */
  request: function (data) {
  },

  /**
  * 网络: 下载文件资源到本地
  * @param {*} data {url:"", data:"", header:"", filePath:"下载后保存路径"}
  */
  downloadFile: function (data) {
  },

  /**
  * 网络: 将本地资源上传到服务器
  * @param {*} data {url:"", filePath:"", name:"", header:"", formData:""}
  */
  uploadFile: function (data) {
  },
  // TODO: 这里需要补充 WebSocket 连接的方法

  /**
  * 图片: 保存图片到系统相册
  * @param {*} data { filePath:'图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径' }
  */
  saveImageToPhotosAlbum: function (data) {
  },

  /**
  * 图片: 全屏预览大图，调用的是原生的视图
  * @param {*} data { filePath:'图片文件路径' }
  */
  previewImage: function (data) {
  },

  /**
  * 图片: 压缩图片，一般用于上传接口之前调用
  * @param {*} data { filePath:'图片文件路径',quality:'压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）' }
  */
  compressImage: function (data) {
  },

  /**
  * 文件: 选择一个文件（看看是否需要转成 base64）
  * @param {*} data {count:'选择数量',type:'默认是图片，支持文件格式file',extension:'文件后缀名，当type为文件时，有效'}
  */
  chooseMessageFile: function (data) {
  },

  /**
  * 图片: 从本地相册选择图片或使用相机拍照
  * @param {*} data {count:'选择数量',sizeType:'所选的图片的尺寸 ['original', 'compressed']',sourceType:'选择图片的来源 ['album', 'camera']'}
  */
  chooseImage: function (data) {
  },

  /**
  * 位置: 获取用户的地理坐标
  */
  getLocation: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "getLocation");
  },

  /**
  * 开发能力: 统一登录接口，考虑一下如果直接获取 token 这个接口就不需要
  */
  login: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "login");
  },

  /**
  * 开发能力: 获取用户的唯一ID
  */
  getUID: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "getUID");
  },

  /**
  * 开发能力: 获取当前用户的有效 token
  */
  getToken: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "getToken");
  },

  /**
  * 支付
  * @param {*} data { payType:'支付宝，微信',...other 支付需要的数据参数 }
  */
  requestPayment: function (data) {
  },

  /**
  * 扫码，打开扫一扫页面，原生视图，最后返回扫码结果就行
  */
  scanCode: function () {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge", "scanCode");
  },

  /**
  *
  * @param data {title:"", desc:"", link:"", imgUrl:""}
  * title: 分享标题
  * desc: 分享描述
  * link: 分享的链接
  * imgUrl: 分享的图标 url
  * @returns {boolean}
  */
  share: function (data) {
    return jsb.reflection.callStaticMethod("AlitaLocalJSBridge",
      "share:desc:link:imgUrl:",
      data['title'],
      data['desc'],
      data['link'],
      data['imgUrl']);
  }
});

var AlitaNative = {
  log: {
    _DEBUG: 0,
    _WARN: 1,
    _ERROR: 2,
    _level: 0,
    d: function (text) {
      if (this._DEBUG >= this._level) {
        Alita.debug(text);
      }
    },
    w: function (text) {
      if (this._WARN >= this._level) {
        Alita.debug(text);
      }
    },
    e: function (text) {
      if (this._ERROR >= this._level) {
        Alita.debug(text);
      }
    }
  },

  _bridge: null,
  /**
  * <p>初始化Alita，Alita的所有接口都需要在该接口回调获得结果之后进行。</p>
  * <p>Alita.init是个异步接口，只有callback回调后调用</p>
  * @method init
  * @param callback {function} 获得初始化结果后的回调方法
  * @return {boolean} 返回true表示初始成功，否则初始化失败
  * */
  init: function (callback) {
    if (window['alitanative'] === null) {
      this.log.e("init Failed: it's not native!");
      return false;
    }

    var os = window['alitanative'];
    this.log.d("os:" + os);
    if (os === "Android") {
      this.log.d("Android");
      this._bridge = new AlitaAndroid();
    } else if (os === "IOS") {
      this.log.d("IOS");
      this._bridge = new AlitaIOS();
    } else {
      this.log.d("Others OS");
      this._bridge = new AlitaBridge();
    }
    if (typeof callback == "function") {
      callback();
    }
    return true;
  },

  /**
  * 基础能力:获取系统信息
  */
  getSystemInfo: function () {
    this._bridge.back();
  },
  /**
  * 基础能力:获取当前主应用信息
  */
  getAppInfo: function () {
    this._bridge.back();
  },
  /**
  * 路由: 退出微应用，返回主应用
  */
  back: function () {
    this._bridge.back();
  },

  /**
  * 网络: 发起 HTTPS 网络请求。
  * @param {*} data fetch 参数 如 {url:"", data:"", header:"", filePath:""} 等
  */
  request: function (data) {
  },

  /**
  * 网络: 下载文件资源到本地
  * @param {*} data {url:"", data:"", header:"", filePath:"下载后保存路径"}
  */
  downloadFile: function (data) {
  },

  /**
  * 网络: 将本地资源上传到服务器
  * @param {*} data {url:"", filePath:"", name:"", header:"", formData:""}
  */
  uploadFile: function (data) {
  },
  // TODO: 这里需要补充 WebSocket 连接的方法

  /**
  * 图片: 保存图片到系统相册
  * @param {*} data { filePath:'图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径' }
  */
  saveImageToPhotosAlbum: function (data) {
  },

  /**
  * 图片: 全屏预览大图，调用的是原生的视图
  * @param {*} data { filePath:'图片文件路径' }
  */
  previewImage: function (data) {
  },

  /**
  * 图片: 压缩图片，一般用于上传接口之前调用
  * @param {*} data { filePath:'图片文件路径',quality:'压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）' }
  */
  compressImage: function (data) {
  },

  /**
  * 文件: 选择一个文件（看看是否需要转成 base64）
  * @param {*} data {count:'选择数量',type:'默认是图片，支持文件格式file',extension:'文件后缀名，当type为文件时，有效'}
  */
  chooseMessageFile: function (data) {
  },

  /**
  * 图片: 从本地相册选择图片或使用相机拍照
  * @param {*} data {count:'选择数量',sizeType:'所选的图片的尺寸 ['original', 'compressed']',sourceType:'选择图片的来源 ['album', 'camera']'}
  */
  chooseImage: function (data) {
  },

  /**
  * 位置: 获取用户的地理坐标
  */
  getLocation: function () {
    this._bridge.back();
  },

  /**
  * 开发能力: 统一登录接口，考虑一下如果直接获取 token 这个接口就不需要
  */
  login: function () {
    this._bridge.back();
  },

  /**
  * 开发能力: 获取用户的唯一ID
  */
  getUID: function () {
    this._bridge.back();
  },

  /**
  * 开发能力: 获取当前用户的有效 token
  */
  getToken: function () {
    this._bridge.back();
  },

  /**
  * 支付
  * @param {*} data { payType:'支付宝，微信',...other 支付需要的数据参数 }
  */
  requestPayment: function () {
    this._bridge.back();
  },

  /**
  * 扫码，打开扫一扫页面，原生视图，最后返回扫码结果就行
  */
  scanCode: function () {
    this._bridge.back();
  },

  /**
  * 分享接口，调用该接口弹出分享选择界面。在init接口之后调用。
  * @method share
  * @param data 分享参数
  * @param data.title {string} 分享标题
  * @param data.desc {string} 分享描述
  * @param data.link {string} 分享的链接
  * @param data.imgUrl {string} 分享的图标 url
  * @return {boolean} 是否分享成功
  */
  share: function (data) {
    var stringKeys = ['title', 'desc', 'link', 'imgUrl'];
    if (!data) {
      this.log.e("data 参数非法");
      return false;
    }

    var valid = true;
    var errmsg = "";
    for (var i = 0; i < stringKeys.length; i++) {
      if (typeof data[stringKeys[i]] != 'string') {
        valid = false;
        errmsg = stringKeys[i] + ": 必须是字符串"
        break;
      }
    }
    if (!valid) {
      this.log.e(errmsg);
      return false;
    }
    return this._bridge.share(data);
  },
};
// TODO: 这里要加环境判断
if (this['alitanative'] != null) {
  Alita.debug("Bind Alita to AlitaNative.");
  Alita = AlitaNative;
};
