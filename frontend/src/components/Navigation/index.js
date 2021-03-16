import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-link navbar-title-container">
          {!sessionUser && <NavLink className="navbar-title" exact to="/">
            <span>S</span></NavLink>}
          {sessionUser && <NavLink className="navbar-title" exact to="/dashboard">
            <span>S</span></NavLink>}
        </div>
      </div>
      { isLoaded && <div className="navbar-right">
        {sessionUser && <div className="navbar-link"><ProfileButton user={sessionUser} /></div>}
        {sessionUser && <div className="navbar-link"><NavLink to="/profile">Profile</NavLink></div>}
      </div> }
    </div>
  );
};

export default Navigation;