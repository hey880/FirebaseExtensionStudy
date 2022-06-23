function Result (props) {
    if (props.state && props.loading) {
        return <div>Translating...</div>
    }
    if (props.state && !props.loading) {
        return (
            <div>
                <div>Korea: {props.ko}</div>
                <div>English: {props.en}</div>
                <div>Arab: {props.ar}</div>
                <div>France: {props.fr}</div>
            </div>
        )
    }
}

export default Result;