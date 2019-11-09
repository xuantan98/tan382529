import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

export class Menu extends Component {
	render() {
		return (
			<div className="menu mb-5">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dard bg-dark">
          <a className="navbar-brand text-white" href="/">Trang chủ</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active text-white" href="/postcategory/2">Pháp luật</a>
              <a className="nav-item nav-link text-white" href="/postcategory/3">Thời sự</a>
              <a className="nav-item nav-link text-white" href="/postcategory/4">Thể thao</a>
              <a className="nav-item nav-link text-white" href="/postcategory/5">Công nghệ</a>
              <a className="nav-item nav-link text-white" href="/postcategory/6">Giải trí</a>
              <a className="nav-item nav-link text-white" href="/postcategory/7">Thế giới</a>
            </div>
          </div>
        </nav>
      </div>
      );
	}
}
export default Menu
