import React from 'react'

const Test83 = ({ something, doSomething }) => (
  <form>
    <div>Test component 83: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test83
