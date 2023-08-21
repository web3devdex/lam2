import Footer from "../footer/footer";
import Header from "../header/header";

export default function Home() {
  return (
    <div className="main-home">
      <Header></Header>
      <div className="content-home">
        <div className="left-home">
          <h1>BAMM</h1>
          <p>Developers, traders, and liquidity
            providers participate together in
            a financial marketplace that is
            open and accessible to all.</p>
          <div className="div-btn">
            <button>Earn <img src="ooui_arrow-next-ltr.png" alt="" /></button>
          </div>
        </div>
        <div className="right-home">
             <img src="bgsl.png" className="bg-slider" alt="" />
             <div className="content-slider">
              <img src="sli1.png" alt="" />
              <ul>
                <li><img src="Rectangle21.png" alt="" /></li>
                <li><img src="Rectangle13.png" alt="" /></li>
                <li><img src="Rectangle21.png" alt="" /></li>
                <li><img src="Rectangle21.png" alt="" /></li>
                <li><img src="Rectangle21.png" alt="" /></li>
              </ul>
             </div>
        </div>
      </div>
      <div className="thongke-home">
        <ul>
          <li>
            <img src="image 3.png" alt="" />
            <span>LTC$ 87.67</span>
            <span className="cl-red"> -1.32 %</span>
          </li>
          <li>
            <img src="image 4.png" alt="" />
            <span>LTC$ 87.67</span>
            <span className="cl-red"> -1.32 %</span>
          </li>
          <li>
            <img src="image 5.png" alt="" />
            <span>LTC$ 87.67</span>
            <span className="cl-red"> -1.32 %</span>
          </li>
          <li>
            <img src="image 6.png" alt="" />
            <span>LTC$ 87.67</span>
            <span className="cl-red"> -1.32 %</span>
          </li>
          <li>
            <img src="image 7.png" alt="" />
            <span>LTC$ 87.67</span>
            <span className="cl-red"> -1.32 %</span>
          </li>
          <li>
            <img src="image 8.png" alt="" />
            <span>LTC$ 87.67</span>
            <span className="cl-red"> -1.32 %</span>
          </li>
          
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
}
