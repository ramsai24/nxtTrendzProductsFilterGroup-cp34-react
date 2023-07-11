import {withRouter} from 'react-router-dom'
import {CgSearch} from 'react-icons/cg'
import './index.css'

const FiltersGroup = props => {
  const {categoryList, ratingsList, onFilter} = props
  //   console.log(categoryList, ratingsList)
  const keyDown = event => {
    // console.log(event.key)
    if (event.key === 'Enter') {
      onFilter(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <div>
        <input type="search" placeholder="Search" onKeyDown={keyDown} />
        <CgSearch />
      </div>
      <h1>Category</h1>
      <ul>
        {categoryList.map(each => {
          const {categoryId, name} = each
          const filtering = () => {
            onFilter([categoryId, name])
          }
          return (
            <li key={each.categoryId}>
              <button type="button" onClick={filtering}>
                {each.name}
              </button>
            </li>
          )
        })}
      </ul>
      <h1>Rating</h1>
      <ul>
        {ratingsList.map(each => {
          const {ratingId} = each
          const filtering = () => {
            onFilter(ratingId)
          }
          return (
            <li key={each.ratingId}>
              <button type="button" id="label" onClick={filtering}>
                <img
                  className="img"
                  src={each.imageUrl}
                  alt={`rating ${each.ratingId}`}
                />
                <label htmlFor="label"> &up</label>
              </button>
            </li>
          )
        })}
      </ul>
      <button type="button">Clear Filters</button>
    </div>
  )
}

export default withRouter(FiltersGroup)
