import Image from "next/image"
import IconCatalog from '@/public/mainimg/icon_catalog.svg'
import IconSearch from '@/public/mainimg/icon_search.svg'
import IconUser from '@/public/mainimg/icon_user.svg'
import IconLike from '@/public/mainimg/icon_like.svg'
import IconShopping from '@/public/mainimg/icon_shopping.svg'

const Index = () => {
  return (
    <>
    <div className="pt-[15px] pb-[15px] bg-[#FFF] w-full">
      <div className="container mx-auto px-10 max-w-1240">
      <div className="flex justify-between">
      <div className="flex gap-3">
      <button className="bg-[#1F1D14] gap-3 flex items-center text-[20px] font-normal pt-[15px] pb-[15px] pl-[45px] pr-[45px] rounded-xl text-white hover:bg-[#FBD029] transition-all hover:text-[#1F1D14] ">
      <Image src={IconCatalog} alt="icon_catalog"/>
      Каталог
      </button>
     <div className="flex">
     <input type="text" placeholder="Поиск" className="w-[500px] text-[16px] placeholder:text-black pt-[15px] pb-[15px] pl-[20px] pr-[45px] rounded-xl bg-[#F2F2F2] focus:bg-[#FFF] focus:outline-[#FBD029] transition-all"/>
     <Image src={IconSearch} alt="search" className="-ml-[45px]"/>
     </div>
      </div>

      <div className="flex gap-3">
        <button className="bg-[#F2F2F2] pt-[13px] pl-[13px] pr-[13px] pb-[13px] rounded-md hover:bg-[#FBD029] transition-all">
          <Image src={IconUser} alt="user"/>
        </button>
        <button className="bg-[#F2F2F2] pt-[13px] pl-[13px] pr-[13px] pb-[13px] rounded-md hover:bg-[#FBD029] transition-all">
          <Image src={IconLike} alt="like"/>
        </button>
        <button className="bg-[#F2F2F2] pt-[13px] pl-[30px] pr-[30px] pb-[13px] rounded-md text-[20px] flex items-center gap-2 text-[#1F1D14] hover:bg-[#FBD029] transition-all">
          <Image src={IconShopping} alt="shopping"/>
          Корзина
        </button>
      </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default Index