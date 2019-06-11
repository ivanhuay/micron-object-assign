function assign(obj, set) {
    Object.keys(set).forEach((key) => {
        if(set[key].hasOwnProperty('$pull')) {
            obj[key] = obj[key].filter((subitem) => set[key].$pull.indexOf(subitem) === -1);
        } else if(set[key].hasOwnProperty('$push')) {
            obj[key] = obj[key].concat(set[key].$push);
        } else{
            obj[key] = set[key];
        }
    });
}
function getObject() {
    return {title:'test', tags:['test', 'hiroki', 'benchmark']};
}
let set = {title:'test modified', tags:['test']};

function test() {
    let object = getObject();
    assign(object, set);
}

module.exports = {test};
