import React, { useState } from 'react'

//components
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

//icons
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined'

//components
import Box from '@mui/material/Box'
import { FormattedMessage } from 'react-intl'

const styles = {
  itemContainer: {
    display: 'flex',
    margin: '4px',
    padding: '4px',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  labelItem: {
    marginLeft: '4px',
  },
}

const AddProductAndCategory = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <ControlPointOutlinedIcon />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Box sx={styles.itemsContainer}>
          <Button sx={styles.itemContainer} color='inherit'>
            <Inventory2OutlinedIcon />
            <Typography sx={styles.labelItem}>
              <FormattedMessage id='body.addButtons.product' />
            </Typography>
          </Button>
          <Button sx={styles.itemContainer} color='inherit'>
            <CategoryOutlinedIcon />
            <Typography sx={styles.labelItem}>
              <FormattedMessage id='body.addButtons.category' />
            </Typography>
          </Button>
        </Box>
      </Popover>
    </Box>
  )
}

AddProductAndCategory.propTypes = {}

export default AddProductAndCategory
