import React from 'react'
import moment from 'moment'
import '../styles/styles.scss'

import { Button, Modal } from 'react-bootstrap'



export default class DayCalander extends React.Component {


  render() {
    let date = moment(this.props.day_details.date).format("DD-MM-YYYY")
    // console.log(this.props.day_details.date,'props in day cal')
    let weekday = moment(this.props.day_details.date).format('dddd')
    // console.log(weekday,'weekday')
    let month = moment(this.props.day_details.date).format('MMMM')
    // console.log(month)
    let year = moment(this.props.day_details.date).format('YYYY')
    // console.log(year)
    return (
      // <div className='day-wrapper'>

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Day Details - {date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='day-details-wrapper'>


            <div className='row'>
              <div className='col-12 col-sm-4 col-lg-4 col-md-4 '>

                <div className='day-item day-details-main'>

                  <div className='day-weekday'>{weekday}</div>
                  <div className='day-date'>{this.props.day_details.day}</div>
                  <span className='day-month'>{month} ,</span>
                  <span className='day-year' > {year}</span>

                </div>


              </div>
              <div className='col-12 col-sm-8 col-lg-8 col-md-8 day-details-main'>

                <div className='row day-row-items'>
                  <h6 className='col-6 col-sm-6 col-lg-6 col-md-6'>Amanta</h6>
                  <h6 className='col-6 col-sm-6 col-lg-6 col-md-6'>{}</h6>
                </div>

                <div className='row  day-row-items'>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>Purnimanta</div>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>{}</div>
                </div>

                <div className='row day-row-items'>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>Shaka</div>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>{}</div>
                </div>

                <div className='row day-row-items'>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>Vedic Ritu</div>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>{}</div>
                </div>

                <div className='row day-row-items'>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>Drik Ritu</div>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>{}</div>
                </div>

                <div className='row day-row-items'>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>Ayana</div>
                  <div className='col-6 col-sm-6 col-lg-6 col-md-6'>{}</div>
                </div>

              </div>

            </div>


            <div className='row'>
              <div className='col-6 col-sm-6 col-lg-6 col-md-6'>
                
                <div className='day-panchang'>
                  <div className='day-main-heading'>Panchang</div>

                  <div className='row day-row-items'>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6 row-heading'>Weekday</div>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6'>{weekday}</div>

                  </div>

                  <div className='row day-row-items'>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6 row-heading'>Nakshatra</div>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6'></div>

                  </div>

                  <div className='row day-row-items'>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6 row-heading'>Tithi</div>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6'></div>

                  </div>

                  <div className='row day-row-items'>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6 row-heading'>Karana</div>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6'></div>

                  </div>

                  <div className='row day-row-items'>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6 row-heading'>Yoga</div>
                    <div className='col-6 col-sm-6 col-lg-6 col-md-6'></div>

                  </div>

                </div>

              </div>
              <div className='col-6 col-sm-6 col-lg-6 col-md-6'>

                  <div className='day-panchang'>
                    <div className='day-main-heading'>Planet Position</div>
                        <img  alt='img'/>
                   

                  

                  </div>
              </div>

            </div>


          </div>


          


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

      // </div>
    );
  }
}
