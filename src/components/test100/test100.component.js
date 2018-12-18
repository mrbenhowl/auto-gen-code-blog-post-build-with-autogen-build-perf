import React from 'react'

const Test100 = ({ something, doSomething }) => (
  <form>
    <div>Test component 100: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test100
