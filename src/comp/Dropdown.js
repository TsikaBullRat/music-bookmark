export const Dropdown = () => {
    return (
        <span
            className="dropdown"
            onMouseEnter={() => document.getElementById('genre').style.display = 'block'}
            onMouseLeave={() => document.getElementById('genre').style.display = 'none'}
        >
            Genre
            <ul id="genre">
                <li><label htmlFor="">Hip Hop</label></li>
                <li><label htmlFor="">Rock</label></li>
                <li><label htmlFor="">Jazz</label></li>
            </ul>
        </span>
    )
}