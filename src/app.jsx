import logo from './logo.svg'
import logoFooter from "./logo-footer.svg"
import './app.css'
import { data, momoData, liquorData } from "../src/data/menu"

export function App() {
  return (
    <>
      <header>
        <div>
          <img src={logo} />
        </div>
        <div>
          <h2>MBU Hill Cafe & Restro</h2>
          <h1>Menu</h1>
        </div>
      </header>
      <main>
        <div>
          {data.map((course) => {
            return <div className='menu-container'>
              <h3 className='menuTitle'>{course.title}</h3>
              {course.menus.map((item) => {
                return <div className='menuItem'>
                  <p>{item.name}</p>
                  <h4>{item.price}</h4>
                </div>
              })}
            </div>
          })}
        </div>
        <div>
          <h3 className='menuTitle'>Momo</h3>
          <div className='menuList menuList1'>
            <p></p>
            <h4>Steam</h4>
            <h4>Fry</h4>
            <h4>C</h4>
          </div>
          {momoData.map((item) => {
            return <div className='menuList menuList1'>
              <p>{item.name}</p>
              <h4>{item.priceA}</h4>
              <h4>{item.priceB}</h4>
              <h4>{item.priceC}</h4>
            </div>
          })}
        </div>
        <div className='extra-menu'>
          <h3 className='menuTitle'>Domestic Liquor</h3>
          <div className='menuList menuList2'>
            <p></p>
            <h4>Qtr</h4>
            <h4>Half</h4>
            <h4>Full</h4>
          </div>
          {liquorData.map((item) => {
            return <div className='menuList menuList2'>
              <p>{item.name}</p>
              <h4>{item.priceA}</h4>
              <h4 className='price-mid'>{item.priceB}</h4>
              <h4>{item.priceC}</h4>
            </div>
          })}
        </div>
      </main>
      <footer>
        <div className='footer-logo'>
          <img src={logoFooter} />
        </div>
        <h4>Budhanilkantha-01, Taulung Chautara</h4>
        <h4><span>Contact: </span> 9860975965 / 9818398241</h4>
      </footer>
    </>
  )
}
