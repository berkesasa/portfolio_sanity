const help = (key) => {
    const column = ['col-span-1 command', 'col-span-1']

    return (
        <div key={key}>
            <div className="grid grid-cols-2">
                <div className="col-span-2 code-color">Options:</div>
            </div>
            <div className="grid grid-cols-2">
                <div className={column[0]}>summary</div>
                <div className={column[1]}>Get summary about me</div>
            </div>
            <div className="grid grid-cols-2">
                <div className={column[0]}>social</div>
                <div className={column[1]}>Github, Linkedin, Stackoverflow</div>
            </div>
            <div className="grid grid-cols-2">
                <div className={column[0]}>contact</div>
                <div className={column[1]}>To contact by mail</div>
            </div>
            <div className="grid grid-cols-2">
                <div className={column[0]}>home</div>
                <div className={column[1]}>Take me to the homepage</div>
            </div>
            <div className="grid grid-cols-2">
                <div className={column[0]}>clear</div>
                <div className={column[1]}>Clear the terminal</div>
            </div>
        </div>
    )
}

export default help