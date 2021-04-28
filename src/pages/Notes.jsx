import React,{useState,useEffect} from 'react'
import { Col, Container, Row,Form ,Button,InputGroup,FormControl,Card} from 'react-bootstrap'
import './styles.scss'
function Notes() {
    var styleR = {borderColor:"red"}
    var styleG = {borderColor:"green"}
    var styleB= {borderColor:"blue"}
    const [red,setRed] = useState(true)
    const [green,setGreen] = useState(false)
    const [blue,setBlue] = useState(false)
    const [tags,setTags] = useState('')
    const [noteText,setNoteText] = useState('')
    const [notes,setNotes] = useState([])
    const [filtered,setFiltered] = useState([])
    var style = (red && styleR) || (green && styleG) || (blue && styleB)
   const redMode = () => {
       if(red) return
    setRed(true)
    setGreen(false)
    setBlue(false)
   }
   const greenMode = () => {
    if(green) return
    setRed(false)
    setGreen(true)
    setBlue(false)
   }

   const blueMode = () => {
    if(blue) return
    setRed(false)
    setGreen(false)
    setBlue(true)
   }

   const search = (searchText) => {
       let searchIt = searchText.trim()
        if(!searchIt){
            let notess = JSON.parse(localStorage.getItem('notes'))
            setFiltered(notess)
        }
        else{
                let notess = notes.filter( n => (n.text.includes(searchIt) || n.tags.find( el => el === searchIt)) )
                setFiltered(notess)
        }

   }

   const createNote = () => {
       let tagList = tags.length ? tags.split(' ') : []
       const note = {
           text: noteText,
           color:(red && 'red') || (green && 'green') || (blue && 'blue'),
           tags: tagList
       }
       console.log('note',note)
       setRed(true)
       setGreen(false)
       setBlue(false)
       setTags('')
       setNoteText('')
       let placeTo = localStorage.getItem('notes')
       let transformed = JSON.parse(placeTo)
       let id = transformed.push(note)
       transformed[id-1].id= id.toString()
       console.log('beforeSet',transformed)
       setNotes(transformed)
       setFiltered(transformed)
       localStorage.setItem('notes',JSON.stringify(transformed))
   }

   useEffect(
       () => {
            let itms = localStorage.getItem('notes')
            let tfd = JSON.parse(itms)
            setNotes(tfd)
            setFiltered(tfd)
       },[]
   )
    return (
        <Container className='site-bg'>
            <Row>
                
                <Col className="palete" style={{position:'relative'}}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} value={noteText} onChange={(e)=>{setNoteText(e.target.value)}} style={{...style,borderWidth:2}} />
    
  </Form.Group>
  <div className="red" onClick={redMode}>

</div>
<div className="green" onClick={greenMode}>

</div>
<div className="blue" onClick={blueMode}>

</div>
                </Col>
                <Button onClick={createNote} disabled={!noteText.length} >Create</Button>
                <InputGroup className="mb-3 mt-3">
    <FormControl
      placeholder="List your tags"
      aria-describedby="basic-addon2"
      onChange={(e)=> { setTags(e.target.value)}}
      value={tags}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" disabled={true}>Tags</Button>
    </InputGroup.Append>
  </InputGroup>
            </Row>

            <InputGroup className="mb-3 mt-3">
    <FormControl
      placeholder="Search"
      aria-describedby="basic-addon2"
      onChange={(e)=> {search(e.target.value) }}
    />
  </InputGroup>
            <Row>
               {filtered.length > 0 && filtered.map(
                    ({id,text,color}) => 
                        <Card  className="note" key={id} style={{background:color}}>
                            {text}
                </Card>
                    
                )   }
            </Row>
           


        </Container>
    )
}

export default Notes
