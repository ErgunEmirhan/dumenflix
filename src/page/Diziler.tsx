import React from 'react'
import Header from '../components/organisms/Header'
import HeaderTabs from '../components/molecules/HeaderTabs'
import FilterDropDowns from '../components/molecules/FilterDropDowns'
import Footer from '../components/organisms/Footer'

function Diziler() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row text-danger border-bottom border-danger"></div>
      <div className="row">
        <HeaderTabs />
      </div>
      <div className="row justify-content-around py-4 mt-2 rounded-2" style={{backgroundColor:' rgb(35, 35, 40)'}}>;
        <p style={{color:'white'}}>Sitemize henüz dizi yüklenmemiştir, takipte kalın &lt;3</p>
      
      </div>

      <div className="row">
        <Footer/>
      </div>
    </div>
  )
}

export default Diziler