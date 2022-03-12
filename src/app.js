import { useState } from "react"
import Values from 'values.js'

function App() {
    const[color,setColor] = useState()
    const[list,setList] = useState(new Values('#ff7777').all(10))
    const[error,setError] = useState(false)
    function handelClick(e){
        e.preventDefault()
        try{
            setList(new Values(color).all(10))
            setError(false)
        }
        catch(err){
            setError(true)
        }
    }
    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form>
                    <input 
                    type="text" 
                    placeholder="type color" 
                    className={error ? 'error' : ''}
                    onChange={(e)=>setColor(e.target.value)}
                    />
                    <button type="submit" className="btn" onClick={handelClick}>Get Colors</button>
                </form>
            </section>
            <section className="colors">
                {
                    list.map((el,index)=>{
                        const color = `rgb(${el.rgb.join(',')}`
                        return <div key={index} style={{background: color}}>{color}</div>
                    })
                }
            </section>
        </>
    )
}

export default App