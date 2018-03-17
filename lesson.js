const observalable = Rx.observalable.create(observer => {
    observer.next('Hello')
    observer.next( 'world' )
})

observalable.subscribe(val => print(val))




function print(val) {
    let e1 = document.createElement('p')
    e1.innerText = val
    document.body.appendChild(e1)
}