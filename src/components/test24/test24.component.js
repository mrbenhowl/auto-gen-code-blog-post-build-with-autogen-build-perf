import React from 'react'

const Test24 = ({ something, doSomething }) => (
  <form>
    <div>Test component 24: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test24
