/** ts使用案例 */
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Input } from 'antd';

const { TextArea } = Input;
const WJTsText: React.FC = () => {
  const textAreaRef: any = useRef(null);
  const [text, setText] = useState('');

  // 定义获取光标位置的函数
  const getCursorPosition = (ctrl: any) => {
    let CaretPos = {
      start: 0,
      end: 0
    };

    if (ctrl?.resizableTextArea?.textArea.selectionStart) {
      CaretPos.start = ctrl?.resizableTextArea?.textArea.selectionStart;
    }
    if (ctrl?.resizableTextArea?.textArea.selectionEnd) {
      CaretPos.end = ctrl?.resizableTextArea?.textArea.selectionEnd;
    }
    return CaretPos;
  };

  const setCursorPosition = (ctrl: any, start: any, end: any) => {
    ctrl.focus();
    console.log(28, start, end);
    console.log(27, ctrl, ctrl?.resizableTextArea?.textArea.selectionStart);
    if (ctrl?.resizableTextArea?.textArea.selectionStart) {
      ctrl.resizableTextArea.textArea.selectionStart = start;
    }
    if (ctrl?.resizableTextArea?.textArea.selectionEnd) {
      ctrl.resizableTextArea.textArea.selectionEnd = end;
    }
  };

  // textarea内容改变以及失去焦点的时候记录光标位置
  const cursorRef = useRef({
    start: 0,
    end: 0
  });
  const handleRecordCursorPosition = () => {
    const position = getCursorPosition(textAreaRef.current); //获取光标位置
    cursorRef.current = position;
  };

  const handleBlur = () => {
    handleRecordCursorPosition();
  };

  const handleChangeRuleText = (e: any) => {
    setText(e.target.value);
    handleRecordCursorPosition();
  };

  // 插入
  const timeOutRef: any = useRef(null);
  const handleSetRuleText = (txt = '') => {
    const insertStart = cursorRef.current.start;
    const insertEnd = cursorRef.current.end + txt.length;
    const newText = text.slice(0, insertStart) + txt + text.slice(insertStart);
    console.log(61, insertStart, insertEnd);
    timeOutRef.current = setTimeout(() => {
      setCursorPosition(textAreaRef.current, insertStart, insertEnd);
    }, 200);
    handleRecordCursorPosition();
    setText(newText);
  };

  return (
    <div>
      <h1>ts使用案例</h1>
      <p>1.type 联合类型简化</p>
      <Button onClick={() => handleSetRuleText('12546555')}>插入</Button>
      <TextArea ref={textAreaRef} rows={2} value={text} onChange={handleChangeRuleText} onBlur={handleBlur} />
    </div>
  );
};

export default memo(WJTsText);
