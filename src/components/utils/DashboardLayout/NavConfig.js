import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import EventIcon from "@mui/icons-material/Event";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import EventIcon from '@material-ui/icons/Event';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HomeIcon from '@mui/icons-material/Home';
//nav bar options
const NavConfig = [
  {
    title: "Home",
    path: "/app/home",
    icon: HomeIcon,
  },
  {
    title: "Date",
    path: "/app/date",
    icon: EventIcon,
  },
  {
    title: "Candidate",
    path: "/app/candidateadd",
    icon: PersonAddIcon,
  },
  {
    title:"candidate List",
    path:"/app/candidatelist",
    icon:ListAltIcon,
  },
  {
    title:"Votter Add",
    path:"/app/votteradd",
    icon: PersonAddIcon,
  },
  {
    title: "voter's List",
    path: "/app/voterslist",
    icon: ListAltIcon,
  },
];

export default NavConfig;
