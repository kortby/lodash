import _ from 'lodash'

const items = [
    {
        id: 1,
        name: 'Milk',
        age: 23,
        status: 'active',
        isActive: true
    },
    {
        id: 2,
        name: 'Bread',
        age: 14,
        status: 'active',
        isActive: true
    },
    {
        id: 3,
        name: 'Butter',
        age: 25,
        status: 'active',
        isActive: true
    },
    {
        id: 4,
        name: 'Beaf',
        age: 27,
        status: 'inactive',
        isActive: false
    },
    {
        id: 5,
        name: 'Milk',
        age: 26,
        status: 'active',
        isActive: true
    },
];
const arr = [];

_.each(items, (item, idx) => {
    console.log(item, idx);
    arr.push(item)
})

console.log(arr);

const arrIdz = _.map(items, 'id') // [1,2]

console.log(arrIdz);

function normalizeUsers(users) {
    return _.map(users, user => {
        return {
            id: user.id,
            firstName: user.name,
            isActive: user.status === 'active'
        }
    });
}
console.log(normalizeUsers(items));
// 0: {id: 1, firstName: 'Milk', isActive: true}
// 1: {id: 2, firstName: 'Bread', isActive: false}
// length: 2
// [[Prototype]]: Array(0)


const filteredArr = _.filter(items, item => item.name === 'Milk')
const filteredArr = _.filter(items, {name : 'Milk'});

console.log(filteredArr)

function SearchProducts(items, searchedValue) {
    return _.filter(items, item => {
        return _.includes(item.name.toLowerCase(), searchedValue);
    });
}

console.log(SearchProducts(items, 'b'));
// 0: {id: 2, name: 'Bread', status: 'inactive'}
// 1: {id: 3, name: 'Butter', status: 'active'}
// 2: {id: 4, name: 'Beaf', status: 'inactive'}
// length: 3
// [[Prototype]]: Array(0)


var milk = _.find(items, item => item.name === 'Milk');
console.log(milk) // {id: 1, name: 'Milk', status: 'active'}

const removedArr = _.remove(items, {name: 'Milk'});
console.log(removedArr);
// // 0: {id: 1, name: 'Milk', status: 'active'}
// // 1: {id: 5, name: 'Milk', status: 'active'}
// // length: 2
// // [[Prototype]]: Array(0)


console.log(_.without([1,2,3], 1)); // [2, 3]

const sorted = _.orderBy(items, ['name']);

console.log(sorted);
// 0: {id: 4, name: 'Beaf', status: 'inactive'}
// 1: {id: 2, name: 'Bread', status: 'inactive'}
// 2: {id: 3, name: 'Butter', status: 'active'}
// 3: {id: 1, name: 'Milk', status: 'active'}
// 4: {id: 5, name: 'Milk', status: 'active'}
// length: 5
// [[Prototype]]: Array(0)


function groupByActive(items) {
    return _.groupBy(items, item => item.isActive)
}

console.log(groupByActive(items))
// false: Array(2)
    // 0: {id: 2, name: 'Bread', status: 'inactive', isActive: false}
    // 1: {id: 4, name: 'Beaf', status: 'inactive', isActive: false}
    // length: 2
    // [[Prototype]]: Array(0)
// true: Array(3)
    // 0: {id: 1, name: 'Milk', status: 'active', isActive: true}
    // 1: {id: 3, name: 'Butter', status: 'active', isActive: true}
    // 2: {id: 5, name: 'Milk', status: 'active', isActive: true}
    // length: 3


function getYongestUserMessage(items) {
    return _.chain(items)
            .filter('isActive')
            .orderBy(['age'])
            .map(item => item.name + ' is ' + item.age)
            .head()
            .value();
}

console.log(getYongestUserMessage(items)); // Bread is 14

console.log(_.head(items))
console.log(_.tail(items)) // return all except first
console.log(_.last(items))
console.log(_.initial(items)) // return all except last

console.log(_.random(1, 100));

console.log(_.uniqueId('user_')) // user_1
console.log(_.uniqueId('user_')) // user_2

const compArr = [1,2, null, 4, undefined, 0, false, 4, 'ee', ''];
console.log(_.compact(compArr)); // [1, 2, 4, 4, 'ee']


const state = {
    isLoading: true,
    data: null,
    errors: null,
}

const NewState = {
    isLoading: false,
    data: {id: 1, name: 'rich'}
}

const merge = _.assign({}, state, NewState);
console.log(merge);
// data: {id: 1, name: 'rich'}
// errors: null
// isLoading: false


const baseConfig = {
    apiUrl: 'http://test.com/api',
    port: 4000
};

function createExtendedConfig(config) {
    const clonedConfig = _.clone(config);
    clonedConfig.host = 'http://othertest.com';
    return clonedConfig;
};

const extendedConfig = createExtendedConfig(baseConfig);
console.log(baseConfig); // { apiUrl: 'http://test.com/api', port: 4000}
console.log(extendedConfig); // { apiUrl: 'http://test.com/api', port: 4000, host: 'http://othertest.com'}


console.log(_.isEqual({a: 2}, {a: 2})); // true
console.log(_.isEmpty(null)) // true
const user = {}
if( _.isNil(user) ) {
    console.log('user is NOT there');
}

// Debonce

// <input type="text" />

const handler = function (event) {
    console.log('We send request', event.target.value);
}

document.getElementById('name').addEventListener('keydown', _.debounce(handler, 2000));
