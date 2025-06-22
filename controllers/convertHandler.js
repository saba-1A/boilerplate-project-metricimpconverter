function ConvertHandler() {
  
  this.getNum = function(input) {
    const splitLocation = input.search(/[a-zA-Z]/)
    let num = input.slice(0, splitLocation).split("/")
    if (num.length === 1) {
      num = num[0]
    } else if (num.length === 2) {
      num = num[0] / num[1]
    } else {
      return "error"
    }
    return num > 0 ? num : 1
  };
  
  this.getUnit = function(input) {
    const splitLocation = input.search(/[a-zA-Z]/)
    return input.slice(splitLocation)
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit.toLowerCase()) {
      case "gal": 
        return "L"
        break
      case "l": 
        return "gal"
        break
      case "lbs": 
        return "kg"
        break
      case "kg": 
        return "lbs"
        break
      case "mi": 
        return "km"
        break
      case "km": 
        return "mi"
        break
      default:
        return "error"
        break
    }
  };

  this.spellOutUnit = function(unit) {
        switch(unit.toLowerCase()) {
      case "gal": 
        return "gallons"
        break
      case "l": 
        return "liters"
        break
      case "lbs": 
        return "pounds"
        break
      case "kg": 
        return "kilograms"
        break
      case "mi": 
        return "miles"
        break
      case "km": 
        return "kilometers"
        break
      default:
        return "error"
        break
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let returnVal = ""
    switch(initUnit.toLowerCase()) {
      case "gal": 
        returnVal = initNum * galToL
        break
      case "l": 
        returnVal = initNum / galToL
        break
      case "lbs": 
        returnVal = initNum * lbsToKg
        break
      case "kg": 
        returnVal = initNum / lbsToKg
        break
      case "mi": 
        returnVal = initNum * miToKm
        break
      case "km": 
        returnVal = initNum / miToKm
        break
      default:
        returnVal = "error"
        break
    }
    return returnVal.toFixed(5)
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
  };
  
}

module.exports = ConvertHandler;
