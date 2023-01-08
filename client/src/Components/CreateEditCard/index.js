import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

//components
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Modal from '@mui/material/Modal'
import { FormattedMessage } from 'react-intl'

//utils
import { useAppContext } from '../../context/appContext'
import ProductForm from './productForm'
import useGetCategories from '../../utils/hooks/useGetCategories'
import useGetCategory from '../../utils/hooks/useGetCategory'
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
  tabPanel: {
    padding: 0,
  },
}

const CreateEditCard = ({ id, action, tab, data = {} }) => {
  const [isLoadingAllCategories, allCategories] = useGetCategories(action)
  const [isLoadingCategory, category] = useGetCategory(id)

  const { crateEditModal, openCreateEditModal, handleFetchingCards } =
    useAppContext()

  const [tabSelected, setSelectedTab] = useState(tab || 'product')

  const handleChange = (event, tab) => {
    setSelectedTab(tab)
  }

  const handleModal = () => {
    if (!isLoading) {
      openCreateEditModal(!crateEditModal)
    }
    setSelectedTab('product')
  }

  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateProduct = useCallback(
    (values) => {
      values.updatedAt = Date.now()
      setIsLoading(true)
      CrudApi.updateCardById(values.id, { data: values })
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
    },
    [id, handleFetchingCards]
  )

  return (
    <Modal open={crateEditModal} onClose={handleModal}>
      <Box sx={styles.container}>
        <TabContext value={tabSelected}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab
                label={
                  <FormattedMessage id='body.createEditModal.tabs.product' />
                }
                value='product'
              />
              <Tab
                label={
                  <FormattedMessage id='body.createEditModal.tabs.category' />
                }
                value='category'
              />
            </TabList>
          </Box>
          <TabPanel value='product' sx={styles.tabPanel}>
            <ProductForm
              onSubmit={handleUpdateProduct}
              onClose={handleModal}
              isLoading={isLoading}
              data={data}
              category={id}
              categories={allCategories}
            />
          </TabPanel>
          <TabPanel value='category'>Item Two</TabPanel>
        </TabContext>
      </Box>
    </Modal>
  )
}

CreateEditCard.propTypes = {
  id: PropTypes.string,
  action: PropTypes.string.isRequired,
  tab: PropTypes.string,
}

export default CreateEditCard
