export default function Box(props) {
    return (
        <h1 className={`bg-${props.color}-400`}>
            Number: {props.num}
        </h1>
    )
}
