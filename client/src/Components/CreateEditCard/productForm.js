import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

//components
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import Spinner from '../spinner'
import { FormattedMessage } from 'react-intl'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

//icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined'

//hooks
import useGetSpinner from '../../utils/hooks/useGetSpinner'

const styles = {
  container: {
    marginTop: '24px',
  },
  buttonsContainer: {
    display: 'flex',
    marginTop: 1,
    justifyContent: 'space-between',
  },
  inputsContainer: {
    paddingBottom: '24px',
  },
}

const validationSchema = yup.object({
  name: yup.string('Enter a name').required('name is required'),
  category: yup.string('select category').required('category is required'),
  description: yup
    .string('Enter a description')
    .required('description is required'),
})

const ProductForm = ({
  onSubmit,
  onClose,
  isLoading,
  data = {},
  category,
  categories,
  buttonLabel,
}) => {
  const showSpinner = useGetSpinner(isLoading)

  const formik = useFormik({
    initialValues: {
      id: data.id || '',
      name: data.name || '',
      category: category || '',
      description: data.description || '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values)
    },
  })

  const tooltipMessage = categories.length
    ? 'body.createEditModal.buttons.info'
    : 'body.createEditModal.buttons.alert'

  return (
    <Box sx={styles.container}>
      {showSpinner ? (
        <Spinner width={400} height={322.9} />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Box sx={styles.inputsContainer}>
            <TextField
              fullWidth
              id='name'
              name='name'
              label={<FormattedMessage id='body.createEditModal.values.name' />}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              disabled={!categories.length}
            />
          </Box>

          <Box sx={styles.inputsContainer}>
            <FormControl fullWidth>
              <InputLabel id='category'>
                {<FormattedMessage id='body.createEditModal.values.category' />}
              </InputLabel>
              <Select
                labelId='category'
                label={
                  <FormattedMessage id='body.createEditModal.values.category' />
                }
                name='category'
                onChange={formik.handleChange}
                value={formik.values.category}
                disabled={!categories.length}
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={styles.inputsContainer}>
            <TextField
              fullWidth
              id='description'
              name='description'
              label={
                <FormattedMessage id='body.createEditModal.values.description' />
              }
              multiline
              rows={3}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              disabled={!categories.length}
            />
          </Box>
          <Box sx={styles.buttonsContainer}>
            <IconButton>
              <Tooltip
                placement='top-start'
                title={<FormattedMessage id={tooltipMessage} />}
              >
                {categories.length ? (
                  <InfoOutlinedIcon />
                ) : (
                  <ReportGmailerrorredOutlinedIcon color='error' />
                )}
              </Tooltip>
            </IconButton>

            <Box>
              <Button
                size='medium'
                disabled={isLoading}
                onClick={onClose}
                color='success'
              >
                <FormattedMessage id='body.createEditModal.buttons.cancel' />
              </Button>

              <LoadingButton
                loading={isLoading}
                variant='contained'
                type='submit'
                disabled={!categories.length}
                color='success'
              >
                {buttonLabel !== 'add' ? (
                  <FormattedMessage
                    id={'body.createEditModal.buttons.update'}
                  />
                ) : (
                  <FormattedMessage
                    id={'body.createEditModal.buttons.create'}
                  />
                )}
              </LoadingButton>
            </Box>
          </Box>
        </form>
      )}
    </Box>
  )
}

export default ProductForm
