import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const UserTypeConfig =[
    {
        title:'Chairman',
        Icon:SupervisorAccountIcon,
        colorType:"primary",
        to:"voter/chairman"
    },
    {
        title:'Editor',
        Icon:SupervisorAccountIcon,
        colorType:"error",
        to:"voter/editor"
    },
    {
        title:'UUC',
        Icon:SupervisorAccountIcon,
        colorType:"info",
        to:"voter/uuc"
    },
    {
        title:'Association Secretery',
        Icon:SupervisorAccountIcon,
        colorType:"error",
        to:"voter/as"
    }

]

export default UserTypeConfig;