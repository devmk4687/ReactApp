// text.length → counts all characters.

// text.trim().split(/\s+/).length → splits text by spaces and counts words.

// trim() removes leading/trailing spaces so they don’t add extra words.

// When you click Convert to Uppercase, the handleUpperCase function updates the state with text.toUpperCase().

// The textarea automatically reflects the updated text because its value is tied to state.

//text.split(/\n/).length → splits text wherever there’s a newline.

// Added fontSize state with default 16.

// <input type="range" /> (slider) lets you adjust font size between 10px → 50px.

// Applied style={{ fontSize: fontSize + "px" }} to preview text.

// onMouseEnter → triggers when you hover into the element.

// onMouseLeave → triggers when you hover out of the element.

// hovered state controls text color and message.

// Added fontFamily state (default Arial).

// Added <select> dropdown with multiple font options.

// Applied style={{ fontFamily }} to the preview text.

// Added reaction state.

// Rendered a set of emoji buttons (👍 😂 ❤️ 😮 😡 🔥).

// When clicked → updates reaction and shows it next to the text preview.

// Added hover animation (hover:scale-125).


import { useState } from "react"  

function Textutility(){

    const [txt1, setText1] = useState();
    const [result, setResult] = useState();
    const [color, setColor] = useState("#000000"); // default black
    const [hovered, setHovered] = useState(false);
    const [fontSize, setFontSize] = useState(16); // default 16px
    const [fontFamily, setFontFamily] = useState("Arial"); // default font
    const [reaction, setReaction] = useState(""); // emoji state
    function lenHandler(){
        setResult('Text lengths are: '+txt1.length)
        //console.log(txt1)
    }

     function countWords(){
        let wrdCount = txt1.trim() === "" ? 0 : txt1.trim().split(/\s+/).length;
        setResult('Words Count are: '+ wrdCount)
       
    }

    function convertUpper(){
        setResult('In Upper Case: '+txt1.toUpperCase())
        
    }

    function convertLower(){
        setResult('In Lower Case: '+txt1.toLowerCase())
        
    }


    function countLines(){
        setResult('Lines are: '+txt1.split(/\n/).length)
       
    }

    return(
    
        <div class="container" style={{width: "500px"}}>
             <h1>Text Utility App</h1>
            <div class="card">
                <div class="card-body">
                    <h2>Enter Text:</h2> 
                     <p className="mt-4 p-3 border rounded"> <textarea row="3" name="txt1" onChange={((e)=>setText1(e.target.value))}></textarea> </p>
                    <div className="mt-4 p-3 border rounded">
                            <label className="mr-2 font-medium">Choose Text Color: </label>
                            <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        {/* Font Size Slider */}
                        <div className="mt-4 p-3 border rounded">
                            <label className="mr-2 font-medium">Font Size: {fontSize}px</label>
                            <input
                            type="range"
                            min="10"
                            max="50"
                            value={fontSize}
                            onChange={(e) => setFontSize(Number(e.target.value))}
                            />
                        </div>
                        <div className="mt-4">
        <label className="mr-2 font-medium">Font Style: </label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="border rounded p-1"
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
      </div>
                    <p className="mt-4 p-3 border rounded">
                        <button onClick={lenHandler}>CalculateLengths</button>
                        <button onClick={countWords}>CountWords</button>
                        <button onClick={convertUpper}>ConvertToUpper</button>
                        <button onClick={convertLower}>ConvertToLower</button>
                        <button onClick={countLines}>CountLines</button>
                         {/* Emoji Reactions */}
                            <div className="mt-4">
                                <label className="mr-2 font-medium">React with Emoji: </label>
                                <div className="space-x-2 inline-block">
                                {["👍", "😂", "❤️", "😮", "😡", "🔥"].map((emoji) => (
                                    <button
                                    key={emoji}
                                    onClick={() => setReaction(emoji)}
                                    className="text-2xl hover:scale-125 transition-transform"
                                    >
                                    {emoji}
                                    </button>
                                ))}
                                </div>
                            </div>
                         
                    </p>
                        <div className="mt-4 p-3 border rounded" style={{ color: color, fontSize: `${fontSize}px`, fontFamily: fontFamily  }}>
                             <p
                                
                                style={{
                                    color: hovered ? color : "black", // change text color on hover
                                }}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >{result}
                            </p>
                            <span className="ml-3 text-3xl">{reaction}</span>
                        </div>
                </div>
            </div>
        </div>
   
    )
}

export default Textutility;