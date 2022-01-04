const transformDataForAPI1 = (data) => {
  let transformedData = [];

  data.forEach(function (item, index) {
    let obj = {};
    obj["name"] = item.name;
    obj["age"] = item.age;
    obj["description"] = item.name + "_" + item.age;
    transformedData.push(obj);
  });

  return transformedData;
};

const transformDataForAPI2 = (data) => {
  let transformedData = [];

  data.forEach(function (item, index) {
    let obj = {};
    obj["city"] = item.city;
    obj["country"] = item.city + "_" + "India";
    transformedData.push(obj);
  });

  return transformedData;
};

const mergeData = (data1, data2) => {
  let mergedData = [];

  data1.forEach((obj1, index) => {
    let obj2 = data2[index];
    let merged = { ...obj1, ...obj2 };
    mergedData.push(merged);
  });

  return mergedData;
};

module.exports = { transformDataForAPI1, transformDataForAPI2, mergeData };
