import React from 'react'

const Test48 = ({ something, doSomething }) => (
  <form>
    <div>Test component 48: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test48
