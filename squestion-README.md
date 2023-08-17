## 常见问题

### 1.Cannot find module 'eslint-plugin-prettier'

npm i eslint-plugin-prettier@latest -D

### 2.使用 useCallback，useMemo 时 函数经常获取不到最新的值

使用 useRef 来解决

在文件 all 中有碰到， 下拉选择 tag，分页下拉请求时不是最新的

### 3.dag 画面开启 scroll，画布延长了，但是节点被遮挡了

解决：1.在开启 scroll 情况下 不能再使用 padding 来开启平移功能，需要在 scroll 内开启平移功能，这样整体拖拽的时候不会超出画布，拖拽节点的话，会延长画布，达到不会遮挡的目的

2. 在开启 scroll 情况下 不能再使用 autoResize: true, 自动缩放，需要设置为 false
