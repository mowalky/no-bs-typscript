// ** Function Overloading in Typescript

interface Coordinate {
    x: number;
    y: number;
}

function parseCoordinateFormObjetc(obj:Coordinate):Coordinate {
    return {
        ...obj,
    }
}

function praseCoordinateFromNumbers(x:number, y:number):Coordinate {
    return {
        x,
        y,
    }
}

function parseCoordinate(obj:Coordinate):Coordinate;
function parseCoordinate(x:number, y:number):Coordinate;
function parseCoordinate(arg1:unknown,arg2?:unknown):Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    }
    return coord;
}