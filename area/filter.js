import AreaData from './data/area.js';
const AreaGroup = AreaData.group;
const DistrictData = AreaData.tdist;
const shieldWords = ['\u8499\u53e4\u81ea\u6cbb\u5dde', '\u7701', '\u5e02', '\u53bf', '\u767d\u65cf',
                     '\u81ea\u6cbb\u533a', '\u56de\u65cf', '\u7ef4\u543e\u5c14', '\u58ee\u65cf',
                     '\u571f\u5bb6\u65cf', '\u82d7\u65cf', '\u81ea\u6cbb\u5dde', '\u50a3\u65cf',
                     '\u8499\u53e4\u81ea\u6cbb\u5dde', '\u5730\u533a', '\u5e03\u4f9d\u65cf',
                     '\u7279\u522b\u884c\u653f\u533a', '\u671d\u9c9c\u65cf', '\u85cf\u65cf',
                     '\u8499\u53e4\u65cf', '\u54c8\u5c3c\u65cf', '\u5f5d\u65cf', '\u4f97\u65cf',
                     '\u7f8c\u65cf', '\u5088\u50f3\u65cf', '\u666f\u9887\u65cf', '\u76df',
                     '\u9ece\u65cf', '\u7fa4\u5c9b', '\u81ea\u6cbb\u53bf', '\u81ea\u6cbb'];

function shieldName(name) {
  let _name = name;
  for (const word of shieldWords) {
    _name = _name.replace(word, '');
  }
  return _name;
}

function getCities(dist) {
  // Province City
  const PR_CY = {};
  for (const area of AreaGroup) {
    for (const pr of area.codes) {
      PR_CY[pr] = {
        title: shieldName(dist[pr][0]),
        city: [],
      };
      const _pr = pr;
      const prCity = PR_CY[pr].city;
      for (let code = 1; code < 100; code++) {
        const middle = code < 10 ? `0${code}` : code;
        const cityCode = `${_pr.slice(0, 2)}${middle}00`;
        if (dist[cityCode] !== undefined) {
          prCity.push({
            title: shieldName(dist[cityCode][0]).slice(0, 4),
            code: cityCode,
          });
        }
        if (_pr.slice(0, 2) == '46') {
          console.warn('海南');
          for (let i = 1; i < 100; i++) {
            const mdl = i < 10 ? `0${i}` : i;
            const cCode = `${_pr.slice(0, 2)}${middle}${mdl}`;
            if (dist[cCode] !== undefined) {
              prCity.push({
                title: shieldName(dist[cCode][0]).slice(0, 4),
                code: cCode,
              });
            }
          }
        }
      }
    }
  }
  return PR_CY;
}

const CityData = getCities(DistrictData);
console.log(JSON.stringify(CityData));

export default CityData;
