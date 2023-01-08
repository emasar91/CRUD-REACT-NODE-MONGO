import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

//components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { useAppContext } from '../../context/appContext'
import LoadingButton from '@mui/lab/LoadingButton'
import { FormattedMessage } from 'react-intl'

//utils
import CrudApi from '../../utils/CrudApi'

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    boxShadow: 24,
    padding: 3,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: 1,
  },
}

const DeleteModal = ({ id }) => {
  const { deleteModal, openDeleteModal, handleFetchingCards } = useAppContext()
  const [isLoading, setIsLoading] = useState(false)
  const handleModal = () => (!isLoading ? openDeleteModal(!deleteModal) : '')

  const handleDeleteCard = useCallback(() => {
    setIsLoading(true)
    CrudApi.deleteCardById(id)
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        handleFetchingCards()
        setTimeout(() => {
          setIsLoading(false)
          handleModal()
        }, 1500)
      })
    // eslint-disable-next-line
  }, [id, handleFetchingCards])

  return (
    <Modal open={deleteModal} onClose={handleModal}>
      <Box sx={styles.container}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          <FormattedMessage id='body.deleteModal.title' />
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          <FormattedMessage id='body.deleteModal.description' />
        </Typography>
        <Box sx={styles.buttonsContainer}>
          <LoadingButton
            onClick={handleDeleteCard}
            color='error'
            loading={isLoading}
            variant='contained'
          >
            <FormattedMessage id='body.deleteModal.buttons.delete' />
          </LoadingButton>
          <Button size='medium' disabled={isLoading} onClick={handleModal}>
            <FormattedMessage id='body.deleteModal.buttons.cancel' />
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

DeleteModal.propTypes = {
  id: PropTypes.string,
}
export default DeleteModal
