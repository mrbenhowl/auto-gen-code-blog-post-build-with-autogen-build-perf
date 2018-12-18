import React from 'react'

const Test40 = ({ something, doSomething }) => (
  <form>
    <div>Test component 40: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test40
