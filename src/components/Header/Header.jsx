import { Link } from 'react-router-dom';
import './Header.css';


function Header({children}){
   
    return ( <header className="header">
        {children}
        
    <nav className="menu">
    <Link to="/">Home</Link> &nbsp;
    <Link to="/books">Book</Link> &nbsp;
    <Link to="/bookReservation">BookReservation</Link> &nbsp;
    <Link to="/members">Members</Link> &nbsp;
    <Link to="/employees">Employees</Link> &nbsp;
    <Link to="/subscriptions">Subscriptions</Link> &nbsp;
        
    </nav>
</header>

            
    )
}
export default Header;