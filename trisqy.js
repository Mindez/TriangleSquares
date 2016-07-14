'use strict';

var BigNumber = require('big-number');

var trisqy = {
    start : function(options) {
        var startSquare   = options.startSquare   || 1,
            startTriangle = options.startTriangle || 1,
            toReturn      = options.toReturn      || -1;

        // initialise the square and triangle objects
        var finished = false,
            numMatches = 0,
            square = {
                before : BigNumber(startSquare),
                after  : this._getSquare(BigNumber(startSquare)),
                func   : this._getSquare
            },
            triangle = {
                before : BigNumber(startTriangle),
                after  : this._getTriangle(BigNumber(startTriangle)),
                func   : this._getTriangle
            };

        while (!finished) {
            if (square.after.equals(triangle.after)) {
                this._output({
                    triangle : triangle,
                    square   : square
                });
                numMatches++;
                if (numMatches === toReturn) {
                    finished = true;
                }
            }
            if (square.after.gt(triangle.after)) {
                this._increment(triangle);
            } else {
                this._increment(square);
            }
        }
    },

    _getTriangle : function(x) {
        var orig = BigNumber(x.toString());
        return (x.multiply(x).add(orig).divide(2));
    },

    _getSquare : function(x) {
        return x.multiply(x);
    },

    _increment : function(obj) {
        obj.before.plus(1);
        var after = BigNumber(obj.before.toString());
        obj.after = obj.func(after);
    },

    _output : function(obj) {
        console.log('Match found! ' + obj.triangle.after.toString() +
            ' = tri(' + obj.triangle.before.toString() + ')' +
            ' = sqr(' + obj.square.before.toString() + ')' +
            ' = ' + obj.square.after.toString());
    }
};

module.exports = trisqy;

