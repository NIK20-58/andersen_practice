Array.prototype.myFilter = function (fn,obj={}) {
    const result =[];
    
    if (Object.keys(obj).length===0) {
        for (let i=0;i<this.length;i++) {
            if(fn(this[i],i,this)) {
                result.push(this[i]);
            }
        }
    } else {
        const bindFn = fn.bind(obj);

        for (let i=0;i<this.length;i++) {
            if (bindFn(this[i],i,this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
}