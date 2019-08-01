/* eslint arrow-body-style:0 */
const oss = require('ali-oss');
const path = require('path');

const bucket = 'iceworks';
const accessKeyId = process.env.ACCESS_KEY_ID;
const accessKeySecret = process.env.ACCESS_KEY_SECRET;
const branch = process.env.TRAVIS_BRANCH;
const dirPath = 'materials/';
let assetsPath;

if (['master'].indexOf(branch) === -1) {
  assetsPath = 'pre-assets';
} else {
  assetsPath = 'assets';
}

const ossClient = oss({
  bucket,
  endpoint: 'oss-cn-hangzhou.aliyuncs.com',
  accessKeyId,
  accessKeySecret,
  time: '120s',
});

const materialPath = path.resolve(__dirname, '../build/materials.json');
const toPath = path.join(assetsPath, dirPath, 'cra-materials.json');

ossClient.put(toPath, materialPath);
