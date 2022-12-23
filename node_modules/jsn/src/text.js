'use strict';

function walk(location,property){
    if(!property.length){
        throw new Error('unexpected length zero for property name');
    }

    if(!(property in location)){ // can't walk any further
        throw new Error('undeclared property: ' + property);
    }

    return location[property];
}

module.exports = {
    replace: function(context){
        if(!context || typeof context !== 'object'){
            throw new Error('context must be defined');
        }

        return function(m, i){
            if(m.indexOf('@@') === 0){
                return m.substr(1);
            }

            var path = m.substr(1).split('.'),
                local = context;

            path.forEach(function(property){
                local = walk(local, property);
            });
            return local;
        };
    }
};