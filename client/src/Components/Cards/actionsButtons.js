import React, { useState, useContext } from 'react'

//components
import Popover from '@mui/material/Popover'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { AppContext } from '../../context/appContext'

//icons
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

const ActionsButtons = ({ idCardToDelete, setCardToDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { deleteModal, openDeleteModal } = useContext(AppContext)

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
      <IconButton onClick={handleClick}>
        <MoreHorizOutlinedIcon />
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
        <IconButton
          onClick={() => {
            openDeleteModal(!deleteModal)
            setCardToDelete(idCardToDelete)
          }}
        >
          <Tooltip title='Delete'>
            <DeleteOutlineOutlinedIcon />
          </Tooltip>
        </IconButton>
      </Popover>
    </div>
  )
}

export default ActionsButtons
