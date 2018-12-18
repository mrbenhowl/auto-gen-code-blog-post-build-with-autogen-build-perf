import React from 'react'

const Test16 = ({ something, doSomething }) => (
  <form>
    <div>Test component 16: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test16
