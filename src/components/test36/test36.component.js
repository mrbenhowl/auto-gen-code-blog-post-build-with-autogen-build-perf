import React from 'react'

const Test36 = ({ something, doSomething }) => (
  <form>
    <div>Test component 36: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test36
