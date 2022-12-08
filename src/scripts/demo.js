import { Listener } from './listener_util'

export class Demo {
    constructor() {
        sessionStorage.setItem('total_data', Listener.exampledata())
        Listener.redirected()
    }

}

