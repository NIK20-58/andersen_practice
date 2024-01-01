const myIterable = {
    from:0,
    to:10,
    [Symbol.iterator](from=this.from,to=this.to) {
      let count = from;
      return {
        next() {
          if (typeof from === 'number' && typeof to === 'number' && !isNaN(from) && !isNaN(to) && isFinite(from) && isFinite(to) && from < to) {
            return count <= to ? {value:count++,done:false}: {value: undefined, done:true};
          } else {
            throw new Error('Ошибка')
          }
        }
      };
    },
  };
