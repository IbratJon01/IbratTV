import './app.css'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movie-add-form/movie-add-form'

const App=()=> {
  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel />
          <br/>
          <AppFilter />
        </div>
        <MovieList/>
        <br/>
        <MoviesAddForm/>
       
        

      </div>
    </div>
  )
    
  
}

export default App;
