const device = {
  pluginName: 'device',
  methodsList: [
    'platform',
    'scanCode',
    'systemInfo',
    'openWeb',
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