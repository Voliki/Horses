import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component<any, any> {
  render() {
    return (
      <div>
        <header className='col-12'>
          <div className='row'>
            <div className='col-4'>
              <h1><Link to='/' className='header-brand'>Horses</Link></h1>
            </div>
            <div className='col-4'>
              <div className='row'>
                <div className='col-3'>
                  <p className='H1'>News</p>
                </div>
                <div className='col-3'>
                  <p className='H1'>Contacts</p>
                </div>
              </div>
            </div>
            <div>
              <div className="btn-group">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Language
            </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">Action</button>
                  <button className="dropdown-item" type="button">Another action</button>
                  <button className="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;