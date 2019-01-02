import test from 'ava'
import Defer from '.'

test.cb('basic', t => {
    const defer = new Defer()

    t.is(defer.state, 'pending')
    t.false(defer.isCompleted)

    defer.promise.then(v => {
        t.is(v, 'test!')
        t.is(defer.state, 'resolved')
        t.true(defer.isCompleted)
        t.end()
    })

    defer.resolve('test!')
})
