import React from 'react'

const Test92 = ({ something, doSomething }) => (
  <form>
    <div>Test component 92: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test92
