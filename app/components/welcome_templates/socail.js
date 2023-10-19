const social = (key) => {
    const column = ['col-span-1 command', 'col-span-1']

    return (
        <div key={key}>
            <div className="grid grid-cols-2">
                <div className={column[0]}>GitHub</div>
                <div className={column[1]}>
                    <a href="https://github.com/berkesasa"
                        target="_blank">github.com/berkesasa
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className={column[0]}>LinkedIn</div>
                <div className={column[1]}>
                    <a href="https://www.linkedin.com/in/berkesasa"
                        target="_blank">linkedin.com/in/berkesasa
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className={column[0]}>Stackoverflow</div>
                <div className={column[1]}>
                    <a href="https://stackoverflow.com/users/19209743/berkesasa"
                        target="_blank">stackoverflow/berkesasa
                    </a>
                </div>
            </div>
        </div>
    )
}

export default social