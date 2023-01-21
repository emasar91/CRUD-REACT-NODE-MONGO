import React, { useState, useEffect } from 'react'

//components
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

//icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { useAppContext } from '../../context/appContext'

const style = {
  container: {
    display: 'flex',
    width: 500,
    color: 'white',
  },
  searchInput: {
    flexGrow: 1,
    color: 'white',
  },
  icon: { padding: '10px', color: 'white' },
}

const SearchCard = ({ data, setCardsToShow }) => {
  const { languageSelected } = useAppContext()
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const resetSearch = () => {
    setSearch('')
  }

  const handleSearch = () => {
    const regEx = new RegExp(search, 'ig')
    const cardsFilter = data.filter((card) => card.name.match(regEx))
    setCardsToShow(cardsFilter)
  }

  useEffect(() => {
    if (search === '') {
      setCardsToShow(data)
    }
    // eslint-disable-next-line
  }, [data, search])

  const placeholder = {
    EN: 'Search...',
    ES: 'Buscar...',
    PT: 'Busca...',
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
        placeholder={placeholder[languageSelected]}
        onChange={handleChange}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') {
            handleSearch()
            ev.preventDefault()
          }
        }}
        value={search}
        endAdornment={
          search ? (
            <IconButton type='button' sx={style.icon} onClick={resetSearch}>
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
