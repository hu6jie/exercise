const Util = {
    deepClone(obj) {
        switch (Object.prototype.toString.call(obj)) {
            case '[object Object]':
                var ret = {};
                for (var n in obj) ret[n] = deepClone(obj[n]);
                return ret;
            case '[object Array]':
                return obj.map(deepClone);
            default:
                return obj;
        }
    }
}
export default Util;