'use strict';

var maxInt = Number.MAX_SAFE_INTEGER;

var trisqy = {
    start : function(options) {
        var startSquare   = options.startSquare   || 1,
            startTriangle = options.startTriangle || 1,
            toReturn      = options.toReturn      || maxInt;

        // initialise the square and triangle objects
        var finished = false,
            numMatches = 0,
            square = {
                before : startSquare,
                after  : this._getSquare(startSquare),
                func   : this._getSquare
            },
            triangle = {
                before : startTriangle,
                after  : this._getTriangle(startTriangle),
                func   : this._getTriangle
            };

        while (!finished) {
            if (square.after === triangle.after) {
                if (square.after <= maxInt) {
                    this._output({
                        triangle : triangle,
                        square   : square
                    });
                    numMatches++;
                    if (numMatches >= toReturn) {
                        finished = true;
                    }
                } else {
                    finished = true;
                }
            }
            if (square.after > triangle.after) {
                this._increment(triangle);
            } else {
                this._increment(square);
            }
        }
    },

    _getTriangle : function(x) {
        return ((x * (x+1)) / 2);
    },

    _getSquare : function(x) {
        return (x * x);
    },

    _increment : function(obj) {
        obj.before++;
        obj.after = obj.func(obj.before);
    },

    _output : function(obj) {
        console.log('Match found! ' + obj.triangle.after + ' = tri(' + obj.triangle.before + ') = sq(' + obj.square.before + ') = ' + obj.square.after);
    }
};

module.exports = trisqy;

