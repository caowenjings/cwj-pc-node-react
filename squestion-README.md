## 常见问题

### 1.Cannot find module 'eslint-plugin-prettier'

npm i eslint-plugin-prettier@latest -D

### 2.使用 useCallback，useMemo 时 函数经常获取不到最新的值

使用 useRef 来解决

在文件 all 中有碰到， 下拉选择 tag，分页下拉请求时不是最新的
