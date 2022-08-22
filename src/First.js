import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik'
import { ethers } from 'ethers'
import { LoginSchema } from './Validate'
import { ContractFactory } from 'ethers'
import abi from './contractAbi.json'
import byteCode from './contractByteCode'
const First =  () => {
const [connect, setConnect] = useState(false);
const [name, setName] = useState('');
const[address, setAddress] = useState();
const [symbol, setSymbol] = useState();
const [decimals, setDecimals] = useState();
  const formik = useFormik({
    // set initail values to the form fields
    initialValues: {
      tokenName: '',
      tokenSymbol: '',
      tokenDecimals: '',
      initialSupply: '',
      totalSupply: '',
      supplyType: '',
      accessType: '',
      transferType: '',
      tokenType: '',
      network: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert("you clicked")
      alert(JSON.stringify(values, null, 2))
      console.log(values);
      deployFunction(values);
    },
  })
  // ..............................................
 const deployFunction = async (value) => {
// get signer 
const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);
const signer = await provider.getSigner();
const address = await signer.getAddress()
console.log(address, "this is signer aqddress")
const factory = new ContractFactory(abi, byteCode,signer);
console.log(value.tokenName, "this is in deploy function");
console.log(value.tokenSymbol, "this is total supply");
setSymbol(value.tokenSymbol);
setName(value.tokenName);
setDecimals(value.tokenDecimals);
const contract = await factory.deploy(value.tokenName, value.tokenSymbol, value.tokenDecimals, value.initialSupply, value.totalSupply);
console.log(contract.address);
setAddress(contract.address);
console.log(contract.deployTransaction);
 }
  // ...............................................
  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    console.log(address)
    setConnect(true)
  }

  // auto import token funciton in metamask wallet
  const autoImportToken = async () => {
    alert("auto import token")
    const tokenAddress = address;
    const tokenSymbol = symbol;
    const tokenDecimals =decimals;
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: { 
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
          },
        },
      });
    
      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }
  // ...............................................

  return (
    <>
      <div className="container-fluid">
        <div className="container" id="main">
          <div className="container" id="upper">
            <div id="up1" className="col-lg-8 col-md-7 col-sm-8 ">
              {' '}
              <h4 style={{ fontSize: '24px', fontWeight: '500' }}>
                Token Details
              </h4> 
              <p id="small">Enter token details and choose your network</p>
              <h4>Token Name :{name}</h4>
              <h4>Address:{address}</h4>
            </div>
            <div id="connectBtn" className="col-lg-4 col-md-4 col-sm-2 col-6">
              <button  className="cntBtn" onClick={connectWallet}>
                {connect ? 'Connected' : 'Connect Wallet'}
              </button>
            </div>
          </div>
          <div className="container" id="lower">
            <Form onSubmit={formik.handleSubmit}></Form>
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
                    class="form-control"
                    name="tokenName"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Name"
                    value={formik.values.tokenName}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.tokenName && (
                  <div className="error" style={{ color: 'red' }}>
                    {formik.errors.tokenName}
                  </div>
                )}
                <p id="text">
                  choose a name for your token{' '}
                  {/* <button type="submit">enter</button> */}
                </p>
              </div>
              {/* this is second */}
              <div className="col-12" id="a1">
                <label id="label">Token Symbol *</label>
                <div id="a2">
                  <input
                    type="text"
                    id="input"
                    class="form-control"
                    name="tokenSymbol"
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="Your Token Symbol"
                    value={formik.values.tokenSymbol}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="error" style={{ color: 'red' }}>
                  {formik.errors.tokenSymbol}
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
                    class="form-control"
                    name="tokenDecimals"
                    value={formik.values.tokenDecimals}
                    onChange={formik.handleChange}
                    style={{ display: 'block' }}
                    placeholder="18"
                    onBlur={formik.handleBlur}

                    // disabled
                  />
                </div>
                {formik.errors.tokenDecimals && (
                  <div className="error" style={{ color: 'red' }}>
                    {formik.errors.tokenDecimals}
                  </div>
                )}
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
                    type="number"
                    id="input"
                    class="form-control"
                    name="initialSupply"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ display: 'block' }}
                    placeholder="Your Token Initial Supply"
                  />
                </div>
                <div className="error" style={{ color: 'red' }}>
                  {formik.errors.initialSupply}
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
                    type="number"
                    id="input2"
                    class="form-control"
                    name="totalSupply"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ display: 'block' }}
                    placeholder="Your Token Max Supply"
                  />
                </div>
                <div className="error" style={{ color: 'red' }}>
                  {formik.errors.totalSupply}
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
                        class="form-control"
                        name="supplyType"
                        onChange={formik.handleChange}
                        style={{ display: 'block' }}
                        placeholder="Enter Token Name"
                        value="Fixed"
                      />
                    </div>
                    <div id="s2">
                      <div id="icon">
                        <i class="fa fa-caret-up" aria-hidden="true"></i>
                      </div>
                      <div id="icon2">
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <p id="text">10k, Fixed, Unlimited, Capped</p>
              </div>
              {/* second */}
              <div className="col-12" id="a1">
                <label id="label">Supply Type</label>
                <div id="a2" className="p-0">
                  <div id="secondUp">
                    <div id="s1">
                      <input
                        type="text"
                        id="input0"
                        class="form-control"
                        name="supplyType"
                        onChange={formik.handleChange}
                        style={{ display: 'block' }}
                        placeholder="Enter Token Name"
                        value="None"
                      />
                    </div>
                    <div id="s2">
                      <div id="icon">
                        <i class="fa fa-caret-up" aria-hidden="true"></i>
                      </div>
                      <div id="icon2">
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <p id="text">None, Ownable, Role Based</p>
              </div>
              {/* third */}
              <div className="col-12" id="a1">
                <label id="label">Transfer Type</label>
                <div id="secondUp">
                  <div id="s1">
                    <input
                      type="text"
                      id="input0"
                      class="form-control"
                      name="transferType"
                      onChange={formik.handleChange}
                      style={{ display: 'block' }}
                      placeholder="Enter Token Name"
                      value="Unstopable"
                    />
                  </div>
                  <div id="s2">
                    <div id="icon">
                      <i class="fa fa-caret-up" aria-hidden="true"></i>
                    </div>
                    <div id="icon2">
                      <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </div>
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
                  <select
                    id="input"
                    class="form-select"
                    name="tokenType"
                    aria-label="Default select example"
                  >
                    <option selected>SimpleERC20</option>
                    <option value="1">HelloERC20</option>
                    <option value="1">StandardERC20</option>
                    <option value="1">PauseableERC20</option>
                    <option value="1">CommonERC20</option>
                    <option value="1">UnlimitedERC20</option>
                    <option value="1">AmazingERC20</option>
                    <option value="2">PowerfullERC20</option>
                    <option value="3">MintableERC20</option>
                  </select>
                </div>
                <p id="text">Choose your Token Type.</p>
              </div>
              {/* sec */}
              <div className="col-12" id="a1">
                <label id="label">Network *</label>
                <div id="a2">
                  <select
                    id="input"
                    name="network"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Etherium-Mainnet</option>
                    <option selected>Rinkeby-Testnet</option>
                    <option value="1">Robsten-Testnet</option>
                    <option value="1">Kovan-Testnet</option>
                    <option value="1">Goerli-Testnet</option>
                  </select>
                </div>
                <p id="text">Choose your Network.</p>
                <div id="selectNetwork">
                  <h1>you selected a test Network</h1>
                </div>
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
                <button type="submit" onClick={formik.handleSubmit} id="submitBtn">
                  NEXT
                </button>
                <button onClick={autoImportToken} className="cntBtn2 col-lg-12 col-md-12 col-sm-12 col-12">Auto Import Token </button>
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
