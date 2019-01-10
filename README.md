# next-wx-promisify

> Promisify for weixin/weapp succes/failed/complete

## install:

```bash
npm install -S afeiship/next-wx-promisify --registry=https://registry.npm.taobao.org
```

## usage:

```js
import nxWxPromisify from 'next-wx-promisify';

const showSheet = (inOptions) => {
  return new Promise((resove, reject) => {
    wx.showActionSheet(nx.mix(nx.wxPromisify(resove, reject), inOptions));
  });
};

showSheet({
  itemsList:[0,1,2],
  complete: fn,
}).then({ code, data })

// when success:
{
  code: 0,
  data: data
}

// when failed:
{
  code: 1,
  data: data
}
```
