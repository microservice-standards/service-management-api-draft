'use strict';

module.exports = {
  isEmptyValue: isEmptyValue
};

function isEmptyValue(val) {
  if((typeof(val) === 'string') && (val === ''))
  {
    return true;
  }

  return false;
}



