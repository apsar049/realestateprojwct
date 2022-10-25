import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from './ContextProvider/Context'

import { useLocation } from 'react-router-dom'
// import { Axios } from "axios";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

import '../css/propertydetails.css'
import LocationInfo from './locationinfo'
import Header from './Header'
const Properties = () => {
  const [totalArea, setTotalArea] = useState('')

  const navigate = useNavigate()

  const { logindata, setLoginData } = useContext(LoginContext)

  const [info, setInfo] = useState(false)
  const DashboardValid = async () => {
    let token = localStorage.getItem('usersdatatoken')

    const res = await fetch('/validuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })

    const recivedData = await res.json()

    if (recivedData.status == 401 || !recivedData) {
      navigate('/')
    } else {
      //   console.log('user verify')
      setLoginData(recivedData)
      navigate('/basicinfo/propertydetails')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid()
      setInfo(true)
    }, 2000)
  }, [])
  // const handleUpload = async (e) => {
  //     e.preventDefault();
  //     // const formdata = new FormData();
  //     // formdata.append("propertyType", propertyType)
  //     const formdata = {
  //         totalArea: totalArea
  //     }

  //     // console.log(propertyType)
  //     console.log(formdata)
  //     await axios.post("/realtime",formdata)
  //         .then(res => console.log(res))
  //         .catch(error => { console.log(error) })

  //     navigate("/basicinfo/propertydetails")
  // }

  // const handleUpload = async (e) => {
  //     e.preventDefault();
  //     const formdata = new FormData();
  //     await axios.post("mongodb://locahost/realtime",(formdata))
  //         //,
  //         .then((res) => { console.log(res) })
  //         .catch(error => { console.log(error) })
  //     navigate("/basicinfo/propertydetails")

  // }

  // const handleUpload = async (e) => {
  //     e.preventDefault();
  //     const formdata = new FormData();
  //     formdata.append("totalArea", totalArea);

  //     await Axios.post(' mongodb://locahost/realtime/props', (formdata))
  //         .then(res => { console.log(res) })
  //         .catch(error => {
  //             console.log(error)
  //         })
  //     navigate("/postview");
  //     setTotalArea("")
  // }

  const handleUpload = async e => {
    e.preventDefault()
    navigate('/basicinfo/propertydetails/generalinfo')

    console.log(totalArea)

    // const formdata = new FormData();
    // formdata.append("propertyType", propertyType);
    // console.log(formdata)
    const objectname = { totalArea }
    await axios
      .post('http://localhost:8000/api/basicinfo/posts', objectname)
      //mongodb://localhost:27017
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    // setTotalArea("")
  }

  const data = ['Plot', 'House', 'Flat']
  const data1 = ['1 Year', '2 Year', '3 Year']
  const data2 = ['Yes', 'No']
  const data3 = ['Owned']
  const data4 = ['Yes', 'No']
  const data5 = ['Yes', 'No']
  const data6 = []
  const data7 = []
  const data8 = []
  return (
    <div className='all-container'>
      <div className='basic-info-container' style={{ height: '100vh' }}>
        <div className='logopage' style={{ height: '100vh' }}>
          <div className='logo'>Logo</div>
          <div className='similar-container'>
            <div className='similar' id='similar1'>
              <span>
                <i className='fa-regular fa-house'></i>
              </span>
              <span className='logoclass'>Property</span>
            </div>
            <div className='similar'>
              <span>
                <i className='fa-regular fa-bell'></i>
              </span>
              <span className='logoclass'>Assistance</span>
            </div>
            <div className='similar'>
              <span>
                <i className='fa-regular fa-download'></i>
              </span>
              <span className='logoclass'>Received Interest</span>
            </div>
            <div className='similar'>
              <span>
                <i className='fa-solid fa-arrow-up'></i>
              </span>
              <span className='logoclass'>Sent Interest</span>
            </div>
            <div className='similar'>
              <span>
                <i className='fa-regular fa-eye'></i>
              </span>
              <span className='logoclass'>Property Views</span>
            </div>
            <div className='similar'>
              <span>
                <i className='fa-regular fa-tag'></i>
              </span>
              <span className='logoclass'>Tarrif Plan</span>
            </div>
          </div>
        </div>

        <div className='add-new-property'>
          <div className='header'>
            {/*  ID:{info.ppd}  */}
            <div className='header-right'>
              <span style={{ marginRight: '1000px' }}>
                <Header />
              </span>
              {/* {info.email} */}
            </div>
          </div>
          <hr />

          <div className='bottom-section'>
            <div className='new-property'>ADD NEW PROPERTY</div>

            <div className='button-section'>
              <div className='similar-button' style={{ marginTop: '7px' }}>
                <span>
                  <i className='fa-regular fa-circle-1'></i>
                </span>
                <span>Basic Info</span>
              </div>
              <div className='similar-button'>
                <button className='btn2'>
                  {' '}
                  <span>
                    <i className='fa-regular fa-circle-2'></i>
                  </span>
                  <span>Property Detail</span>
                </button>
              </div>
              <div className='similar-button' style={{ marginTop: '7px' }}>
                <span>
                  <i className='fa-regular fa-circle-3'></i>
                </span>
                <span>General Info</span>
              </div>
              <div className='similar-button' style={{ marginTop: '7px' }}>
                <span>
                  <i className='fa-regular fa-circle-4'></i>
                </span>
                <span>Location Info</span>
              </div>
            </div>
            <div className='details-section'>
              <div
                className='details-section-left'
                id='details-section-left-id'
              >
                <div className='details-section-left1'>
                  <div>
                    <label>Length</label>
                  </div>
                  <div>
                    <input type='number' />
                  </div>
                </div>
                <div className='details-section-left1'>
                  <div>
                    <label>Total Area</label>
                  </div>
                  <div>
                    <input
                      type='number'
                      name='totalArea'
                      value={totalArea}
                      onChange={e => {
                        setTotalArea(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div className='details-section-left1'>
                  <div>
                    <label>No Of BHK</label>
                  </div>
                  <div>
                    <input list='data' placeholder='Select No Of BHK' />
                    <datalist id='data'>
                      {data.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-left1'>
                  <div>
                    <label>Attached</label>
                  </div>
                  <div>
                    <input list='data1' placeholder='Select Attached' />
                    <datalist id='data1'>
                      {data1.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-left1'>
                  <div>
                    <label>Furnished</label>
                  </div>
                  <div>
                    <input list='data2' placeholder='Select Furnished' />
                    <datalist id='data2'>
                      {data2.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-left1'>
                  <div>
                    <label>Lift</label>
                  </div>
                  <div>
                    <input list='data3' placeholder='Select Lift' />
                    <datalist id='data3'>
                      {data3.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-left1'>
                  <div>
                    <label>Facing</label>
                  </div>
                  <div>
                    <input list='data4' placeholder='Select Facing' />
                    <datalist id='data4'>
                      {data4.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-left1'>
                  <span>
                    <Link to='./basicinfo'>
                      <button className='cancel'>previous</button>
                    </Link>
                  </span>
                </div>
              </div>
              <div className='details-section-right'>
                <div className='details-section-right1'>
                  <div>
                    <label>Breadth</label>
                  </div>
                  <div>
                    <input type='number' />
                  </div>
                </div>
                <div className='details-section-right1'>
                  <div>
                    <label>Area Unit</label>
                  </div>
                  <div>
                    <input list='data5' placeholder='Area Unit' />
                    <datalist id='data5'>
                      {data5.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-right1'>
                  <div>
                    <label>NO Of Floor</label>
                  </div>
                  <div>
                    <input list='data6' placeholder='Select NO Of Floor' />
                    <datalist id='data6'>
                      {data6.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-right1'>
                  <div>
                    <label>Western Toilet</label>
                  </div>
                  <div>
                    <input list='data7' placeholder='Select Western Toilet' />
                    <datalist id='data7'>
                      {data7.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-right1'>
                  <div>
                    <label>Car Parking</label>
                  </div>
                  <div>
                    <input list='data8' placeholder='Select Car Parking' />
                    <datalist id='data8'>
                      {data8.map((op, i) => (
                        <option key={i}>{op}</option>
                      ))}
                    </datalist>
                  </div>
                </div>
                <div className='details-section-right1'>
                  <div>
                    <label>Electricity</label>
                  </div>
                  <div>
                    <input type='text' />
                  </div>
                </div>
                <div className='details-section-right1'>
                  <span>
                    <button
                      className='save1'
                      style={{ marginTop: '65px' }}
                      onClick={e => {
                        handleUpload(e)
                      }}
                    >
                      save & continue
                    </button>
                  </span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        {/* <LocationInfo area={totalArea}/> */}
      </div>
    </div>
  )
}
export default Properties
//<Link to="./generalinfo"></Link>
