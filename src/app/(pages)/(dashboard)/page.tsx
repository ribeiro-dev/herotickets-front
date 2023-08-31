import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";

export default function Dashboard() {
   return (
      <div className="container mx-auto">
         <BannerPrimary />

         <div className="p-2 text-blue">
            <p className="text-2xl font-medium">Eventos Em Destaque</p>
            <p className="text-base font-light">Se divirta com os principais eventos de Minas Gerais e do Brasil</p>
         </div>
         <div className="grid grid-cols-3 gap-4 mb-4">
            {/* EVENTOS EM DESTAQUE */}
            <BannerSecondary />
            <BannerSecondary />
            <BannerSecondary />
         </div>

         <div className="p-2 text-blue">
            <p className="text-2xl font-medium">Navegue por tipo de evento</p>
            <p className="text-base font-light">Vá ao evento que é a sua cara!</p>
         </div>
         <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
               { categories.map(category => {
                  return (
                     <div className="flex flex-col items-center justify-center cursor-pointer" key={category.name}>
                        <img src={category.icon} alt="" className="rounded-full" />
                        <p>{category.name}</p>
                     </div>
                  );
               }) }
               
         </div>
      </div>
   );
}