import React, { useEffect ,useState} from 'react'
import { Container , InputGroup,Button,FormControl, Row, Col, Card } from 'react-bootstrap'

function Todo() {
    const [todoText,setTodoText] = useState('')
    const [todoos,setTodoos] = useState([])
    useEffect(
        ()=>{
            setTodoos(JSON.parse(localStorage.getItem('todos')))
        },[]
    )
    const  createTodo = () => {
        let todos = JSON.parse(localStorage.getItem('todos'))
        let todo ={
            text:todoText,
            checked:false
        }
        let id  = todos.push(todo)
        todos[id-1].id = id.toString()
        console.log('todos',todos)
        setTodoos(todos)
        localStorage.setItem('todos',JSON.stringify(todos))
        setTodoText('')

    }
    const checkTodo = (id) => {
        let t = [...todoos]
        let idx = t.findIndex( el => el.id === id)
        t[idx].checked = !t[idx].checked;
        setTodoos(t)
        localStorage.setItem('todos',JSON.stringify(t))
    }
    const removeTodo = (id) => {
        let newTodos = todoos.filter( t => t.id !== id )
        setTodoos(newTodos)
        localStorage.setItem('todos',JSON.stringify(newTodos))
    }
    return (
        <Container className='site-bg' style={{display:'flex',justifyContent:'center'}}>
            <Row className="todoCont" >
                <Col >
                <InputGroup className="mb-3 mt-3">
    <FormControl
      placeholder="List your tags"
      aria-describedby="basic-addon2"
      onChange={(e)=> {setTodoText(e.target.value)}}
      value={todoText}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" disabled={false} onClick={createTodo} >Add</Button>
    </InputGroup.Append>
  </InputGroup>    
                
                </Col>

                {
                        todoos && todoos.map(
                            ({id,checked,text}) => <Card key={id} style={{cursor:'pointer',display:'flex',flexDirection:'row' ,justifyContent:'space-between',padding:'10px',alignItems:'center'}} >
                                <p  onClick={checkTodo.bind(this,id)} style={{cursor:'pointer',margin:'0px', textDecoration:checked ? 'line-through' : 'none'}}>{text}</p>
                                <Button className="btn-danger" onClick={removeTodo.bind(this,id)}> Delete </Button>
                            </Card>
                        )

                }
            </Row>
            
        </Container>
    )
}

export default Todo
