import React from 'react'

const Test6 = ({ something, doSomething }) => (
  <form>
    <div>Test component 6: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test6
