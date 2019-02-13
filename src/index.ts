export class Deferred<T> {
    private _state: 'pending' | 'resolved' | 'rejected' = 'pending'
    private _promise: Promise<T>
    private _resolve!: (val?: T | PromiseLike<T>) => void
    private _reject!: (reason?: any) => void

    constructor () {
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
        return this._state !== 'pending'
    }

    public resolve (val ?: T | PromiseLike<T>) {
        if (this.isCompleted) return

        this._state = 'resolved'
        this._resolve(val)
    }

    public reject (reason ?: any) {
        if (this.isCompleted) return

        this._state = 'rejected'
        this._reject(reason)
    }
}

export default Deferred
