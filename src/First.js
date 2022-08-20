import React from 'react'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik'

const First = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <>
      <div className="container">
        <div className="container" id="main">
          <div className="container" id="upper">
            <h4>Token Details</h4>
            <p id="small">Enter token details and choose your network</p>
          </div>
          <div className="container" id="lower">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 " id="one">
              <div className="col-12 p-0" id="a1">
                <label id="label">Token Name *</label>
                <div
                  id="a2"
                  className="col-lg-12 col-md-12 col-sm-12 col-12 p-0"
                >
                  <input
                    type="text"
                    id="input"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Name"
                  />
                </div>
                <p id="text">choose a name for your token</p>
              </div>
              {/* this is second */}
              <div className="col-12" id="a1">
                <label id="label">Token Symbol *</label>
                <div id="a2">
                  <input
                    type="text"
                    id="input"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Symbol"
                  />
                </div>
                <p id="text">
                  choose a symbol for your token(usually 3-5 chars)
                </p>
              </div>
              {/* this is third */}
              <div className="col-12" id="a1">
                <label id="label">Token Decimals *</label>
                <div id="a2">
                  <input
                    type="text"
                    id="input2"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="18"
                    disabled
                  />
                </div>
                <p id="text">
                  Insert the decimal precision of your token. If you don't know
                  what to insert, use 18.
                </p>
              </div>
              {/* this is fourth */}
              <div className="col-12" id="a1">
                <label id="label">initial supply*</label>
                <div id="a2">
                  <input
                    type="text"
                    id="input2"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Initial Supply"
                  />
                </div>
                <p id="text">
                  Insert the initial number of tokens available. Will be put in
                  your account.
                </p>
              </div>
              {/* this is fifth */}
              <div className="col-12" id="a1">
                <label id="label">total supply *</label>
                <div id="a2">
                  <input
                    type="text"
                    id="input2"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Max Supply"
                  />
                </div>
                <p id="text">Insert the maximum number of tokens available.</p>
              </div>
            </div>

            {/* this is centered div */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="two">
              <div className="col-12" id="a1">
                <label id="label">Supply Type</label>
                <div id="a2" className="p-0">
                  <div id="secondUp">
                    <div id="s1">
                    <input
                      type="text"
                      id="input0"
                      name="firstName"
                      onChange={formik.handleChange}
                      style={{ display: 'block' }}
                      placeholder="Enter Token Name"
                      value="Fixed"
                    />
                    </div>
                    <div id="s2">
                      <div id="icon"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
                      <div id="icon2"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                    </div>
                  </div>
                </div>
                <p id="text">choose a name for your token</p>
              </div>
              {/* second */}
              <div className="col-12" id="a1">
                <label id="label">Access Type</label>
                {/* <div id="a2">
                  <input
                    type="text"
                    id="input2"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Enter Token Name"
                    value="None"
                  />
                </div>
                <p id="text">choose a name for your token</p> */}
                <div id="secondUp">
                    <div id="s1">
                    <input
                      type="text"
                      id="input0"
                      name="firstName"
                      onChange={formik.handleChange}
                      style={{ display: 'block' }}
                      placeholder="Enter Token Name"
                      value="None"
                    />
                    </div>
                    <div id="s2">
                      <div id="icon"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
                      <div id="icon2"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                    </div>
                  </div>
              </div>
              {/* third */}
              <div className="col-12" id="a1">
                <label id="label">Transfer Type</label>
                {/* <div id="a2">
                  <input
                    type="text"
                    id="input2"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Enter Token Name"
                    value="Untopable"
                  />
                </div>
                <p id="text">choose a name for your token</p> */}
                <div id="secondUp">
                    <div id="s1">
                    <input
                      type="text"
                      id="input0"
                      name="firstName"
                      onChange={formik.handleChange}
                      style={{ display: 'block' }}
                      placeholder="Enter Token Name"
                      value="Unstopable"
                    />
                    </div>
                    <div id="s2">
                      <div id="icon"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
                      <div id="icon2"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                    </div>
                  </div>
              </div>
              {/* fourth */}

              <div id="toggle">
                <div className="row" id="row5">
                  <div className="col-12" id="t1">
                    <div className="" id="btn">
                      <Form>
                        <Form.Check type="switch" id="custom-switch" />
                      </Form>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" id="copy">
                      <p id="verified">Verified Source Code</p>
                    </div>
                  </div>
                </div>
                <div id="t2" className="col-12">
                  <p id="text">
                    {' '}
                    Your Token Source Code will be automatically verified on
                    Etherscan. Only works on Mainnet.
                  </p>
                </div>
                <div id="t3" className="col-12">
                  <div id="btn">
                    {' '}
                    <Form>
                      <Form.Check type="switch" id="custom-switch" />
                    </Form>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9" id="copy">
                    <p id="verified">Remove Copyright</p>
                  </div>
                </div>
                <div className="row">
                  {' '}
                  <div id="t4" className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <p id="text">
                      {' '}
                      Remove the link pointing from your contract.
                    </p>
                  </div>
                </div>

                <div id="t5">
                  <div id="inner51">
                    {' '}
                    <div id="btn">
                      {' '}
                      <Form>
                        <Form.Check type="switch" id="custom-switch" />
                      </Form>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" id="copy">
                      <p id="dec">Burnable</p>
                    </div>
                  </div>
                  <div id="inner52">
                    {' '}
                    <div id="btn">
                      {' '}
                      <Form>
                        <Form.Check type="switch" id="custom-switch" />
                      </Form>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" id="copy">
                      <p id="dec">Mintable</p>
                    </div>
                  </div>
                  <div id="inner53">
                    {' '}
                    <div id="btn">
                      {' '}
                      <Form>
                        <Form.Check type="switch" id="custom-switch" />
                      </Form>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" id="copy">
                      <p id="dec">ERC1363</p>
                    </div>
                  </div>
                  <div id="inner54">
                    {' '}
                    <div id="btn">
                      {' '}
                      <Form>
                        <Form.Check type="switch" id="custom-switch" />
                      </Form>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9" id="copy">
                      <p id="dec"> Token Recover</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="three">
              <div className="col-12" id="a1">
                <label id="label">Token Type *</label>
                <div id="a2">
                  <input
                    type="text"
                    id="input"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Max Supply"
                  />
                </div>
                <p id="text">Choose your Token Type.</p>
              </div>
              {/* sec */}
              <div className="col-12" id="a1">
                <label id="label">Network *</label>
                <div id="a2">
                  <input
                    type="text"
                    id="input"
                    name="firstName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Max Supply"
                  />
                </div>
                <p id="text">Choose your Network.</p>
              </div>

              {/* last */}
              <div id="last">
                <div id="l1">
                  <div id="eth">
                    <div id="ethLeft">Price</div>
                    <div id="ethRight">
                      <h4>0.03 ETH </h4>
                    </div>
                  </div>
                </div>
                <div id="l2">
                  <div
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    id="lastCheck"
                  >
                    <Form.Check aria-label="option 1" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <p id="dec">
                      I have read, understood and agreed to Token Generator's
                      Terms of Use.
                    </p>
                  </div>
                </div>
                <button id="submitBtn">NEXT</button>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
      </div>
    </>
  )
}

export default First
