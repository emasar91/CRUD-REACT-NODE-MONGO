const en = {
  header: {
    title: 'CRUD en',
    lang: {
      EN: 'English',
      ES: 'Spanish',
      PT: 'Portuguese',
    },
  },
  body: {
    addButtons: {
      product: 'Add Product',
      category: 'Add Category',
    },
    createEditModal: {
      tabs: {
        product: 'Product',
        category: 'Category',
      },
      createProduct: 'Create Product',
      createCategory: 'Create Category',
      values: {
        name: 'Name',
        category: 'Category',
        description: 'Description',
      },
      buttons: {
        update: 'Update',
        create: 'Create',
        cancel: 'Cancel',
        info: 'Only this tab will be saved',
        alert: 'First you must create a category',
      },
    },
    table: {
      rows: {
        id: 'ID',
        product: 'Product',
        createdDate: {
          label: 'Created',
          tooltip: 'Date Created ',
        },
        updateDate: {
          label: 'Updated',
          tooltip: 'Date Update ',
        },
        description: 'Description',
        category: 'Category',
        actions: 'Actions',
      },
    },
    deleteModal: {
      title: 'Delete product',
      description: 'The product will be deleted, this action cannot be undone',
      buttons: {
        delete: 'Delete',
        cancel: 'Cancel',
      },
    },
    spinner: {
      loading: 'Loading data...',
    },
    notSupported:
      'This page was only developed to be displayed on screens larger than 1024px wide',
    errorPage: 'This page does not exist, try to return home',
    home: 'Home',
  },
}

export default en
