
import EventIcon from "@mui/icons-material/Event";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import EventIcon from '@material-ui/icons/Event';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import ChairIcon from '@mui/icons-material/Chair';
import EditIcon from '@mui/icons-material/Edit';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
//nav bar options
const UserNavConfig = [
  {
    title: "Home",
    path: "/app/home",
    icon: HomeIcon,
  },
  {
    title: "Chairman",
    path: "/app/date",
    icon: ChairIcon,
  },
  {
    title: "Editor",
    path: "/app/candidateadd",
    icon: EditIcon,
  },
  {
    title:"UUC",
    path:"/app/candidatelist",
    icon:ConnectWithoutContactIcon,
  },
  {
    title: "",
    path: "/app/voterslist",
    icon: ListAltIcon,
  },
];

export default UserNavConfig;
