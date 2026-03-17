
import B1 from './B1'

export default function A1({userName}){
    return (
        <div>
            <h1>A1 Component</h1>
            <B1 userName={userName}></B1>
        </div>
    )
}