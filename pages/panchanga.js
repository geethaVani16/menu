import '../styles/styles.scss'
import Head from 'next/head';
import Form from '../pages/form'
import Moment from 'react-moment';
import "moment-timezone";

export default class  Panchanga extends React.Component  {

   state = {
            object:[
                {
                    "day": 1,
                    "location": "Bangalore",
                    "date": "Jan 01 2020 11:00:42",
                    "yearName":"Vikari",
                    "hindu_month_name": "Mārkazhi",
                    "hindu_days_number": 17,
                    "sun_Rise": "1/1/2020, 6:47:42 AM",
                    "sun_set": "1/1/2020, 6:02:08 PM",
                    "vara": "Mercury-Wednesday",
                    "vara_enter_time": "1/1/2020, 6:47:42 AM",
                    "vara_exit_time": "2020-01-01T06:53:55.358Z",
                    "shoolam_name": "North",
                    "pariharam_name": "Milk",
                    "travel_directions": "Mercury-Wednesday Avoid Travelling Towards North",
                    "tithi_name": "Shukla Paksha Shasti 6",
                    "tithi_enter_time": "12/31/2019, 3:58:34 PM",
                    "tithi_exit_time": "1/1/2020, 6:30:33 PM",
                    "nakshatra_name": "Purva Bhadrapad",
                    "nakshatra_enter_time": "1/1/2020, 1:27:03 AM",
                    "nakshatra_exit_time": "1/2/2020, 4:24:05 AM",
                    "yoga_name": "Vyatipata",
                    "yoga_enter_time": "12/31/2019, 9:01:04 PM",
                    "yoga_exist_time": "1/1/2020, 9:50:16 PM",
                    "karana_name": "Taitula-Me",
                    "karana_enter_time": "1/1/2020, 5:14:34 AM",
                    "karana_exit_time": "1/1/2020, 6:30:33 PM",
                    "rahu_kalam_enter_time": "1/1/2020, 12:24:42 PM",
                    "rahu_kalam_exit_time": "1/1/2020, 1:49:00 PM",
                    "rahu_duration": "84 Minutes",
                    "yama_kandam_time_enter": "1/1/2020, 8:12:12 AM",
                    "yama_kandam_time_exit": "1/1/2020, 9:36:42 AM",
                    "guligai_time_enter": "1/1/2020, 11:00:27 AM",
                    "guligai_time_exit": "1/1/2020, 12:24:42 PM",
                    "Ayanamsa": -24.132498797810836,
                    "gagha_postion": [
                        {
                            "sun": "256.121",
                            "degree": "16 Sg 07' 15.60\""
                        },
                        {
                            "moon": "324.730",
                            "degree": "24 aq 43' 48.00\""
                        },
                        {
                            "mars": "214.422",
                            "degree": "04 Sc 25' 19.20\""
                        },
                        {
                            "mercury": "250.629",
                            "degree": "10 Sg 37' 44.40\""
                        },
                        {
                            "jupiter": "252.610",
                            "degree": "12 Sg 36' 36.00\""
                        },
                        {
                            "venus": "290.570",
                            "degree": "20 Cp 34' 12.00\""
                        },
                        {
                            "saturn": "267.373",
                            "degree": "27 Sg 22' 22.80\""
                        },
                        {
                            "rahu": "049.965",
                            "degree": "19 Ta 57' 54.00\""
                        },
                        {
                            "ketu": "229.965",
                            "degree": "19 Sc 57' 54.00\""
                        },
                        {
                            "Lagna": "336.431",
                            "degree": "06 Pi 25' 51.60\""
                        }
                    ]
                }]
             
             
        }
    
