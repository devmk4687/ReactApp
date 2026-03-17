
export default function Arrayrendering(){
    var arr = ['C','CPP','java','Testing','Python']

    return(
        
        <>
            {
                arr.map((e)=>
                {
                    return(
                        <p>{e}</p>
                    )
                
                })
            }
        </>
        
    )
}