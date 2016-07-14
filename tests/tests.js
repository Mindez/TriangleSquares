'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    trisqy = require('../trisqy');

describe('Basic Maths Tests', function() {
    it('should correctly calculate the first 5 triangle numbers', function() {
        var result = [];
        for (var i = 0; i < 5; i++) {
            result.push(trisqy._getTriangle(i+1));
        }
        expect(result).to.eql([1, 3, 6, 10, 15]);
    });
    
    it('should correctly calculate the first 5 square numbers', function() {
        var result = [];
        for (var i = 0; i < 5; i++) {
            result.push(trisqy._getSquare(i+1));
        }
        expect(result).to.eql([1, 4, 9, 16, 25]);
    });

    it('should return 0 for the zeroth triangle number', function() {
        var result = trisqy._getTriangle(0);
        expect(result).to.eql(0);
    });

    it('should return 0 for the zeroth square number', function() {
        var result = trisqy._getSquare(0);
        expect(result).to.eql(0);
    });
});

describe('Increment Tests', function() {
    it('should increment triangular numbers correctly', function() {
        var triangle = {
            before : 1,
            after  : trisqy._getTriangle(1),
            func   : trisqy._getTriangle
        };
        trisqy._increment(triangle);
        expect(triangle).to.be.eql({
            before : 2,
            after  : 3,
            func   : trisqy._getTriangle
        });
    });

    it('should increment square numbers correctly', function() {
        var square = {
            before : 1,
            after  : trisqy._getSquare(1),
            func   : trisqy._getSquare
        };
        trisqy._increment(square);
        expect(square).to.be.eql({
            before : 2,
            after  : 4,
            func   : trisqy._getSquare
        });
    });
});