import React from 'react'

const Test32 = ({ something, doSomething }) => (
  <form>
    <div>Test component 32: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test32
