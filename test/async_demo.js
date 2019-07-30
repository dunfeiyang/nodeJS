// function foo(params, callback) {
//   console.log(1)
//   setTimeout(() => {
//     callback(new Error('oops'), 'hey')
//   }, 2000)
//   console.log(2)
// }

// foo({}, (err, result) => {
//   if (err) console.log(err.stack)
//   else console.log(result)

// })
// console.log(3)

//Promise + async/await 



// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1)
//     resolve('step 1')
//   }, 1000)
// })
// console.log(p) // pending

// p.then(r => {
//   console.log(r)
//   return new Promise((rsv, rjc) => {
//     setTimeout(() => {
//       console.log(2)
//       rsv('step 2')
//     }, 1000)
//   })
// }).then(r => {
//   console.log(r)
// }).catch(err => {

// })



// async function foo() {
//   return 'done'
// }

// console.log(foo())
// const p = foo()

// p.then(r => {
//   console.log(r)
// })

// async function foo() {
//   const r = await bar()
//   console.log(r)
// }
// async function bar() {
//   return 'bar'
// }
// foo()


// function foo(params, cb) {
//   setTimeout(() => {
//     cb(null, 'done')
//   })
// }


// function asyncFoo(params) {
//   return new Promise((resolve, reject) => {

//     foo(params, (err, result) => {
//       if (err) reject(err)
//       else resolve(result)
//     })

//   })
// }

// (async () => {
// foo({}, (err, result) => {
//   console.log(err)
//   console.log(result)
// })

//   const result = await asyncFoo({})
//   console.log(result)

// })()
//   .then(r => {

//   }).catch(e => {

//   })

// Promise/A+



// console.log(1)
// let p = new Promise((resolve, reject) => {
//   console.log(2)

//   setTimeout(() => {
//     console.log(3)
//     resolve('step')
//     console.log(4)
//   }, 1000)

//   console.log(5)
// })

// console.log(6)

// p.then(r => {
//   console.log(7)
// })

// console.log(8)

//12568347


// console.log(1)

// let p1 = new Promise((rsv, rej) => {
//   console.log(2)
//   // process.nextTick(() => {
//   setTimeout(() => {
//     console.log(3)
//     rsv('rsv')
//   }, 0)
// })

// setTimeout(() => {
//   console.log(4)
// }, 0)

// // setImmediate(() => {
// //   console.log('si')
// // })


// p1.then(r => {
//   console.log(5)
// })

// console.log(6)



// async function t1() {
//   let res1 = await sleep(3000)
//   console.log(res1)
// }
// async function t2() {
//   let res2 = await sleep(2000)
//   console.log(res2)

// }
// function sleep(num) {
//   return new Promise(resolve => setTimeout(() => {
//     console.log('sleep:    ' + num)
//     return resolve(num)
//   }, num))
// }

// (async () => {
//   await t1()

//   await t2()
// })() 

// async function foo() {
//   console.log(1)

//   const res = await new Promise((resolve, reject) => {
//     console.log(2)

//     setTimeout(() => {
//       console.log(3)

//       resolve(true)

//       console.log(4)
//     }, 1000)

//     console.log(5)
//   })

//   console.log(6)

//   const res2 = await Promise.resolve(true)

//   console.log(7)
// }

// foo()
//   .then(res => {

//   })


function foo(flag, callback) {
  if (flag) {
    callback(null, flag)
  } else {
    callback(new Error('error'))
  }
}

const p = new Promise((resolve,reject) => {
  foo(true, (err, res) => {
    if (err) {
      reject(err)
    } else {
      resolve(res)
    }
  })
})

p.then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})