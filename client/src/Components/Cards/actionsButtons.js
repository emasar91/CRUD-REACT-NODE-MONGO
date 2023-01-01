import React from 'react'

//components
import Popover from '@mui/material/Popover'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'

//icons
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

const ActionsButtons = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <IconButton>
        <MoreHorizOutlinedIcon onClick={handleClick} />
      </IconButton>

      <Popover
        id={id}
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
        <IconButton>
          <Tooltip title='Edit'>
            <EditOutlinedIcon />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title='Delete'>
            <DeleteOutlineOutlinedIcon />
          </Tooltip>
        </IconButton>
      </Popover>
    </div>
  )
}

export default ActionsButtons
