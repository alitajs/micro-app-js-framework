interface UI {
    /**
     * @name 设置导航栏
     * @param params.backgroundColor    背景色，只支持十六进制
     * @param params.color  标题颜色，只支持十六进制
     * @param params.fontSize 字体大小
     */
    setNavBar: (params: { backgroundColor: string; color: string; fontSize: string; }) => Promise<void>;
}