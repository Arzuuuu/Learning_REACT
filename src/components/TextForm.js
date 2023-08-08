import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase button was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    };
    const handleLowClick = () => {
        // console.log("Uppercase button was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    };
    const handleClearClick = () => {
        // console.log("Uppercase button was clicked");
        let newText = "";
        setText(newText)
    };

    const handleInverseCase=()=>{

        let newText = text.split("").map((char) => {
            if (char === char.toLowerCase()) {
                return char.toUpperCase();
            }
            else{
                return char.toLowerCase();
            }
        })

        .join("");

        setText(newText)
    };

    const handleReplaceText=()=>{
        let oldText = prompt("Enter word to Replace");
        let replaceText = prompt("Enter New Text");
        setText(text.replace(oldText,replaceText));
    };

    const handleReverseTextWords = () => {
        let reversedText = text.split(" ")
        .map(word=>word.split("").reverse().join("")).join(" ");

        setText(reversedText);
    };
    
    const handleReverseSentence=()=>{
        let reversedSentence = text.split(" ").reverse().join(" ");

        setText(reversedSentence);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UpperCase </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to LowerCase </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear </button>
      <button className="btn btn-primary mx-2" onClick={handleInverseCase}> Inverse Case </button>
      <button className="btn btn-primary mx-2" onClick={handleReplaceText}> Find and Replace Text</button>
      <button className="btn btn-primary mx-2" onClick={handleReverseTextWords}> Reverse characters in words</button>
      <button className="btn btn-primary mx-2" onClick={handleReverseSentence}> Reverse Sentence</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split("").length} Minutes to Read</p>


        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
