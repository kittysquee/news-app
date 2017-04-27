var assert = {
  isTrue: function(assertiontoCheck) {
    if (!assertiontoCheck) {
      throw new Error("Assertion failed:" + assertiontoCheck + " is not truthy");
    }
  }
};
