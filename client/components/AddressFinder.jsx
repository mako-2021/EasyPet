import React from 'react'

class AddressFinder extends React.Component {
  constructor (props) {
    super(props)

    this.widget = null
    this.address_line_1 = React.createRef()
    this.address_line_2 = React.createRef()
    this.suburb = React.createRef()
    this.city = React.createRef()
    this.postcode = React.createRef()
  }

  componentDidMount () {
    var script = document.createElement('script')
    script.src = 'https://api.addressfinder.io/assets/v3/widget.js'
    script.async = true
    script.onload = this.loadWidget
    document.body.appendChild(script)
  }

  componentWillUnmount () {
    if (this.widget) {
      this.widget.destroy()
      this.widget = null
    }
  }

  loadWidget = () => {
    this.widget = new window.AddressFinder.Widget(
      document.getElementById('address_line_1'),
      'PL6QGU8NF3HVWKEYTJ9M',
      'NZ'
    )
    this.widget.on('result:select', (fullAddress, metaData) => {
      // might need deleting this line?
      const selected = new window.AddressFinder.NZSelectedAddress(fullAddress, metaData)
      this.address_line_1.current.value = metaData.address_line_1
      this.address_line_2.current.value = metaData.address_line_2 || ''
      this.suburb.current.value = metaData.selected_suburb
      this.city.current.value = metaData.selected_city
      this.postcode.current.value = metaData.postcode
    })
  }

  render () {
    return (
      <form className='flex items-center grid grid-cols-1 grid-rows-6 w-4/12 ml-20' method="get">
        <div className='formTitle'>Address Finder</div>
        <input type="search" id='address_line_1' className='formInput rounded-md shadow-sm col-1 h-12 p-4 mb-4' placeholder="Search address here..." ref={this.address_line_1}></input>
        <input className='formInput rounded-md shadow-sm col-1 h-12 p-4 mb-4' placeholder="Address Line 2" ref={this.address_line_2}></input>
        <input className='formInput rounded-md shadow-sm col-1 h-12 p-4 mb-4' placeholder="Suburb" ref={this.suburb}></input>
        <input className='formInput rounded-md shadow-sm col-1 h-12 p-4 mb-4' placeholder="City" ref={this.city}></input>
        <input className='formInput rounded-md shadow-sm col-1 h-12  p-4 mb-4' placeholder="PostCode" ref={this.postcode}></input>
      </form>
    )
  }
}

export default AddressFinder
