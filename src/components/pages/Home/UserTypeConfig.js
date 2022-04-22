import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const UserTypeConfig =[
    {
        title:'Chairman',
        Icon:SupervisorAccountIcon,
        colorType:"primary",
        to:"post/chairman"
    },
    {
        title:'Editor',
        Icon:GroupIcon,
        colorType:"error",
        to:"post/editor"
    },
    {
        title:'UUC',
        Icon:GroupIcon,
        colorType:"info",
        to:"post/uuc"
    },
    {
         title:"Association Secretery(bba)",
        Icon:AccountBalanceIcon,
        colorType:"warning",
        to:"post/as"
    }
]

export default UserTypeConfig;