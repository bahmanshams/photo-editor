type Props = {
    setBackground: any;
}

function Navbar({ setBackground }: Props) {
    return (
        <div className="navbar">
            <span>Photo Editor</span>
            <input type="text" placeholder='image link' onChange={(e) => { setBackground(e.target.value) }} />
        </div>
    );
}

export default Navbar;