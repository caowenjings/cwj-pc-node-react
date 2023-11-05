import { Rule } from 'antd/es/form';

// 统一的表单校验
/** 使用案例
 *   <Form.Item
        label="目录"
        name="basePath"
        required
        rules={[{ required: true, message: "请输入HDFS位置，以/开头" },
          filePath(),
          filePathspecialChar()
        ]}
      >
    <Form.Item />
*/

// 每一个的列都会一个colums，将rules写入，采用Promise 解决校验重叠
export function regex(exp: string | RegExp, errorMsg: string = `格式错误`): Rule {
  return {
    validator: (rule, value, callback) => {
      const regExp = new RegExp(exp);
      if (!value) return Promise.resolve();
      if (!regExp.test(value)) {
        return Promise.reject(errorMsg);
      } else {
        return Promise.resolve();
      }
    }
  };
}

export function filePathspecialChar(): Rule {
  const reg = /^[^\:; ? + # % & * < > | [ \]]+$/;
  return regex(reg, '不能包含以下字符 \\ : ; ? + # % & * < > | [ ]');
}

export function email() {
  const reg = /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  return regex(reg, '邮箱格式错误');
}
