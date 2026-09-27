import { FiCoffee, FiShoppingBag } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { PiCurrencyDollar, PiWalletBold, PiPiggyBankBold, PiChartBarBold } from "react-icons/pi";
import { MdOutlineCheckCircle, MdCancel , MdFilterAlt} from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuTrendingUp, LuChevronRight } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiCategoryAlt } from "react-icons/bi";
import {
	FiBox ,
	FiHome,
	FiGrid,
	FiPackage,
	FiEdit2, 
	FiTrash2,
	FiRefreshCw,
	FiClipboard,
	FiLogOut,
	FiUpload ,
	 FiMapPin,
	  FiEye,
	  FiBell 
} from "react-icons/fi";
import { TbReceipt } from "react-icons/tb";


interface IRenderIconProps {
	icon: string;
	size?: number;
	color?: string
}

export const RenderIcon = ({ icon, size = 20, color }: IRenderIconProps) => {
	switch (icon) {
		case "cup":
			return <FiCoffee  color="white" size={size} />;
		case "trending-up":
			return <LuTrendingUp  color="green" size={size} />;
		case "arrowUp":
			return <GoArrowUpRight size={size} />;
		case "dollar":
			return <PiCurrencyDollar  color={color} size={size} />;
		case "shoppingBag":
			return <FiShoppingBag  size={size} />;
		case "wallet":
			return <PiWalletBold size={size} />;
		case "piggyBank":
			return <PiPiggyBankBold  size={size} />;
		case "barChart":
			return <PiChartBarBold  size={size} />;
		case "users":
		    return <HiMiniUserGroup color={color} size={size}/>;
		case "upload":
		    return <FiUpload color={color} size={size}/>;
		case "edit":
			return <FiEdit2 color={color} size={size} />;
		case "bell":
			return <FiBell color={color} size={size} />;
		case "refresh":
			return <FiRefreshCw color={color} size={size} />;
		case "trash":
			return <FiTrash2 color={color} size={size} />;
		case "chevronRight":
			return <LuChevronRight  size={size} />;
		case "category":
			return <BiCategoryAlt color={color}  size={size} />;
		case "check":
			return <MdOutlineCheckCircle color="green" className="p-1 border border-white rounded-lg bg-white"  size={30} />;
		case "home":
			return <FiHome size={size} />;
		case "grid":
			return <FiGrid size={size} />;
		case "package":
			return <FiPackage size={size} />;
		case "clipboardList":
			return <FiClipboard color={color} size={size} />;
		case "receipt":
			return <TbReceipt color={color} size={size} />;
		case "logOut":
			return <FiLogOut size={size} />;
		case "box":
			return <FiBox color={color} size={size} />;
		case "award":
			return <GoTrophy color={color?? "green"} size={size} />;
		case "mapPin":
			return <FiMapPin color={color} size={size} />;
		case "eye":
			return <FiEye color={color} size={size} />;
		case "filter":
			return <MdFilterAlt color={color} size={size} />;
		case "clock":
		    return <CiClock1 color="blue" className="p-1 border border-white rounded-lg bg-white"  size={30} />;
		case "x":
		    return <MdCancel color="red" className="p-1 border border-white rounded-lg bg-white"  size={30}/>;
		case "calendar":
		    return <FaRegCalendarCheck color="green" className="p-1 border border-white rounded-lg bg-white"  size={30} />;
		default:
			return null;
	}
};
