import './App.css'

function Num(props) {
  return <h1>Number: {props.number}</h1>
}

function Str(props) {
  return <h1>String: {props.string}</h1>
}

function Boolean(props) {
  return <h1>Boolean: {props.boolean ? 'true' : 'false'}</h1>
}

function Obj(props) {
  return <h1>Object:<br/> First name - {props.obj.firstName}<br/> Last name - {props.obj.lastName}</h1>
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
