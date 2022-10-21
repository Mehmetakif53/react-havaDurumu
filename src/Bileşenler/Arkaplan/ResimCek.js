import React from 'react'
import yagmurlu from "../../Resimler/yagmur.jpg"
import bulutlu from "../../Resimler/bulutlu.jpg"
import gunesli from "../../Resimler/gunesli-gunes-hava-durumu.jpg"
import karli from "../../Resimler/kar.jpg"
import sisli from "../../Resimler/sis.jpg"


function ResimCek({durum}) {
    switch(durum) {
        case "Rain":
            return <img className='arkaplan-resim' src={yagmurlu}/>
        case "Drizzle":
            return <img className='arkaplan-resim' src={yagmurlu}/>
        case "Clear":
            return <img className='arkaplan-resim' src={gunesli}/>
        case "Mist":
            return <img className='arkaplan-resim' src={sisli}/>
        case "Snow":
            return <img className='arkaplan-resim' src={karli}/>
        case "Clouds":
            return <img className='arkaplan-resim' src={bulutlu}/>
          default:
            return <img className='arkaplan-resim' src={"https://media.baamboozle.com/uploads/images/160433/1618221795_43835.jpeg"}/>
    }
}

export default ResimCek
