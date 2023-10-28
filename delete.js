function getCommonDirectoryPath(pathes) {
  const arr = [];
  let commonValues;
  for (let i = 0; i < pathes.length; i += 1) {
    arr.push(pathes[i].split('/'));
    const first = arr[0];

    commonValues = first.filter((value) => arr[i].includes(value));
  }
  return commonValues[0] !== undefined ? `${commonValues.join('/')}/` : commonValues.join('/');
}

console.log(getCommonDirectoryPath(['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf']));
console.log(getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']))