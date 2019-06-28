import React from 'react'
import moment from 'moment'
import axios from 'axios'
import '../styles/styles.scss'
import { ButtonToolbar, Button, Modal } from 'react-bootstrap'


class DayCalander extends React.Component {
  

  render() {
  //  console.log(this.props,'props in day cal')
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {/* Day Details - {this.props.} */}
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
    headerMonth:{},
    panchagam:[],
    days: [],
    dayDetails:'',
    showMonthPopUp:false,
    showYearPopUp:false
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
  onChangeMonth = (e,month) => {
    console.log(e.target.value,'target')
    console.log(month,'month')
    this.setState(() => ({showMonthPopUp:!this.state.showMonthPopUp}))
  }

  MonthNav = () => {
    return (
      <span onClick={(e) => {this.onChangeMonth(e,this.month())}} >
         {/* for displaying month inside the calander */}
       {this.month()}
        {this.state.showMonthPopUp && <this.MonthListDisplay data={this.months}/> }
          
      </span>
    )
  }

  YearNav = () => {
    return (
      <span>{this.year()}</span>
    )
  }
 

  selectChange = (e,data) => {
    console.log(e,"selectChange")
    console.log(data)
    this.setMonth(data);

  }

  setMonth = (month) => {
    // console.log('set month called ',month)
    let monthNumber=this.months.indexOf(month)
    // console.log(monthNumber,"monthNumber")
    let dateContext=Object.assign({},this.state.dateContext)
    dateContext=moment(dateContext).set('month',monthNumber)
    // console.log(dateContext,'in setMonth')
    this.setState(() => ({dateContext:dateContext}))
    console.log(dateContext,'dateContext in setMonth')
  }

  
  MonthListDisplay =(props) => {
   let popup= props.data.map(data => {
      return(
        <div key ={data}>
          {/* when onClick is fired we send data i.e (month) in props(data) */}
         <a href='#' onClick={ (e) => {this.selectChange(e,data)}}> {data}</a> 
        </div>
      )
    })
    return (
      <div >{popup}</div>
    )
    
  }

  prevMonth = () => {
    let dateContext=Object.assign({},this.state.dateContext)
    dateContext=moment(dateContext).subtract(1,'month');
    this.setState(() => ({dateContext:dateContext}))
  }
    

  nextMonth = () => {

    let dateContext=Object.assign({},this.state.dateContext)
    dateContext=moment(dateContext).add(1,'month');
    this.setState(() => ({dateContext:dateContext}))
  }

  
 

  componentDidMount = () => {
    axios.get('https://harivara.staging.wpengine.com/asto_data.php')
        .then(response => {
            // console.log(response.data)
            this.setState(() =>({
                headerMonth:response.data.header_data,
                panchagam:response.data.panchagam
            }) )
            
        })
        .catch(err => console.log(err))

        
  }

    


    // this.setState(() => ({ days: rows }))
    // console.log(this.state.days,"days in state in generate calander")
  
  

  render() {


    let blanks = [];
    for (let i = 0; i < this.firstDayofMonth(); i++) {
      blanks.push(<td key={i * 100}>{''}</td>)
    }

    var daysInMonth = [];
    
    for (let d = 1; d <= this.daysInMonth(); d++) {
     
      daysInMonth.push(
        <td key={d}>

          <div className='table-td-item'>

            <span 
            className='table-day'
             onClick={ () => this.setState({ modalShow:true, dayDetails: d })}
            >
              {/* {this.state.panchagam[d].day} */}
              {d}
            </span>
          </div>

        </td>

      )
    }
    var totalSlots = [...blanks, ...daysInMonth] //combinning blanks and daysInMonth
    // console.log(totalSlots,'totalslots')
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      // console.log(row,'row')
      // console.log(i,'i')
      if ((i % 7) !== 0) {
        cells.push(row) //row is one td item
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
      
    });

    let trElements=rows.map((d,i) => {
      return (
        <tr key={i}>
          {d}
        </tr>
      )
    })



    let modalClose = () => this.setState({ modalShow: false });
    // console.log(this.state.panchagam ,'state')
    

    return (
      <div>


        <div className='container'>

          <div className="calander-main">
            <div className="row">

              <div className='col-sm-9 col-lg-9 col-md-9 '>

                <div className='calander-wrapper'>
                  <div className='calander-header'>
                    <span className='calander-prev'
                      onClick={(e) => { this.prevMonth() }}
                    >
                      <i className="fas fa-arrow-circle-left"></i>
                      {/* <img src={imagePrev} className="image-prev-month" /> */}
                    </span>
                    <h1> {this.month()}-{this.year()} </h1>
                    <span className='calander-next'
                     
                    >
                      {/* <img src={imageNext} className="image-next-month" /> */}

                      <i className="fas fa-arrow-circle-right"  onClick={(e) => { this.nextMonth() }}></i>
                    </span>
                  </div>

                  <span>

                    <span> 
                          <this.MonthNav/> {""} <this.YearNav/>
                    </span>

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

                      <tbody className='calander-body '>
                        {/* {this.state.days.map((day, i) => {
                          return <tr key={i} className='calander-tr'> {day} </tr>
                        })} */}

                        {trElements}

                      </tbody>
                    </table>
                  </span>

                </div>



              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
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
              dayDetails={this.state.dayDetails}
            />
          </ButtonToolbar>


        </div>


      </div>
    );
  }
}

