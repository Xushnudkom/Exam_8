import IntroCarousel from '../components/main/inrtoCarousel/index'
import CatalogSection from '../components/main/catalog/catalogsection'
import CaruselProduct from "@/components/main/carusel-prodoct";
import Useful from "@/components/main/useful"
import Advantage from "@/components/main/advantage"
import About from "@/components/main/about"
export default function Home () {
  return (
    <main>
     {/* <h1>
      main
     </h1> */}
     
          <IntroCarousel />
          <CatalogSection />

        
      <section className="bg-[#F2F2F2] pb-[80px] ">
        <div className="container mx-auto px-2 ">
          <div className="pt-[76px]">
            <h1 className="text-[32px] ml-[30px] mb-[31px]">Акция</h1>
            <div>
              <CaruselProduct text="Акция" bg="#FF1C1C"/>
            </div>
          </div>
          <div className="pt-[1px]">
            <h1 className="text-[32px] ml-[30px] mb-[31px]">Новинки</h1>
            <div>
              <CaruselProduct text="Новый" bg="#917BFF"/>
            </div>
          </div>
          <div className="pt-[1px]">
            <h1 className="text-[32px] ml-[30px] mb-[31px]">Продукты</h1>
            <div>
              <CaruselProduct />
            </div>
          </div>
          <div className="pt-[1px]">
            <h1 className="text-[32px] ml-[30px] mb-[31px]">ТОП продажа</h1>
            <div>
              <CaruselProduct text="ТОП" bg="#10DE24" />
            </div>
          </div>
          </div>
          </section>

          <section>
            <div>
              <Useful />
            </div>
          </section>
          
          <section>
            <div>
              <Advantage />
            </div>
          </section>

          <section>
            <div>
              <About />
            </div>
          </section>
        
          


    </main>
  )
}
