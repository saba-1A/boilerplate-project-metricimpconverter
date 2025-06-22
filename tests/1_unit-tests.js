const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  test("Whole number input", function(done) {
    assert.equal(convertHandler.getNum("100kg"), 100)
    done()
  })
  test("Dec number input", function(done) {
    assert.equal(convertHandler.getNum("10.1kg"), 10.1)
    done()
  })
    test("Fract number input", function(done) {
    assert.equal(convertHandler.getNum("1/2kg"), 1/2)
    done()
  })
    test("Fract and Dec number input", function(done) {
    assert.equal(convertHandler.getNum("1/1.5kg"), 1/1.5)
    done()
  })
    test("Double fract input", function(done) {
    assert.equal(convertHandler.getNum("3/2/3kg"), "error")
    done()
  })
    test("No number input", function(done) {
    assert.equal(convertHandler.getNum("kg"), 1)
    done()
  })
    test("Valid unit input", function(done) {
    assert.equal(convertHandler.getUnit("kg"), "kg")
    assert.equal(convertHandler.getUnit("lbs"), "lbs")
    assert.equal(convertHandler.getUnit("gal"), "gal")
    assert.equal(convertHandler.getUnit("L"), "L")
    assert.equal(convertHandler.getUnit("mi"), "mi")
    assert.equal(convertHandler.getUnit("km"), "km")
    done()
  })
    test("Invalid unit input", function(done) {
    assert.equal(convertHandler.getReturnUnit("100mars"), "error")
    done()
  })
    test("Correct return unit", function(done) {
    assert.equal(convertHandler.getReturnUnit("kg"), "lbs")
    assert.equal(convertHandler.getReturnUnit("lbs"), "kg")
    assert.equal(convertHandler.getReturnUnit("gal"), "L")
    assert.equal(convertHandler.getReturnUnit("L"), "gal")
    assert.equal(convertHandler.getReturnUnit("mi"), "km")
    assert.equal(convertHandler.getReturnUnit("km"), "mi")
    done()
  })
    test("Correct full name unit", function(done) {
    assert.equal(convertHandler.spellOutUnit("kg"), "kilograms")
    assert.equal(convertHandler.spellOutUnit("lbs"), "pounds")
    assert.equal(convertHandler.spellOutUnit("gal"), "gallons")
    assert.equal(convertHandler.spellOutUnit("L"), "liters")
    assert.equal(convertHandler.spellOutUnit("mi"), "miles")
    assert.equal(convertHandler.spellOutUnit("km"), "kilometers")
    done()
  })
    test("Whole number input", function(done) {
    assert.equal(convertHandler.convert(100, "gal"), 378.54100)
    done()
  })
    test("Whole number input", function(done) {
    assert.equal(convertHandler.convert(100, "l"), 26.41722)
    done()
  })
    test("Whole number input", function(done) {
    assert.equal(convertHandler.convert(100, "mi"), 160.93400)
    done()
  })
    test("Whole number input", function(done) {
    assert.equal(convertHandler.convert(100, "km"), 62.13727)
    done()
  })
    test("Whole number input", function(done) {
    assert.equal(convertHandler.convert(100, "lbs"), 45.35920)
    done()
  })
    test("Whole number input", function(done) {
    assert.equal(convertHandler.convert(100, "kg"), 220.46244)
    done()
  })
});
