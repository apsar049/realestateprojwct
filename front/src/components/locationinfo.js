import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from './ContextProvider/Context'

import '../css/basicinfo.css'
import '../css/locationinfo.css'
import Header from './Header'

const LocationInfo = () => {
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
      navigate('/basicinfo/propertydetails/generalinfo/locationinfo')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid()
      setInfo(true)
    }, 2000)
  }, [])
  // const navigate = useNavigate()
  // const handleUpload = async (e) => {
  //     e.preventDefault();
  //     const formdata = new FormData();
  //     await axios.post("mongodb://locahost/realtime/posts",(formdata))
  //         //,
  //         .then((res) => { console.log(res) })
  //         .catch(error => { console.log(error) })
  //     navigate("/listings")
  // }
  const navigate = useNavigate()
  const handleChange = e => {
    e.preventDefault()
    navigate('./listings')
  }

  const data0 = ['Plot', 'House', 'Flat']
  const data1 = ['1 Year', '2 Year', '3 Year']
  const data2 = ['Yes', 'No']
  const data3 = ['Owned']
  const data4 = ['Yes', 'No']
  const data5 = ['Yes', 'No']

  return (
    <>
      <div className='basic-info-container'>
        <div className='logopage'>
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
              <span></span>
              <span style={{ marginRight: '1000px' }}>
                <Header />
              </span>
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
              <div className='similar-button' style={{ marginTop: '7px' }}>
                <span>
                  <i className='fa-regular fa-circle-2'></i>
                </span>
                <span>Property Detail</span>
              </div>
              <div className='similar-button' style={{ marginTop: '7px' }}>
                <span>
                  <i className='fa-regular fa-circle-3'></i>
                </span>
                <span>General Info</span>
              </div>
              <div className='similar-button'>
                <button className='btn4'>
                  <span>
                    <i className='fa-regular fa-circle-4'></i>
                  </span>
                  <span>Location Info</span>
                </button>
              </div>
            </div>
            <form encType='multipart/form-data'>
              <div className='details-section'>
                <div className='details-section-left'>
                  <div className='details-section-left1'>
                    <div>
                      <label>Email</label>
                    </div>
                    <div>
                      <input type='text' placeholder='Email' />
                    </div>
                  </div>
                  <div className='details-section-left1'>
                    <div>
                      <label>Area</label>
                    </div>
                    <div>
                      <input list='data0' placeholder='Select Area' />
                      <datalist id='data0'>
                        {data0.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-left1'>
                    <div>
                      <label>Address</label>
                    </div>
                    <div>
                      <input type='text' placeholder='Address' />
                    </div>
                  </div>
                  <div className='details-section-left1'>
                    <div>
                      <label>Ltittude</label>
                    </div>
                    <div>
                      <input type='text' placeholder='Latittude' />
                    </div>
                  </div>
                  <div className='details-section-left1'>
                    <span>
                      <Link to='./generalinfo'>
                        <button className='cancel'>previous</button>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className='details-section-right'>
                  <div className='details-section-right1'>
                    <div>
                      <label>City</label>
                    </div>
                    <div>
                      <input list='data1' placeholder='Select City' />
                      <datalist id='data1'>
                        {data1.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-right1'>
                    <div>
                      <label>Pincode</label>
                    </div>
                    <div>
                      <input list='data2' placeholder='Select Pincode' />
                      <datalist id='data2'>
                        {data2.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-right1'>
                    <div>
                      <label>Landmark</label>
                    </div>
                    <div>
                      <input type='text' placeholder='Landmark' />
                    </div>
                  </div>
                  <div className='details-section-right1'>
                    <div>
                      <label>Longittude</label>
                    </div>
                    <div>
                      <input type='text' placeholder='Longittude' />
                    </div>
                  </div>
                  <div className='details-section-right1'>
                    <span>
                      <Link to='./listings'>
                        <button
                          className='save1'
                          onClick={e => {
                            handleChange(e)
                          }}
                        >
                          add property
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default LocationInfo
//onClick={(e) => { handleUpload(e) }}
