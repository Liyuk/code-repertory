import AreaData from './area.js';
const AreaGroup = AreaData.group;
const DistrictData = AreaData.tdist;
const shieldWords = ['\u7701', '\u5e02', '\u53bf', '\u7279\u522b\u884c\u653f\u533a',
                     '\u81ea\u6cbb\u533a', '\u56de\u65cf', '\u7ef4\u543e\u5c14', '\u58ee\u65cf'];

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
      for (let code = 1; code < 20; code++) {
        const middle = code < 10 ? `0${code}` : code;
        const cityCode = `${_pr.slice(0, 2)}${middle}00`;
        if (dist[cityCode] !== undefined) {
          prCity.push({
            title: shieldName(dist[cityCode][0]),
            code: cityCode,
          });
        } else {
          break;
        }
      }
    }
  }
  return PR_CY;
}

const CityData = getCities(DistrictData);