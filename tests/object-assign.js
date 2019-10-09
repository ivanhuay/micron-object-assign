'use strict';
function getObject() {
    return {title:'test', tags:['test', 'hiroki', 'benchmark']};
}
let set = {title:'test modified', tags:['test']};

function test() {
    let object = getObject();
    Object.assign(object, set);
}
module.exports = {test};