    render(){
        console.log(this.state.object)
        return (
                <div>
                    <Form/>
                    {this.state.object.map(obj => {
                        return(
                            
                            <div className='row panchanga_main' key={obj.day}>
                                <div className="col-md-2"><div>qwertyu isdfghjklzxc vbnmsdfghjkr etyuiohg jkdsfgh jgfdsfghj</div></div>
                                <div className='col-md-6'>
                                
                                    <div className='container'>
                                        <div className='header'>
                                            <h1><Moment format="DD-MM-YYYY">{obj.date}</Moment></h1> 
                                        </div>
                                        <div className='row'>
                                            <div className="col-md-4 row-wrapper">
                                                <span className='text' >{(obj.yearName)}</span><br/>
                                                <span >{obj.hindu_month_name}</span> <br/>
                                                <span>{obj.vara}</span>
                                            </div>
                                            <div className="col-md-4 row-wrapper">
                                                <span className='text-year'>{obj.date}</span><br/>
                                                <span>{obj.vara}</span>
                                            </div>
                                            <div className="col-md-4 row-wrapper">
                                                <span >{obj.sun_Rise}</span><br/>
                                                <span >{obj.sun_set}</span>                                        
                                            </div>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Tithi</span><br/>
                                            <span className='rowTitle'>{obj.tithi_name}</span> --
                                            <span > {obj.tithi_enter_time}</span> --
                                            <span > {obj.nakshatra_exit_time}</span>
                                        </div>

                                        <div className='whiteDiv'>
                                            <span className='name'>Nakshatra</span><br/>
                                            <span className='rowTitle'>{obj.nakshatra_name}</span> --
                                            <span >{obj.nakshatra_enter_time}</span> --
                                            <span >{obj.nakshatra_exit_time}</span>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Karana </span><br/>
                                            <span className='rowTitle'>{obj.karana_name}</span> --
                                            <span >{obj.karana_enter_time}</span> --
                                            <span >{obj.karana_exit_time}</span>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Yoga </span><br/>
                                            <span className='rowTitle'>{obj.yoga_name}</span> --
                                            <span >{obj.yoga_enter_time}</span> --
                                            <span >{obj.yoga_exist_time}</span>
                                        </div>
                                        <div className='whiteDiv row'>
                                            <div className='col-md-6'>
                                                <span className='name'>Inauspicious Period</span><br/>
                                                
                                                <div className='sub-row'>
                                                    <span className='rowTitle'> Rahu </span> 
                                                    <Moment format='LTS	'>{obj.rahu_kalam_enter_time}</Moment> --
                                                    <Moment format='LTS	'>{obj.rahu_kalam_exit_time}</Moment>
                                                </div>
                                                <div className='sub-row'>
                                                    <span className='rowTitle'> Yamaganda </span> 
                                                    <Moment format='LTS	'>{obj.yama_kandam_time_enter}</Moment> --
                                                    <Moment format='LTS	'>{obj.yama_kandam_time_exit}</Moment>
                                                </div>
                                                <div className='sub-row'>
                                                    <span className='rowTitle'> Gulika </span> 
                                                    <Moment format='LTS	'>{obj.guligai_time_enter}</Moment> --
                                                    <Moment format='LTS	'>{obj.guligai_time_exit}</Moment>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <span className='name'>Auspicious Period</span>
                                                <div className='sub-row'>
                                                    <span className='rowTitle'> Abhijit Muhurat </span> 
                                                    {/* <Moment format='LTS	'>{obj.rahu_kalam_enter_time}</Moment> -- */}
                                                    {/* <Moment format='LTS	'>{obj.rahu_kalam_exit_time}</Moment> */}
                                                </div>
                                                <div className='sub-row'>
                                                    <span className='rowTitle'> Amrit Kaal  </span> 
                                                    {/* <Moment format='LTS	'>{obj.rahu_kalam_enter_time}</Moment> -- */}
                                                    {/* <Moment format='LTS	'>{obj.rahu_kalam_exit_time}</Moment> */}
                                                </div>
                                                <div className='sub-row'>
                                                    <span className='rowTitle'> Brahma Muhurat </span> 
                                                    {/* <Moment format='LTS	'>{obj.rahu_kalam_enter_time}</Moment> -- */}
                                                    {/* <Moment format='LTS	'>{obj.rahu_kalam_exit_time}</Moment> */}
                                                </div>
                                               
                                            </div>
                                            
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Anandadi Yoga</span>                                                        
                                        </div>
                                        <div className='whiteDiv row'>
                                            <div className='col-md-6'>
                                                <div className='name'>Soorya Rasi</div>
                                            </div>
                                            <div className='col-md-6'>
                                                <span className='name'>Chandra Rasi</span>
                                            </div>

                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Lunar Month</span>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Tamil Yoga</span>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Chandrashtama </span>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'>Others </span>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'> Vaara Soolai</span>
                                        </div>
                                        <div className='whiteDiv'>
                                            <span className='name'> Auspicious Yogas</span>
                                        </div>

                                    </div>
                                    
                                </div>
                                <div className='col-md-4'>hello4</div>
                                

                            </div>
                        )
                    })}
                </div>
            )
    }
    
}
