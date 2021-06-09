# Trisqy

Trisqy (pronounced 'trisky') is a small nodejs program to output numbers that are both triangle numbers and square numbers in linear time.

Note that this was not designed to be efficient, and as such it uses a naive algorithm. Do not try to use this program to calculate huge square triangular numbers.

## Getting Started

Install with `npm i`
Run with `node run`
Test with `npm test`
Lint with `npm lint`

# Options

If you want to play around with the parameters, you can edit the options object passed in to `trisqy.start` in `run.js`.

This object accepts the following parameters:-
- `startSquare` - Start from a specified square base (default: 1)
- `startTriangle` - Start from a specified triangle base (default: 1)
- `toReturn` - Specify a number of results to return before stopping (default: no limit
)
