const device = {
  pluginName: 'device',
  methodsList: [
    'platform',
    'scanCode',
    'systemInfo',
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