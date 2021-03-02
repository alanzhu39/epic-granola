const Header = ({ title }) => {
    return (
        <div className='tabs is-centered'>
            <ul>
                <li className='is-active' />
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
            </ul>
        </div>
    )
}

export default Header
