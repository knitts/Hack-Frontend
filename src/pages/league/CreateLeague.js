import React, { Component, Fragment } from 'react';  

class ModalPopup extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false  
        };  
    }  
  
    isShowModal = (status) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }  
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }  
  
  
    render() {  
        return (  
            <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-black rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                   Create a new league 
                </h1>

                <form >
                    <div>
                        <label htmlFor='email'>EntryFee</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='entryfee'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Max number of players</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='number of players'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>duration</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='duration'
                        />
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            create
                        </button>
                    </div>
                </form>
            </div>
        </div>
        );  
    }  
}  
  
export default (ModalPopup); 