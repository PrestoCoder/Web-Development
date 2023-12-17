import ColorButton from "./ColorButton";
// Another way could be to declare all buttons' jsx together without getting it from a component.
// This way, we could use state instead, and set it according to the color of the button that is being clicked.
// However, state can be avoided being used, as the only state to be maintained is the color of the background.

function ButtonBar() {
    return (
        <div className="flex w-1/2 flex-wrap p-0 bg-white py-2 rounded-lg mx-auto my-96">
            <ColorButton color = "blue"/>
            <ColorButton color = "red"/>
            <ColorButton color = "pink"/>
            <ColorButton color = "gray"/>
            <ColorButton color = "yellow"/>
            <ColorButton color = "green"/>
        </div>
    );
}

export default ButtonBar;