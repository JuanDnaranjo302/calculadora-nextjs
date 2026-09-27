import GoalDaily from "@/src/feature/Dashboard/components/GoalDaily"
import { TopNav } from "@/src/Common/components/TopNav";
import TopProduct from "@/src/feature/Dashboard/components/TopProduct";
import LoyalCustomers from "@/src/feature/Dashboard/components/LoyalCustomers";
import SalesSummary from "@/src/feature/Dashboard/components/SalesSummary";
import {mocks_producto, mocks_customer, mocks_summary_by_period} from "@/src/mocks/Dashboard";
export default function app(){
    return(
      
        <div className="bg-[#c7ddcc] min-h-screen w-full overflow-x-hidden ">
       <TopNav/>
       <div className="p-3 text-black gap-3">
        <div className="">
        <GoalDaily
          entregados={2}
          pendientes={2}
          cancelados={1}
          total={7}
          meta={{ actual: 2, objetivo: 50 }}
        />  
        </div>
        <div className="pt-4">
        <TopProduct products={mocks_producto}/>
        </div>
        <div className="flex pt-4 gap-4">
          <SalesSummary dataByPeriod={mocks_summary_by_period} />
          <LoyalCustomers customers={mocks_customer}/> 
        </div>
        </div>
       </div>
    );
}