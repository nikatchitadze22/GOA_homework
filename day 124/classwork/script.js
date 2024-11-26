const elem = React.createElement(
    "div",
    null,
    React.createElement("p", null, "this is a paragraph inside a div")
);

ReactDOM.render(elem, document.getElementById('id'));



const Info = () => {
    return (
        <div>
            <p>Hello World!</p>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Info());
