import React, { useState } from 'react'

//components
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

//icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'

const style = {
  container: { display: 'flex', width: 500 },
  searchInput: { flexGrow: 1 },
  icon: { padding: '10px' },
}

const SearchCard = () => {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const resetSearch = () => {
    setSearch('')
  }

  const handleSearch = () => {
    alert(search)
  }

  return (
    <Box sx={style.container}>
      <IconButton
        disabled={!search}
        type='button'
        sx={style.icon}
        onClick={handleSearch}
      >
        <SearchOutlinedIcon />
      </IconButton>
      <InputBase
        sx={style.searchInput}
        placeholder={'Buscar'}
        onChange={handleChange}
        value={search}
        endAdornment={
          search ? (
            <IconButton
              type='button'
              sx={style.icon}
              aria-label='search'
              onClick={resetSearch}
            >
              <ClearOutlinedIcon />
            </IconButton>
          ) : (
            ''
          )
        }
      />
    </Box>
  )
}

export default SearchCard
