
import C1 from './C1'
export default function B1({userName}){
    return (
        <div>
            <h1>B1 Component </h1>
            <C1 userName={userName}></C1>
        </div>
    )
}