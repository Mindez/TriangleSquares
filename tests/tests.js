'use strict';

var BigNumber = require('big-number'),
    chai      = require('chai'),
    expect    = chai.expect,
    trisqy    = require('../trisqy');

describe('Basic Maths Tests', function() {
    it('should correctly calculate the first 5 triangle numbers', function() {
        var result = [];
        for (var i = 0; i < 5; i++) {
            result.push(trisqy._getTriangle(new BigNumber(i+1)).toString());
        }
        expect(result).to.eql(['1', '3', '6', '10', '15']);
    });
    
    it('should correctly calculate the first 5 square numbers', function() {
        var result = [];
        for (var i = 0; i < 5; i++) {
            result.push(trisqy._getSquare(new BigNumber(i+1)).toString());
        }
        expect(result).to.eql(['1', '4', '9', '16', '25']);
    });

    it('should return 0 for the zeroth triangle number', function() {
        var result = trisqy._getTriangle(new BigNumber(0));
        expect(result).to.eql(new BigNumber(0));
    });

    it('should return 0 for the zeroth square number', function() {
        var result = trisqy._getSquare(new BigNumber(0));
        expect(result).to.eql(new BigNumber(0));
    });
});

describe('Increment Tests', function() {
    it('should increment triangular numbers correctly', function() {
        var triangle = {
            before : new BigNumber(1),
            after  : trisqy._getTriangle(new BigNumber(1)),
            func   : trisqy._getTriangle
        };
        trisqy._increment(triangle);
        expect(triangle.before.toString()).to.be.eql('2');
        expect(triangle.after.toString()).to.be.eql('3');
    });

    it('should increment square numbers correctly', function() {
        var square = {
            before : new BigNumber(1),
            after  : trisqy._getSquare(new BigNumber(1)),
            func   : trisqy._getSquare
        };
        trisqy._increment(square);
        expect(square.before.toString()).to.be.eql('2');
        expect(square.after.toString()).to.be.eql('4');
    });
});