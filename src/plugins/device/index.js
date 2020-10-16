const device = {
  pluginName: 'device',
  methodsList: [
    'platform',
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