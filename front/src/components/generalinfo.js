import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { LoginContext } from './ContextProvider/Context'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Axios } from 'axios'
import '../css/basicinfo.css'
import '../css/generalinfo.css'
import LocationInfo from './locationinfo'
import Header from './Header'
const GeneralInfo = () => {
  //{ info }
  const navigate = useNavigate()

  const [image, setImage] = useState('')
  const [mobile, setMobile] = useState('')

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
  //     const formdata = new FormData();
  //     formdata.append("image", image);
  //     formdata.append("contact", contact);

  //     await Axios.post(' mongodb://locahost/realtime/posts', (formdata))
  //         .then(res => { console.log(res) })
  //         .catch(error => {
  //             console.log(error)
  //         })
  //     navigate("/postview");
  //     setImage("")
  //     setContact("")
  // }
  const setimgfile = e => {
    setImage(e.target.files[0])
  }

  const handleUpload = async e => {
    e.preventDefault()
    navigate('/basicinfo/propertydetails/generalinfo/locationinfo')

    var formData = new FormData()
    formData.append('image', image)
    formData.append('mobile', mobile)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const res = await axios
      .post(
        'http://localhost:8000/api/basicinfo/propertydetails/generalinfo/posts',
        formData,
        config
      )

      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    setMobile('')
    setImage('')
  }

  const data = ['Plot', 'House', 'Flat']
  const data1 = ['1 Year', '2 Year', '3 Year']
  const data2 = ['Yes', 'No']
  const data3 = ['Owned']
  const data4 = ['Yes', 'No']
  const data5 = ['Yes', 'No']

  return (
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
            <div className='similar-button' style={{ marginTop: '7px' }}>
              <span>
                <i className='fa-regular fa-circle-2'></i>
              </span>
              <span>Property Detail</span>
            </div>
            <div className='similar-button'>
              <button className='btn3'>
                <span>
                  <i className='fa-regular fa-circle-3'></i>
                </span>
                <span>General Info</span>
              </button>
            </div>
            <div className='similar-button' style={{ marginTop: '7px' }}>
              <span>
                <i className='fa-regular fa-circle-4'></i>
              </span>
              <span>Location Info</span>
            </div>
          </div>
          <div className='details-section'>
            <div className='details-section-left'>
              <div className='details-section-left1'>
                <div>
                  <label>Name</label>
                </div>
                <div>
                  <input list='data' placeholder='Owner' />
                  <datalist id='data'>
                    {data.map((op, i) => (
                      <option key={i}>{op}</option>
                    ))}
                  </datalist>
                </div>
              </div>
              <div className='details-section-left1'>
                <div>
                  <label>Posted By</label>
                </div>
                <div>
                  <input list='data1' placeholder='Posted By' />
                  <datalist id='data1'>
                    {data1.map((op, i) => (
                      <option key={i}>{op}</option>
                    ))}
                  </datalist>
                </div>
              </div>
              <div className='details-section-left1'>
                <div>
                  <label>Featured Package</label>
                </div>
                <div>
                  <input list='data2' placeholder='Please Select' />
                  <datalist id='data2'>
                    {data2.map((op, i) => (
                      <option key={i}>{op}</option>
                    ))}
                  </datalist>
                </div>
              </div>
              <div
                className='details-section-left1'
                style={{ marginTop: '20px' }}
              >
                <i className='fa-solid fa-circle-camera'></i>
                <input
                  type='file'
                  name='image'
                  onChange={setimgfile}
                  placeholder='Add Photo'
                />
              </div>
              <div className='details-section-left1'>
                <span>
                  <Link to='./listings'>
                    <button className='cancel'>cancel</button>
                  </Link>
                </span>
              </div>
            </div>
            <div className='details-section-right'>
              <div className='details-section-right1'>
                <div>
                  <label>Moobile</label>
                </div>
                <div>
                  <input
                    type='number'
                    name='mobile'
                    placeholder='Enter Mobile Number'
                    value={mobile}
                    onChange={e => {
                      setMobile(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className='details-section-right1'>
                <div>
                  <label>Sale Type</label>
                </div>
                <div>
                  <input list='data3' placeholder='Please Select' />
                  <datalist id='data3'>
                    {data3.map((op, i) => (
                      <option key={i}>{op}</option>
                    ))}
                  </datalist>
                </div>
              </div>
              <div className='details-section-right1'>
                <div>
                  <label>PPD Package</label>
                </div>
                <div>
                  <input list='data4' placeholder='Please Select' />
                  <datalist id='data4'>
                    {data4.map((op, i) => (
                      <option key={i}>{op}</option>
                    ))}
                  </datalist>
                </div>
              </div>
              <div
                className='details-section-right1'
                style={{ marginTop: '55px' }}
              >
                <span>
                  <button
                    className='save1'
                    onClick={e => {
                      handleUpload(e)
                    }}
                  >
                    save & continue
                  </button>
                </span>
              </div>
            </div>
            <div className='camera'>
              {/* <button className="camera-icon" value={image} onClick={(e) => { setImage(e.target.files[0]) }}><span><i className="fa-sharp fa-solid fa-circle-camera"></i></span> */}
              {/* <span>Add Photo</span></button> */}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <LocationInfo image={image}/>
                                <LocationInfo contact={contact}/> */}
    </div>
  )
}
export default GeneralInfo
