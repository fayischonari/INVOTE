import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const UserTypeConfig =[
    {
        title:'Chairman',
        Icon:SupervisorAccountIcon,
        colorType:"primary",
        total:'250',

    },
    {
        title:'Editor',
        Icon:GroupIcon,
        colorType:"error",
        total:'200',
    },
    {
        title:'UUC',
        Icon:GroupIcon,
        colorType:"info",
        total:'120',
    },
    {
        title:"Association Secretery(CS)",
        Icon:AccountBalanceIcon,
        colorType:"warning",
        total:'12',
    }
]

export default UserTypeConfig;