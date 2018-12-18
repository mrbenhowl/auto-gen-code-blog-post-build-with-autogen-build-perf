export default function testReducer (state = 'initial test state', action = {}) {
  return state
}

const types = {
  DO_SOMETHING: 'test/DO_SOMETHING'
}

export const actions = {
  doSomething: () => ({
    type: types.DO_SOMETHING
  })
}

export const selectors = {
  getSomething: state => state.testReducer
}
