interface Media {
    /**
     * @name 选择图片
     * @description 调用原生能力选择图片，支持多选
     */
    chooseImage: (params?: { count: number; sizeType: Array<'original' | 'compressed'>; sourceType: Array<'album' | 'camera'>; base64: boolean }) => Promise<{ files: Array<{ path?: string; thumbnail?: string; base64?: string }> }>
}