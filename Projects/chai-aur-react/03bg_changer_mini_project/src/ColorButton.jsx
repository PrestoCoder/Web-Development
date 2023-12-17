
function ColorButton(props) {
    function changeBg() {
        document.body.style.backgroundColor = props.color
    }
    return (
        <>
            <button
                type="button"
                className= "rounded-md w-24 mx-3 px-3 py-2 border-gray-700 border-2 text-sm font-semibold text-lavender shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                // We can pass JS objects in JSX as well.
                // So, to open a window, we use curly braces, then for the object, another pair of curly braces.
                style={{backgroundColor:props.color}}
                onClick = {changeBg}
            >
                <span className=" text-yellow-500">{props.color}</span>
            </button>
        </>
        

    );
}

export default ColorButton;