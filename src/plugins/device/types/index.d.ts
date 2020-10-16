interface Device {
    platform: () => Promise<'ios' | 'android'>
}