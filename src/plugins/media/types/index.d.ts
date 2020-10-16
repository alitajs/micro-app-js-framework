interface Media {
    chooseImage: (params: { count: number; sizeType: Array<'original' | 'compressed'>; sourceType: Array<'album' | 'camera'>; base64: boolean }) => Promise<{ files: Array<{ path: string; base64: string }> }>
}