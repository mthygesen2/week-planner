import Ember from 'ember';

export function neighborhoodAssembler(params/*, hash*/) {
  var neighborhoods = params[0];
  var counter = 1;
  var resultString = '';
  console.log(neighborhoods)
  for (var neighborhood of neighborhoods) {
    resultString += neighborhood;
    if (counter < neighborhoods.length) {
      resultString += ' | ';
    }
    counter += 1;
  }
  return resultString;
}

export default Ember.Helper.helper(neighborhoodAssembler);
