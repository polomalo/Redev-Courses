import './App.css'

function Num({number}) {
  return <h1>Number: {number}</h1>
}

function Str({string}) {
  return <h1>String: {string}</h1>
}

function Boolean({boolean}) {
  return <h1>Boolean: {boolean ? 'true' : 'false'}</h1>
}

function Obj(props) {
  const {firstName, lastName} = props.obj
  return <h1>Object:<br/> First name - {firstName}<br/> Last name - {lastName}</h1>
}

function Func(props) {
  return <button onClick={props.onClick}>Click me</button>
}

function Arr(props) {
  return (
    <ul>
      {props.todos.map((item, index) => (
        <li key = {index}>{item}</li>
      ))}
    </ul>
  )
}

function App() {

  return (
    <>
      <Num number={777}/>
      <Str string={'Dima Kirkitsky'}/>
      <Boolean boolean={false}/>
      <Obj obj={{firstName: 'Dima', lastName: 'Kirkitsky'}}/>
      <Func onClick={() => alert('Good job!')}/>
      <Arr todos={['Wake up', 'Bathroom', 'Eat', 'Work', 'Study', 'Sleep']}/>
    </>
  )
}

export default App
