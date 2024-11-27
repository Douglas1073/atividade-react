import {ReactComponent as IconeGithub} from '../../assets/img/gitHub.svg';
import './style.css';

function Navbar() {
    return(
        <header>
      <nav className='container'>
        <div className='movies-nav-content'>
          <h1>MOVIES</h1>
          <a href="https://github.com/Douglas1073">
          <div className='movies-repository-container'>
            <IconeGithub/>
            <p className='movies-repository-link'>GITHUB</p>
          </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;