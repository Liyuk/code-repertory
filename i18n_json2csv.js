const localelist = ['en', 'pt', 'ja', 'vi', 'es', 'hi', 'ms', 'zh', 'th', 'id'];

const tree = localelist.reduce((pre, cur) => {
  const locale = require(`./${cur}.json`);
  Object.keys(locale).forEach((key) => {
    if (pre[key]) {
      pre[key][cur] = locale[key];
    } else {
      if (!['es', 'it', 'fr'].includes(cur)) {
        pre[key] = {
          [cur]: locale[key],
        };
      }
    }
  });
  return pre;
}, {});
const data = Object.keys(tree).map((key) => {
  // if (Object.keys(tree[key]).length > 0) {
  //   return {
  //     keys: key,
  //     ...tree[key],
  //   };
  // }
  const larr = localelist.map((lang) => {
    return tree[key][lang] || null;
  });
  larr.unshift(key);
  return larr;
});

data.unshift(['keys'].concat(localelist));

console.log(data);

const xlsx = require('node-xlsx').default;
const fs = require('fs');  
const ws = fs.createWriteStream('out.xlsx');

var buffer = xlsx.build([{name: "mySheetName", data: data}]);

ws.write(buffer);
