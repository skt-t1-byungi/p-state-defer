# p-state-defer
A deferred promise with current state

[![npm](https://img.shields.io/npm/v/p-state-defer.svg?style=flat-square)](https://www.npmjs.com/package/p-state-defer)

## Install
```sh
yarn add p-state-defer
```

## Usage
### Basic
```js
const Defer = require('p-state-defer')

function loadImage(url){
  // Unlike Promise, Indent is not required.
  const defer = new Defer();

  const img = new Image(wsUrl)
  img.src = url
  img.onload = _ => defer.resolve(img)
  img.onerror = _ => defer.reject(new Error('Failed to load image.'))

  return defer.promise;
}
```

### State
```js
const defer = new Defer();

console.log( defer.isCompleted ) // false
console.log( defer.state ) // "pending"

defer.resolve('hello')

console.log( defer.isCompleted ) // true
console.log( defer.state ) // "resolved". If call the reject, it will be "rejected".
```


## API
#### Defer<T>
Constructor.

##### Properties
###### promise : Promise<T>
###### state : 'pending' | 'resolved' | 'rejected'
###### isCompleted : boolean

##### Methods
###### resolve(value: T)
###### reject(reason: any)

## License
MIT