export default class Deferred {
  constructor () {
    this._end = false
    this._state = 'pending'

    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
  }

  get promise () {
    return this._promise
  }

  get state () {
    return this._state
  }

  get isCompleted () {
    return this._end
  }

  resolve (v) {
    if (this._end) return
    this._end = true
    this._state = 'resolved'
    this._resolve(v)
  }

  reject (err) {
    if (this._end) return
    this._end = true
    this._state = 'rejected'
    this._reject(err)
  }
}
