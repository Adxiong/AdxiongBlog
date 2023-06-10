import { Button, Image, Input, notification } from 'antd';
import QRCode from 'qrcode';
import { useRef, useState } from 'react';
import './qrcode.modules.less';

const QrCode = () => {
  const [linkVal, setLinkVal] = useState('');
  const codeRef = useRef<HTMLImageElement>(null);
  const genQrCode = () => {
    if (linkVal.length <= 0) {
      notification.error({
        message: '请输入内容',
      });
      return;
    }
    QRCode.toDataURL(linkVal, function (err, url) {
      if (codeRef.current) {
        codeRef.current.src = url;
        (codeRef.current.width = 200), (codeRef.current.height = 200);
      }
    });
  };

  const inputLink = (el: React.ChangeEvent<HTMLInputElement>) => {
    setLinkVal(el.target.value);
  };
  return (
    <div id="qrcode">
      <div className="qr-input">
        <Input
          placeholder="输入连接"
          size="small"
          showCount
          onChange={(val) => inputLink(val)}
        ></Input>
        <Button onClick={() => genQrCode()}>生成</Button>
      </div>
      <div className="qr-output">
        <img ref={codeRef} />
      </div>
    </div>
  );
};

export default QrCode;
