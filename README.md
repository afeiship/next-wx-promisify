# next-wx-promisify
> Promisify for weixin/weapp succes/failed/complete

## install:
```bash
npm install -S afeiship/next-wx-promisify --registry=https://registry.npm.taobao.org
```

## usage:
```js
import nxWxPromisify from 'next-wx-promisify';

// when success:
{
  code: 1,
  data: data
}

// when failed:
{
  code: -1,
  data: data
}

// when complete:
{
  code: 0,
  data: data
}
```
