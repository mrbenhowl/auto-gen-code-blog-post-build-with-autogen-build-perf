import React from 'react'

const Test12 = ({ something, doSomething }) => (
  <form>
    <div>Test component 12: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test12
