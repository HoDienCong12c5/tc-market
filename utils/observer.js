var events = require('events')
var eventEmitter = new events.EventEmitter()

class ObserverClass {
  constructor () {
    this.listObserver = []
  }

  on (key, func) {
    eventEmitter.on(key, func)
  }

  emit (key, object) {
    eventEmitter.emit(key, object)
  }

  removeListener (key, func = ()=>{}) {
    eventEmitter.removeListener(key, func)
  }
}

const observer = new ObserverClass()
Object.freeze(observer)

export default observer
