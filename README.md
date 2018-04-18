# p-state-defer
A deferred promise with current state

[![npm](https://img.shields.io/npm/v/p-state-defer.svg?style=flat-square)](https://www.npmjs.com/package/p-state-defer)

## Install
```sh
yarn add p-state-defer
```
```js
// esm
import Deferred from 'p-state-defer'
// or commonjs
const {Deferred} = require('p-state-defer')
```

## Usage
### Basic
```js
function loadImage(url){
  // Unlike Promise, Indent is not required.
  const defer = new Deferred();

  const img = new Image()
  img.src = url
  img.onload = _ => defer.resolve(img)
  img.onerror = _ => defer.reject(new Error('Failed to load image.'))

  return defer.promise;
}
```

### State
```js
const defer = new Deferred();

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