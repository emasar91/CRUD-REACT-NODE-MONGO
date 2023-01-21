import React, { useState } from 'react'

//components
import Popover from '@mui/material/Popover'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import { useAppContext } from '../../context/appContext'

//icons
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

const ActionsButtons = ({ setCard, data }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { deleteModal, openDeleteModal, openEditModal } = useAppContext()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const cardSelected = {
    id: data._id,
    category: data.category._id,
    description: data.description,
    name: data.name,
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
        <IconButton
          onClick={() => {
            openEditModal()
            setCard(cardSelected)
          }}
        >
          <Tooltip title='Edit'>
            <EditOutlinedIcon color='success' />
          </Tooltip>
        </IconButton>
        <IconButton
          onClick={() => {
            openDeleteModal(!deleteModal)
            setCard(cardSelected)
          }}
        >
          <Tooltip title='Delete'>
            <DeleteOutlineOutlinedIcon color='error' />
          </Tooltip>
        </IconButton>
      </Popover>
    </div>
  )
}

export default ActionsButtons
