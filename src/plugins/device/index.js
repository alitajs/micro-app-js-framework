const device = {
  pluginName: 'device',
  methodsList: [
    'platform',
    'scanCode',
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