import { useState, useEffect, useMemo, useCallback} from 'react'
import './App.css'

/* useEffect -------------------------------------
The useEffect hook, declared inside a functional component A, will be called when that functional component gets (re-)rendered.
If it depends on some state inside the component A, or some prop being passed to component A, which in the parent function
is a state, causing re-render of the child component A, useEffect inside A will be called again.

If useEffect has no dependencies, it will be executed after every re-render of the component.
If its dep. array is empty, it'll be executed only after the first render.

*/


/* useRef:--
useRef hook:- ----------------------------------
This hook basically helps in storing a value across renders.
The value could be anything, that of a state, a variable, anything.
If we create a local variable, it will be re-initialized at the re-render.
But the useRef one is not.
useRef value can only be changed by accessing .current (currentValue) = something else.
Thus, useRef doesn't change across any renders or updates, and neither causes anything.

Also, the useRef object never changes, its current value only changes.
The syntax where useRef current value points to a DOM element is interpreted by JSX => its syntax.
eg:- The null is assigned to inputRef.current
const inputRef = useRef(null)
<input ref = {inputRef} />
Above, inputRef.current = inputElement -> Done automatically by React.
*/
function App() {

  const [length, setLength] = useState(50);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isNumAllowed, setIsNumAllowed] = useState(true);
  const [isSpecCharAllowed, setIsSpecCharAllowed] = useState(true);
  
  // This getElementById is called only after the HTML has been rendered.
  // Thus, it gives no error, like in some previous code.
  // Hence, here it is OK to implement like this.
  let API_KEY = "kWHaHvVbIYQKw8SUa8iefw==aaowZKzfcJgLasIF";
  function setLengthLabel() {
    let currLength = document.getElementById("passwordLength").value;
    setLength(currLength);  
  }

/*  useEffect ------------------------------------
  Here useEffect plays an important role.
  When the length changes, setLengthLabel is called, which in turn calls setLength, which causes rerender.
  If we try to get password for the new length using above code, what happens is that setLength is not finished re-rendering
  and we call API, with old length. And then, when setGeneratedPassword is called, we have password corresponding to older length.
  Thus, we need to wait for setLength to update length.
  We do that using useEffect hook, which is fired only after the re-rendering of the component is finished based on length state.
*/

/*  useCallback:- ---------------------------------
  useCallback hook - recreate the function object only if the dependency array changes. Not related to the output of the function itself.
  It is less useful in normal circumstances, but in case we are returning a child component which uses a function from the parent component,
  If that function is useCallback, then childComponent won't get re-rendered even if parent component is re-rendered, because,
  when the parent component is re-rendered, the function gets declared again(w/o useCallback), and the pointer to the function changes
  To child component, it might seem that the function changed, so it would re-render, which is unnecessary.
*/

/*  useMemo:-------------------------------
  In our case, it looks like, useMemo could be more useful, but as we'll see, it really isn't.
  What useMemo does is, if a function is wrapped in it, useMemo runs that function only of the dep. array changes.
  It doesn't mean that useMemo will remember all previous values for that function.
  say if dep array is [2], and it changes to [3], the fun is recomputed.
  If now it changes back to [2], the fun will be recomputed, as useMemo didn't store fun's value for [2].
*/

  // useMemo, is redundant here.
  function getPassword(){
    // API call
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.api-ninjas.com/v1/passwordgenerator?length=${length}&exclude_numbers=${isNumAllowed}&exclude_special_chars=${isSpecCharAllowed}`);
    console.log(`https://api.api-ninjas.com/v1/passwordgenerator?length=${length}&exclude_numbers=${isNumAllowed}&exclude_special_chars=${isSpecCharAllowed}`);
    xhr.setRequestHeader("X-Api-Key", API_KEY);
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
        setGeneratedPassword(JSON.parse(xhr.responseText)["random_password"]);
        console.log(generatedPassword, length)
      }
    };
    xhr.send();
  }

  useEffect(getPassword, [length, isNumAllowed, isSpecCharAllowed]);

  async function myFunction() {
    // Get the text field
    var copyText = document.getElementById("copyText");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    try{
      // Copy the text inside the text field
      await navigator.clipboard.writeText(copyText.value);
    
      // Alert the copied text
      // alert("Copied the text: " + copyText.value);
    } catch(error) {
      console.log("Couldn't copy with error code: ", error);
    }
     
  }

  return (
    <>
      <h1 className="text-4xl text-white">
        Password Generator
      </h1>

      <div className="bg-sky-700 w-8/12 mx-auto my-3 rounded-lg p-5">

        <div className='input-box w-10/12 mx-auto'>
          <input id = "copyText" type="text" className="rounded-md px-4 py-2 mx-1 w-4/6" value={generatedPassword}/>
          <button onClick={myFunction} className="bg-red-300 rounded-md px-3 py-2 text-white">copy</button>
        </div>

        <div className="controllers my-2">
          <input onInput={setLengthLabel} type="range" name="passwordLength" id="passwordLength" min="1" max="50" className = "w-6/12" step="1" />
          <label id="length" htmlFor="passwordLength" className="text-white mx-2">Length {length}</label>

          <input onClick={() => setIsNumAllowed(!isNumAllowed)} type="checkbox" name="Numbers" id="num" />
          <label  htmlFor="Numbers" className='text-white mx-2'>Numbers</label>

          <input onClick={() => setIsSpecCharAllowed(!isSpecCharAllowed)} type="checkbox" name="Characters" id="char" />
          <label htmlFor="Characters" className='text-white mx-2'>Characters</label>
        </div>

      </div>

    </>
  )
}

export default App
