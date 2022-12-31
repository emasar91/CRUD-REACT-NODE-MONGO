import React from 'react'
import PropTypes from 'prop-types'

//components
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import { Box, Paper } from '@mui/material'

//utils
import idPrettier from '../../utils/idPrettier'
import truncate from '../../utils/hooks/ellipsis'
import ActionsButtons from './actionsButtons'

const Cards = ({ data, isLoading }) => {
  console.log('🚀 ~ file: index.js:14 ~ Cards ~ data', data)

  const style = (theme) => ({
    root: {
      minHeight: ' 93vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: { maxHeight: 500, padding: 2.5, overflowY: 'auto' },
    tableContainer: {
      height: 495,

      '&::-webkit-scrollbar': {
        width: '0.4em',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },
  })

  const columns = [
    { id: '_id', label: 'ID', width: 55, align: 'center' },
    { id: 'name', label: 'Product', width: 170, align: 'center' },
    { id: 'createdAt', label: 'Created Date', align: 'center', width: 100 },
    {
      id: 'updatedAt',
      label: 'Updated Date',
      align: 'center',
      width: 170,
    },
    {
      id: 'description',
      label: 'Description',
      width: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'category',
      label: 'Category',
      width: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },

    {
      id: 'buttons',
      label: 'Actions',
      minWidth: 65,
      align: 'center',
    },
  ]

  const getValueCell = (data, cell) => {
    if (cell.id === '_id') {
      return idPrettier(data[cell.id])
    } else if (cell.id === 'category') {
      return data[cell.id].name
    } else {
      return data[cell.id]
    }
  }

  const showDataCell = (data, cell) => {
    if (cell.id === 'buttons') {
      return <ActionsButtons />
    } else if (data.length >= 20) {
      return (
        <Tooltip title={data} arrow>
          <span>{truncate(data)}</span>
        </Tooltip>
      )
    } else {
      return <span>{data}</span>
    }
  }

  return isLoading ? (
    <span>cargando</span>
  ) : (
    <Box sx={(theme) => style(theme).root}>
      <Paper sx={(theme) => style(theme).paper}>
        <TableContainer sx={(theme) => style(theme).tableContainer}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, textAlign: 'center' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = getValueCell(row, column)
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {showDataCell(value, column)}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Cards
