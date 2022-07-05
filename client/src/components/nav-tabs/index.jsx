import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';

const NavTabs = () => {
    const navigate = useNavigate();
    return (
      <ButtonGroup>
        <Button onClick={navigate('/')}>First Pages</Button>
        <Button onClick={navigate('/2')}>Second Page</Button>
      </ButtonGroup>
    )
}

export default NavTabs;