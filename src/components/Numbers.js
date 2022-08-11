const Numbers = ({count}) => {
    const color = (count) => {
        return count > 0? 'green': count < 0? 'red' : 'black';
    }
    return (
        <h1 className="center" style={{color: color(count)}}>
            {count}
        </h1>
    )
}

Numbers.defaultProps = {
    count: 0
}

export default Numbers