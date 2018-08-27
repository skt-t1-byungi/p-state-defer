# p-state-defer
A deferred promise with state

[![npm](https://img.shields.io/npm/v/p-state-defer.svg?style=flat-square)](https://www.npmjs.com/package/p-state-defer)
[![npm](https://img.shields.io/npm/dt/p-state-defer.svg?style=flat-square)](https://www.npmjs.com/package/p-state-defer)

## Install
```sh
yarn add p-state-defer
```
```js
// esm
import Deferred from 'p-state-defer'
// or commonjs
const Deferred = require('p-state-defer')
```

## Usage
### Basic
```js
function loadImage(url){
  // Unlike Promise, No Indent!
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

console.log( defer.isCompleted ) // => true
console.log( defer.state ) // => "resolved"
```


## API
### Deferred<T>
Deferred Constructor.

```js
const defer = new Deferred();
```

### Properties

#### promise : Promise<T>
Returns Promise.

```js
defer.promise.then(...)
```

#### state : 'pending' | 'resolved' | 'rejected'
Returns current state.

#### isCompleted : boolean
Returns whether completed or not.

### Methods
#### resolve(value: T)
Resolve promise.

#### reject(reason: any)
Reject promise.

## License
MIT