'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const convertHandler = new ConvertHandler()
    const conversionInput = req.query.input
    console.log(conversionInput)
    const number = convertHandler.getNum(conversionInput)
    const unit = convertHandler.getUnit(conversionInput)
    const returnUnit = convertHandler.getReturnUnit(unit)
    
    
    if (!(number >= 0) && returnUnit === "error") {
      res.json('invalid number and unit')
    } else if (!(number >= 0)) {
      res.json('invalid number')
    } else if (returnUnit === "error") {
      res.json('invalid unit')
    } else {
    const convertedNum = convertHandler.convert(number, unit)
    const unitFullName = convertHandler.spellOutUnit(unit)
    const returnUnitFullName = convertHandler.spellOutUnit(returnUnit)
    const string = convertHandler.getString(number, unitFullName, convertedNum, returnUnitFullName)
    const correctCaseUnit = unit.toLowerCase() === "l" ? "L" : unit.toLowerCase()
    res.json({ initNum: Number(number), initUnit: correctCaseUnit, returnNum: Number(convertedNum), returnUnit , string })
    }


  })

};
