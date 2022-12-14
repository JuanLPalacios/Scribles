export const sum = (a:DOMPoint, ...others:DOMPoint[]) => others.reduce((a:DOMPoint, b:DOMPoint) => new DOMPoint(a.x+b.x, a.y+b.y, a.z+b.z), a);

export const sub = (a:DOMPoint, b:DOMPoint) => new DOMPoint(b.x-a.x, b.y-a.y, b.z-a.z);

export const scalePoint = (a:DOMPoint, ...others:Array<DOMPoint|number>) => others.reduce((a:DOMPoint, b:DOMPoint|number) =>
    (typeof b == 'number')?
        new DOMPoint(b*a.x, b*a.y, b*a.z)
        : new DOMPoint(b.x*a.x, b.y*a.y, b.z*a.z)
, a);

export const translateMatrix = (matrix:DOMMatrix, vec:DOMPoint|number, y = 0, z = 0) => {
    return (typeof vec == 'number')?
        matrix.translate(vec, y, z)
        : matrix.translate(vec.x, vec.y, vec.z);
};
