import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import img_6 from "./images/6.png";
import img_5 from "./images/5.png";
import img_4 from "./images/4.png";
import img_3 from "./images/3.png";
import img_2 from "./images/2.png";
import img_1 from "./images/1.png";
import img_9 from "./images/post_9.png";
// import "./aos.css";
const Landing = () => {
  const landingData = useSelector((state) => state.resource.landing);
  const products = useSelector((state) => state.resource.products);
  return (
    <>
      <header id="wrap-header">
        <div className="container">
          <section className="header-top">
            <div className="container">
              <a href="">
                <img
                  src={`http://landapi.vveco.vn${landingData?.logo}`}
                  alt=""
                />
              </a>
            </div>
          </section>
          <section className="header-bottom">
            <div className="row">
              <div className="col-md-6">
                <div className="bottom-left d-flex justify-content-center flex-column ">
                  <h1 className="title-header">
                    ưu đãi đặc biệt
                    <br /> chỉ trong quý
                    <br /> 2/2021
                  </h1>
                  <p>{landingData?.title}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-sign-up">
                  <h3>Đăng ký thông tin</h3>
                  <p className="free-contact">
                    {`Để nhận báo giá & tư vấn`} <br /> miễn phí
                  </p>
                  <form action="" className="wrap-form">
                    <div className="form-group">
                      <input
                        type="text"
                        id="inputName"
                        placeholder="Họ và tên"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Nhập Email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Nhập Số điện thoại"
                        className="form-control"
                      />
                    </div>
                    <button className="btn font-bold" type="submit">
                      Liên hệ với chúng tôi ngay
                    </button>
                  </form>
                  <p>
                    Liên hệ ngay với chúng tôi nếu bạn cần tư vấn <br /> thêm:
                    0932211688/ www.tnl-lease.vn
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
      <main id="main-container">
        <section
          id="wrap-overview"
          className="padding-section"
          data-aos="zoom-in"
        >
          <div className="container">
            <h3 className="title text-center text-uppercase">Tổng quan</h3>
            <p className="text-center sub-title">
              Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp
              dẫn về sản phẩm dịch vụ, giúp người xem dễ <br /> dàng tim thấy
              nội dung của bạn trong kết quả tìm kiếm
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="image-over-view">
                  <img src={img_4} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="content">
                  <h4>Nội dung chi tiết</h4>
                  <p className="color-green font-bold">
                    Mô tả thông tin có giá trị, những điểm nổi bật, lời giới
                    thiệu hấp dẫn về sản phẩm dịch vụ
                  </p>
                  <p>
                    Mô tả thông tin có giá trị về sản phẩm dịch vụ, giúp người
                    xem dễ dàng tìm thấy nội dung của bạn trong kết quả tìm
                    kiếm. Những mô tả được viết tốt kèm theo từ khóa phù hợp có
                    thể tăng lượt xem vì chúng hiển thị tốt trong kết quả tìm
                    kiếm
                  </p>
                  <div className="line"></div>
                  <div className="group-hightlight">
                    <p className="font-bold">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                      {`Sea & mountain view`}
                    </p>
                    <p className="mb-0 font-bold">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                      attach bathroom with cold/hot water system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="wrap-office"
          className="bg-green padding-section"
          data-aos="fade-up-right"
          data-aos-duration="5000"
        >
          <div className="container">
            <h3 className="title text-center text-uppercase ">Văn phòng</h3>
            <div className="line-title"></div>
            <div className="row">
              <div className="col-md-6">
                <div className="content">
                  <p>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân bay
                    Cam Ranh 5 phút
                  </p>
                  <p>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân bay
                    Cam Ranh 5 phút
                  </p>
                  <p>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân bay
                    Cam Ranh 5 phút
                  </p>
                  <p>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân bay
                    Cam Ranh 5 phút
                  </p>
                  <p>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân bay
                    Cam Ranh 5 phút
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-office">
                  <img src={img_9} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="wrap-advantage"
          className="padding-section position-relative"
          data-aos="fade-up-left"
        >
          <div className="fill-transparent-section"></div>
          <div className="container position-relative">
            <h3 className="title text-center text-uppercase ">
              Lợi thế vị trí
            </h3>
            <div className="line-title bg-green"></div>
            <div className="row">
              <div className="col-md-6">
                <div className="img-advantage">
                  <img src={img_2} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="content">
                  <p className="mb-0">
                    BĐS TNL, tọa lạc khu du lịch bắc bán đảo cam ranh
                  </p>
                  <div className="line bg-green"></div>
                  <div className="description">
                    <p className="font-bold">
                      Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân
                      bay Cam Ranh 5 phút
                    </p>
                    <p>
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân
                      bay Cam Ranh 5 phút
                    </p>
                    <p>
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân
                      bay Cam Ranh 5 phút
                    </p>
                    <p>
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân
                      bay Cam Ranh 5 phút
                    </p>
                    <p>
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      Vị trí biệt thự đắc địa trên khu Vàng Cam Ranh, cách sân
                      bay Cam Ranh 5 phút
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="wrap-ground"
          className="padding-section position-relative pt-0"
          data-aos="fade-down-right"
        >
          <div className="fill-transparent-section"></div>
          <div className="container position-relative">
            <h3 className="title text-center text-uppercase ">Mặt bằng</h3>
            <div className="line-title bg-green"></div>
            <div className="row">
              {products &&
                products.map((product) => (
                  <div className="col-md-6">
                    <div className="box-ground">
                      <p className="content">{product?.comtent}</p>
                      <img src={product.images[0]} alt="" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section
          id="wrap-center"
          className="padding-section position-relative pt-0"
          data-aos="fade-down-left"
        >
          <div className="fill-transparent-section"></div>
          <div className="container position-relative">
            <h3 className="title text-center text-uppercase ">
              Trung tâm thương mại
            </h3>
            <div className="line-title bg-green"></div>
            <div className="row">
              <div className="col-md-4">
                <div className="img">
                  <img src={img_1} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="img">
                  <img src={img_2} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="img">
                  <img src={img_3} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="img">
                  <img src={img_4} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="img">
                  <img src={img_5} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="img">
                  <img src={img_6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="wrap-footer">
        <section id="header-top" className="position-relative">
          <div className="fill-transparent"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h3>Để nhận bảng giá</h3>
                <p>
                  Để nhận bảng giá bán và phương thức thanh toán dự án căn hộ
                  TLN, quý khách vui lòng liên hệ qua số 093 2211 688
                </p>
              </div>
              <div className="col-md-5">
                <h3>Hỗ trợ khác hàng 24/24</h3>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  {landingData?.phone}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="header-bottom">
          <div className="container">
            <i className="fa telegram fa-paper-plane" aria-hidden="true"></i>
            <h3 className="text-center">Liên hệ với chúng tôi</h3>
            <p className="text-center">
              Công ty cổ phần đầu tư và cho thuê tài sản TNL - Thành viên tập
              đoàn TNL Holdign Việt Nam
            </p>
            <div className="row mt-5">
              <div className="col-md-4">
                <p className="mb-0">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {landingData?.address}
                </p>
              </div>
              <div className="col-md-4">
                <p className="mb-0">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  Hotline  {landingData?.telegram}
                </p>
              </div>
              <div className="col-md-4">
                <p className="mb-0">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  Email:  {landingData?.email}
                </p>
              </div>
            </div>
            <div className="copy-ritgh text-center mt-4">
              © 2020 All Rights Reserved VVECO
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Landing;
