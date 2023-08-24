keyof 获取对象的属性值，只能用于对象
typeof 获取其类型和必传属性
partial 变成可选项 (Partial 支持你先定义变量，再通过变量来定义类型)
Required 变成必选项
pick 获取指定属性的类型，得到新类型  
------type ObjType = {name: string;age: number;}
------type Person = Pick<ObjType, 'name'> == type ObjType = {name: string}

## 使用案例

### 1.类型设置

interface{
style?: React.CSSProperties;
onClick: (e: React.MouseEvent) => {}
}

<!-- 对象定义 -->

interface cate {
text: string;
color: string;
}

interface TagDict {
[index: string]: cate;
}

export const DICT: TagDict = {
top: { text: '置顶', color: COLOR_RED },
good: { text: '精华', color: COLOR_ORANGE_DEEP },
};

### 2.默认值以及类型设置 https://www.cnblogs.com/qiqi715/p/14954081.html

const defaultProps = {
name: 'Stranger',
age: 1
};

type IProps = typeof defaultProps; ====> 等价于 {name：string,age:number}
type IProps1 = Partial<typeof defaultProps>; ====> 等价于 {name?：string,age?:number}
type IProps2 = {like: number} & Partial<typeof defaultProps >; ====> 等价于 {like：number,name?：string,age?:number}

### 3.接口定义

#### 4.1 interface 接口中的函数定义

https://blog.csdn.net/weixin_44959855/article/details/121631562

const defaultOption = {
initPage: 1,
initPageSize: 10
};

interface Option extends Partial<typeof defaultOption> {
onSave:(name：string) => void // 没有返回值的函数
say(): string, // 表示是一个函数，返回值是 string
isNoMore?(result: any): boolean; // 表示是一个可选函数，返回值是 boolean 类型，参数是 result
}

### 4.泛型

如果要求第一个参数的类型和第二个参数的类型相同，那就是要泛型

function identity <T>(value:T) : T {return value}
等价于 ||
function identityNumber(value: number): number { return value}

### 5.确定了参数名，进行类型

const WJInfo: React.FC<{ value: IInfoProps | undefined }> = (props) => {
