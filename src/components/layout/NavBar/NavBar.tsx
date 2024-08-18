import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <InputBase
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ color: 'white', marginRight: '10px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;