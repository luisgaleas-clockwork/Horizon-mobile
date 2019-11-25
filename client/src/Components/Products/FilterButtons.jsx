import React from "react"

const Filter = (props) => {
    const { none, high, low, genre } = props
    return (
        <div className="filter_bg">
            <div className="filter_btn">
                <button onClick={none}>None</button>
                <button onClick={high}>Highest Price</button>
                <button onClick={low}>Lowest Price</button>
            </div>
            <div className="genre">
                <h3>Genre:</h3>
                <select onChange={genre}>
                    <option value="none">None</option>
                    <option value="rap">Rap</option>
                    <option value="rock">Rock</option>
                    <option value="EDM">EDM</option>
                    <option value="latino">Latino</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </div>
    )
}

export default Filter