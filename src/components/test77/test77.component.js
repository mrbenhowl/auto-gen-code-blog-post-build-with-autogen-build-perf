import React from 'react'

const Test77 = ({ something, doSomething }) => (
  <form>
    <div>Test component 77: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test77
