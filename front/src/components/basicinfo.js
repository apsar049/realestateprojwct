import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from './ContextProvider/Context'
import { useNavigate } from 'react-router-dom'
import '../css/basicinfo.css'
import LocationInfo from './locationinfo'
import Header from './Header'
const BasicInfo = () => {
  //{ info }
  const [propertyType, setPropertyType] = useState('')
  const { logindata, setLoginData } = useContext(LoginContext)
  const navigate = useNavigate()

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
      // navigate('/basicinfo')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid()
      setInfo(true)
    }, 2000)
  }, [])

  const handleBack = async e => {
    e.preventDefault()
    navigate('/basicinfo/propertydetails/generalinfo/locationinfo/listings')
  }

  const handleUpload = async e => {
    e.preventDefault()
    console.log(propertyType)
    // console.log("raj")
    // const formdata = new FormData();
    // formdata.append("propertyType", propertyType);
    // console.log(formdata)
    const objectname = { propertyType }
    navigate('/basicinfo/propertydetails')

    await axios
      .post('http://localhost:8000/api/posts', objectname)
      // await axios.post('posts', formdata)
      //http://localhost:8000/
      //mongodb://localhost:27017
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
    navigate('/basicinfo/propertydetails')
    setPropertyType('')
  }
  const data = ['Plot', 'House', 'Flat']
  const data1 = ['1 Year', '2 Year', '3 Year']
  const data2 = ['Yes', 'No']
  const data3 = ['Owned']
  const data4 = ['Yes', 'No']
  const data5 = ['Yes', 'No']

  return (
    <>
      {info ? (
        <div className='basic-info-container'>
          <div className='logopage'>
            <div className='logo'>Logo</div>
            <div className='similar-container'>
              <div className='similar' id='similar1'>
                <span>
                  <i className='fa-thin fa-house'></i>
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
              <div>
                <div style={{ marginRight: '200px' }}>
                  <Header />
                </div>

                {/* {info.email} */}
              </div>
            </div>
            <hr />

            <div className='bottom-section'>
              <div className='new-property'>ADD NEW PROPERTY</div>

              <div className='button-section'>
                <div className='similar-button'>
                  <button className='btn1'>
                    {' '}
                    <span>
                      <i className='fa-regular fa-circle-1'></i>
                    </span>
                    <span>Basic Info</span>
                  </button>
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
                <div className='similar-button' style={{ marginTop: '7px' }}>
                  <span>
                    <i className='fa-regular fa-circle-4'></i>
                  </span>
                  <span>Location Info</span>
                </div>
              </div>
              {/* <form encType="multipart/form-data"> */}
              <div className='details-section'>
                <div className='details-section-left'>
                  <div className='details-section-left1'>
                    <div>
                      <label>Property Type</label>
                    </div>
                    <div>
                      <input
                        list='data'
                        type='text'
                        name='propertyType'
                        value={propertyType}
                        placeholder='Select Property Type'
                        onChange={e => {
                          setPropertyType(e.target.value)
                        }}
                      />
                      <datalist id='data'>
                        {data.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-left1'>
                    <div>
                      <label>Price</label>
                    </div>
                    <div>
                      <input type='number' />
                    </div>
                  </div>
                  <div className='details-section-left1'>
                    <div>
                      <label>Property Age</label>
                    </div>
                    <div>
                      <input list='data1' placeholder='Select Property Age' />
                      <datalist id='data1'>
                        {data1.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-left1'>
                    <div>
                      <label>Property Description</label>
                    </div>
                    <div>
                      <input type='text' />
                    </div>
                  </div>
                  <div className='details-section-left1' id=''>
                    <span>
                      <button
                        className='cancel'
                        onClick={e => {
                          handleBack(e)
                        }}
                      >
                        cancel
                      </button>
                    </span>
                  </div>
                </div>
                <div className='details-section-right'>
                  <div className='details-section-right1'>
                    <div>
                      <label>Negotable</label>
                    </div>
                    <div>
                      <input list='data2' placeholder='Select Negotable' />
                      <datalist id='data2'>
                        {data2.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-right1'>
                    <div>
                      <label>Ownership</label>
                    </div>
                    <div>
                      <input list='data3' placeholder='Select Ownership' />
                      <datalist id='data3'>
                        {data3.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-right1'>
                    <div>
                      <label>Property Approved</label>
                    </div>
                    <div>
                      <input list='data4' placeholder='Property Approved' />
                      <datalist id='data4'>
                        {data4.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className='details-section-right1'>
                    <div>
                      <label>Bank Loan</label>
                    </div>
                    <div>
                      <input list='data5' placeholder='Bank Loan' />
                      <datalist id='data5'>
                        {data5.map((op, i) => (
                          <option key={i}>{op}</option>
                        ))}
                      </datalist>
                    </div>
                    <div className='details-section-right1'>
                      <span>
                        <button
                          onClick={e => handleUpload(e)}
                          className='save1'
                        >
                          save & continue
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='down-buttons'></div>
                {/* //<Link to="./propertydetails"></Link>  </Link>*/}
              </div>
              {/* </form> */}
            </div>
          </div>
          {/* <LocationInfo propertyType= {propertyType}/> */}
          {/* <Link to ="/basicinfo/propertydetails" state={propertyType}></Link> */}
        </div>
      ) : (
        <h1>Loading Content</h1>
      )}
    </>
  )
}
export default BasicInfo
