import React from 'react'

const Test57 = ({ something, doSomething }) => (
  <form>
    <div>Test component 57: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test57
