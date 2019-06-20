import React from 'react'
import moment from 'moment'
import '../styles/calander_styles.css'
import imageNext from '../images/next.svg'
import imagePrev from '../images/prev.svg'
import { ButtonToolbar, Button, Modal } from 'react-bootstrap'



class DayCalander extends React.Component {

  render() {
   console.log(this.props,'props in day cal')
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Day Details - {this.props.day}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Amanta : Magha 8 Pariidhavi</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default class MyCalander extends React.Component {
  state = {
    modalShow: false,
    dateContext: moment(),
    today: moment(),
    days: [],
    day:''
  }

  weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  months = moment.months();

  year = () => {
    return this.state.dateContext.format('Y')
  }
  month = () => {
    return this.state.dateContext.format("MMMM");
  }
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  }
  currentDate = () => {
    console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
  }
  currentDay = () => {
    return this.state.dateContext.format("D");
  }
  firstDayofMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d') // Day of week 0...1..5...6 //0--sun 1--mon
    return firstDay; //output:6 // month is starting with saturday
  }

  componentDidMount = () => {
    let blanks = [];
    for (let i = 0; i < this.firstDayofMonth(); i++) {
      blanks.push(<td key={i * 100}>{''}</td>)
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d}>

          <div className='table-td-item'>


            <span className='table-day' 
              onClick={ () => this.setState({ modalShow:true,day:d })}>{d}</span>
          </div>

        </td>

      )
    }
    var totalSlots = [...blanks, ...daysInMonth] //combinning blanks and daysInMonth
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row)
      }
      else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i == totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow)
      }
    })
    this.setState(() => ({ days: rows }))
  }

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext
    })
    this.props.onPrevMonth && this.props.onPrevMonth();

  }
  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext
    })
    this.props.onNextMonth && this.props.onNextMonth();
  }


  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>


        <div className='container'>

          <div className="calander-main">
            <div className="row">

              <div className='col-sm-8 col-lg-8 col-md-8 '>

                <div className='calander-wrapper'>
                  <div className='calander-header'>
                    <span className='calander-prev'
                      onClick={(e) => { this.prevMonth() }}
                    >
                      <img src={imagePrev} className="image-prev-month" />
                    </span>
                    <h1> {this.month()}-{this.year()} </h1>
                    <span className='calander-next'
                      onClick={(e) => { this.nextMonth() }}
                    >
                      <img src={imageNext} className="image-next-month" />
                    </span>
                  </div>

                  <span>
                    {/* <span> 
                          <this.MonthNav/>
                        </span> */}

                    <table className='main-table-wrapper' >

                      <thead>
                        <tr className='table-thead-item' >
                          {this.weekdaysShort.map(weekday => {
                            return <th key={weekday} className='th-item'>
                              <span className='weekday'>{weekday}</span>
                            </th>
                          })}
                        </tr>
                      </thead>

                      <tbody className='calander-body'>
                        {this.state.days.map((day, i) => {
                          return <tr key={i} className='calander-tr'> {day} </tr>
                        })}

                      </tbody>
                    </table>
                  </span>

                </div>



              </div>
              <div className='col-lg-4 col-md-4 col-sm-4'>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.

                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                  The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
              </div>
            </div>


          </div>

        </div>








        <div>


          <ButtonToolbar>

            < DayCalander
              show={this.state.modalShow}
              onHide={modalClose}
              
              day={this.state.day}
            />
          </ButtonToolbar>


        </div>


      </div>
    );
  }
}

