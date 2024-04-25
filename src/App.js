import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LocationView from './components/LocationView'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    locationList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getApiPackages()
  }

  getApiPackages = async () => {
    const apiUlr = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUlr, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({
        locationList: updatedData,
        isLoading: true,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loading-container" data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderDataView = () => {
    const {locationList} = this.state

    return (
      <ul className="location-list-item">
        {locationList.map(eachItem => (
          <LocationView key={eachItem.id} locationData={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        <hr />
        {isLoading ? this.renderDataView() : this.renderLoadingView()}
      </div>
    )
  }
}

export default App
