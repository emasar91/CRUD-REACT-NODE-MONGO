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
import CategoryForm from './categoryForm'
import { Typography } from '@mui/material'

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

const CreateEditCard = ({ id, data }) => {
  const { createEditModal, openEditModal, handleFetchingCards } =
    useAppContext()

  const [isLoadingAllCategories, allCategories] = useGetCategories(
    createEditModal.action,
    handleFetchingCards
  )

  const [isLoading, setIsLoading] = useState(false)

  const [isLoadingCategory, category] = useGetCategory(
    id,
    createEditModal.action
  )

  const [tabSelected, setSelectedTab] = useState(createEditModal.tab)

  const handleChange = (event, tab) => {
    setSelectedTab(tab)
  }

  const handleModal = () => {
    if (!isLoading) {
      openEditModal()
    }
    setSelectedTab('product')
  }

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
    },
    // eslint-disable-next-line
    [id, handleFetchingCards]
  )

  const handleUpdateCategory = useCallback(
    (values) => {
      values.updatedAt = Date.now()
      setIsLoading(true)
      CrudApi.updateCategoryById(values.id, { data: values })
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
    },
    // eslint-disable-next-line
    [id, handleFetchingCards]
  )

  const handleAddProduct = useCallback(
    (values) => {
      setIsLoading(true)
      CrudApi.addNewCard({ data: values })
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
    },
    // eslint-disable-next-line
    [handleFetchingCards]
  )

  const handleAddCategory = useCallback(
    (values) => {
      setIsLoading(true)
      CrudApi.addNewCategory({ data: values })
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
    },
    // eslint-disable-next-line
    [handleFetchingCards]
  )

  return (
    <Modal open={createEditModal.open} onClose={handleModal}>
      <Box sx={styles.container}>
        {createEditModal.action === 'edit' ? (
          <TabContext value={tabSelected}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                sx={{
                  '.MuiTabs-indicator': {
                    backgroundColor: '#066178',
                  },
                  '.Mui-selected': {
                    color: '#066178 !important',
                  },
                }}
              >
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
                isLoading={isLoading || isLoadingAllCategories}
                data={data}
                category={id}
                categories={allCategories}
                buttonLabel={'edit'}
              />
            </TabPanel>
            <TabPanel value='category' sx={styles.tabPanel}>
              <CategoryForm
                onSubmit={handleUpdateCategory}
                onClose={handleModal}
                isLoading={isLoading || isLoadingCategory}
                data={category}
                buttonLabel={'edit'}
              />
            </TabPanel>
          </TabContext>
        ) : createEditModal.tab === 'product' ? (
          <Box sx={styles.container}>
            <Typography
              sx={{
                padding: '12px',
                backgroundColor: 'searchBar.background',
                color: 'white',
              }}
            >
              <FormattedMessage id={'body.createEditModal.createProduct'} />
            </Typography>
            <ProductForm
              onSubmit={handleAddProduct}
              onClose={handleModal}
              isLoading={isLoading || isLoadingAllCategories}
              categories={allCategories}
              buttonLabel={'add'}
            />
          </Box>
        ) : (
          <Box sx={styles.container}>
            <Typography
              sx={{
                padding: '12px',
                backgroundColor: 'searchBar.background',
                color: 'white',
              }}
            >
              <FormattedMessage id={'body.createEditModal.createCategory'} />
            </Typography>
            <CategoryForm
              onSubmit={handleAddCategory}
              onClose={handleModal}
              isLoading={isLoading}
              buttonLabel={'add'}
            />
          </Box>
        )}
      </Box>
    </Modal>
  )
}

CreateEditCard.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
}

export default CreateEditCard
