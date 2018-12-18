import React from 'react'

const Test82 = ({ something, doSomething }) => (
  <form>
    <div>Test component 82: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test82
