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
import Spinner from '../spinner'
import { FormattedMessage } from 'react-intl'

//utils
import truncate from '../../utils/ellipsis'
import ActionsButtons from './actionsButtons'
import { getValueCell } from './utilsCard'

//hooks
import useGetSpinner from '../../utils/hooks/useGetSpinner'

const Cards = ({ data, isLoading }) => {
  const style = (theme) => ({
    root: {
      minHeight: ' 93vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: { maxHeight: 500, padding: 2.5, overflowY: 'auto', minWidth: 970 },
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

  const showSpinner = useGetSpinner(isLoading)

  const columns = [
    {
      id: '_id',
      label: <FormattedMessage id={`body.table.rows.id`} />,
      width: 45,
      align: 'center',
    },
    {
      id: 'name',
      label: <FormattedMessage id={`body.table.rows.product`} />,
      width: 120,
      align: 'center',
      limit: 14,
    },
    {
      id: 'createdAt',
      label: <FormattedMessage id={`body.table.rows.createdDate.label`} />,
      align: 'center',
      width: 80,
    },
    {
      id: 'updatedAt',
      label: <FormattedMessage id={`body.table.rows.updateDate.label`} />,
      align: 'center',
      width: 80,
    },
    {
      id: 'category',
      label: <FormattedMessage id={`body.table.rows.category`} />,
      width: 120,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'description',
      label: <FormattedMessage id={`body.table.rows.description`} />,
      width: 200,
      align: 'center',
      limit: 29,
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'buttons',
      label: <FormattedMessage id={`body.table.rows.actions`} />,
      minWidth: 55,
      align: 'center',
    },
  ]

  /**
   * @param data value corresponding to the cell
   * @param column data from column to be displayed
   * @returns the element with the formatted value
   */
  const showDataCell = (data, column) => {
    if (column.id === 'buttons') {
      return <ActionsButtons />
    } else if (column.id === 'createdAt' || column.id === 'updatedAt') {
      return <span>{new Date(data).toLocaleDateString()}</span>
    } else if (data.length >= 20) {
      return (
        <Tooltip title={data} arrow>
          <span>{truncate(data, column.limit)}</span>
        </Tooltip>
      )
    } else {
      return <span>{data}</span>
    }
  }

  return (
    <Box sx={(theme) => style(theme).root}>
      <Paper sx={(theme) => style(theme).paper}>
        <TableContainer sx={(theme) => style(theme).tableContainer}>
          {showSpinner ? (
            <Spinner />
          ) : (
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ width: column.width, textAlign: column.align }}
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
          )}
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
