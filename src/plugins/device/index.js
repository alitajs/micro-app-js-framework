const device = {
  pluginName: 'device',
  methodsList: [
    'platform',
    'scanCode',
    'systemInfo',
    'openWeb',
    'fetchMicroAppList',
    'openMicroApp',
    'getUserData',
  ],
  hooks: {
    platform: () => {
      return new Promise((resolve, reject) => {
        resolve('web');
      });
    }
  }
}

export default device;