import React from 'react'

const Test22 = ({ something, doSomething }) => (
  <form>
    <div>Test component 22: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test22
