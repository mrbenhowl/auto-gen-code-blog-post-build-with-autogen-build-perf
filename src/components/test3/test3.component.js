import React from 'react'

const Test3 = ({ something, doSomething }) => (
  <form>
    <div>Test component 3: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test3
