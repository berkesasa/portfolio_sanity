const banner = (key) => {
    return (
        <div key={key}>
            <p className="index">Welcome The My Website</p>
            <p className="text-color">
                Type
                <span className="command">
                    {' help '}
                </span>
                or
                <span className="command">
                    {' -h '}
                </span>
                to see all available commands
            </p>
        </div>
    )
}

export default banner