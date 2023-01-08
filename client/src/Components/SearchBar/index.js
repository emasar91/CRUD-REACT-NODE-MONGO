//components
import Paper from '@mui/material/Paper'
import SearchCard from '../searchCard'
import AddProductAndCategory from '../addProductAndCategory'

const style = {
  container: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    justifyContent: 'space-between',
  },
}

export default function CustomizedInputBase() {
  return (
    <Paper component='form' sx={style.container}>
      <SearchCard />
      <AddProductAndCategory />
    </Paper>
  )
}
