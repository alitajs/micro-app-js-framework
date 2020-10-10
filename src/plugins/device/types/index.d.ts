interface Device {
    platform: () => Promise<'ios' | 'android'>
}

interface Alita {
    device: Device;
}