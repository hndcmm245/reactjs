import React from 'react';
import './navi.css';

const Header = () => {
  return (
    <header>
      <div className="grid wide">
        <div className="container row">
          <div className="col c-0 m-0 l-1">
            <a href="https://nhanam.vn/">
              <img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/logo.png?1704690471681" alt="Nhã Nam Logo" />
            </a>
          </div>
          <div className="col c-0 m-6 l-0">
            <div className="header_content" style={{ justifyContent: 'flex-start' }}>
             
              <a href="https://nhanam.vn/">
                <img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/logo.png?1704690471681" alt="Nhã Nam Logo" />
              </a>
            </div>
          </div>
          <div className="col c-12 m-0 l-0">
            <div className="header_content">
             
              <a className="header_content" href="https://nhanam.vn/">
                <img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/logo.png?1704690471681" alt="Nhã Nam Logo" />
              </a>
              <div className="header_content">
                
                  <div className="item_counter_box">
                    <div className="item_counter">0</div>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="c-0 m-0 l-8">
            <ul className="header_content">
              <li><a href="https://nhanam.vn/">Trang chủ</a></li>
              <li className="dropdown">
                <a className="list" href="https://nhanam.vn/lien-he">Tin sách</a>
                <div className="dropdown_list">
                  <a href="https://nhanam.vn/tin-nha-nam">Tin Nhã Nam</a>
                  <a href="https://nhanam.vn/tin-nha-nam">Review sách của độc giả</a>
                  <a href="https://nhanam.vn/tin-nha-nam">Review sách trên báo chí</a>
                  <a href="https://nhanam.vn/tin-nha-nam">Biên tập viên giới thiệu</a>
                </div>
              </li>
              <li className="dropdown">
                <a className="list" href="https://nhanam.vn/collections/all">Sách Nhã Nam</a>
              </li>
              <li><a href="https://nhanam.vn/tac-gia">Tác giả</a></li>
              <li className="dropdown">
                <a className="list" href="https://nhanam.vn/cuoc-thi">Cuộc thi</a>
                <div className="dropdown_list">
                  <a href="https://nhanam.vn/tin-nha-nam">AI ĐÓ ĐỌC CÙNG TA</a>
                </div>

              </li>
              <li><a href="https://nhanam.vn/gioi-thieu">Về Nhã Nam</a></li>
              <li className="dropdown">
                <a className="list" href="https://nhanam.vn/lien-he">Liên hệ</a>
                <div className="dropdown_list">
                  <a href="https://nhanam.vn/tin-nha-nam">Hệ thống hiệu sách</a>
                  <a href="https://nhanam.vn/tin-nha-nam">Hệ thống phát hành</a>
                  <a href="https://nhanam.vn/tin-nha-nam">Gửi thư cho Nhã Nam</a>
                  <a href="https://nhanam.vn/tin-nha-nam">Tuyển dụng</a>
                </div>

              </li>
            </ul>
          </div>
          <div className="col c-0 m-0 l-3">
            <div className="header_content">
              <form className="header_search">
                <input type="text" placeholder="Tìm kiếm..." required />
                
              </form>
              
              
                <div className="item_counter_box">
                  <div className="item_counter">0</div>
                </div>
             
            </div>
          </div>
          <div className="col c-0 m-6 l-0">
            <div className="header_content">
              <form className="header_search">
                <input type="text" placeholder="Tìm kiếm..." required />
                
              </form>
              <div className="header_content">
                
                  <div className="item_counter_box">
                    <div className="item_counter">0</div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-12 l-12">
            <a href="https://nhanam.vn/">Trang chủ</a>
            
            <span>Đăng nhập tài khoản</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <Nav />
      {/* Add your login form here */}
    </div>
  );
};

export default LoginPage;