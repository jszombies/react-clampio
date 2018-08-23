# react-clampio
React component for clamping lines. It adds ellipsis if text exceeds the defined max lines value

# Getting started
Install package using `yarn` or `npm`
```
$ yarn add react-clampio
```

```
$ npm install react-clampio --save
```

Pass to the component text that should be truncated:
```js
import Clampio from 'react-clampio';

...

const longText = 'Lorem ipsum ...';
<Clampio
  text={longText}
  lines={3}
/>
```

# Props
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| text | string | true   | Text to truncate |
| lines | number | false | Maximum lines (default 2) |
| ellipsis | string | fasle | Symbol at the end of truncated text (default ...)     |
| className | string | false | Custom classname    |
