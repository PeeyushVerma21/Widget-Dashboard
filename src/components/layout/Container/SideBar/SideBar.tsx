import  Box from "@mui/material/Box";
import LogoImg from '../../../../assets/images/logo.png'
import PageIcon from '../../../../assets/icons/pageIcon.png'
import SettingIcon from '../../../../assets/icons/settingIcon.png'
import './SideBar.css'
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';



const handleOnClick = () => {
   if(localStorage.getItem('token')){
         localStorage.removeItem('token')
         window.location.href = '/login'
    }
}

const Sidebar = () => {
    return (
        <Box className='sideBar-container'>
            <Box className='side-bar'>
                <Box className='logo-header'>
                    <img src={LogoImg} alt="RouteOpt" />
                </Box>
                <Box className='menu'>
                    <Box className='menu-item'>
                        <Box className='page-link'>
                            <img src={PageIcon} alt="Page" />
                        </Box>
                    </Box>
                    <Box className='menu-item'>
                        <Box className='settings-link' sx={{
                            mb: 2,
                            ml: 2
                        }}>
                            <img src={SettingIcon} alt="Settings" />
                        </Box>
                        <Box className='settings-link'>
                            <Button variant="contained" color="primary" onClick={handleOnClick} startIcon={<LogoutIcon />}></Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;