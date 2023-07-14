import { useState } from "react";

function Header({show}) {
    const [value, setvalue] = useState('')

    const handleChange = (event) => {
        setvalue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        show(value)
    }

    return ( 
        <div className="header">
            <p className="header-p">Select the movie you want to watch:</p>

            <form className="form-container" onSubmit={handleSubmit}>
                <input placeholder="Movie Name" className="input" value={value} onChange={handleChange} />
            </form>
        </div>
     );
}

export default Header;