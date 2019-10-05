import { days } from './timeInput';

export const hasProperty = (obj, key) => (
  Object.prototype.hasOwnProperty.call(obj, key)
);

export const getObjectProperty = (obj, key) => (
  Object.prototype.hasOwnProperty.call(obj, key)
    ? obj[key]
    : ''
);

export const convertURLtoBase64 = (url, callback) => {
  const reader = new FileReader();
  reader.onloadend = function f() {
    callback(reader.result);
  };
  reader.readAsDataURL(url);
};

export const formedData = (values = {}) => {
  const formedValues = Object.assign({}, values);
  // convert lat, lng and raiting to number
  if (hasProperty(formedValues, 'lat')) {
    formedValues.lat = +formedValues.lat;
  }
  if (hasProperty(formedValues, 'lng')) {
    formedValues.lng = +formedValues.lng;
  }
  if (hasProperty(formedValues, 'raiting')) {
    formedValues.raiting = formedValues.raiting.replace(/,/g, '.');
    formedValues.raiting = +formedValues.raiting;
  }
  // convert open hours data in {type: open/close day:number time: number}
  const daysDouble = days.concat(days);
  formedValues.opening_hours = daysDouble.map((item, indx) => {
    const type = indx <= 6 ? 'open' : 'close';
    const time = hasProperty(formedValues, item + type)
      ? +formedValues[item + type].replace(/:/g, '')
      : 0;
    const day = indx <= 6 ? (indx + 1) : (indx - 6);
    return { type, day, time };
  });

  formedValues.photos = formedValues.photos.map(item => (
    { image: item }
  ));
  return formedValues;
};
