import D1 from './D1'

export default function C1({userName}){
    return (
        <div>
            <h1>C1 Component</h1>
            <D1 userName={userName}></D1>
        </div>
    )
}