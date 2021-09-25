import React,{ useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import ModalPopup from './CreateLeague';
import Listleagues from './leagueList';
import dollar from "../../assets/dollar.png";

class League extends React.Component{
    constructor (){
        super();
        this.state = {showForm:false}
    }

    render(){
        return (
            <div className="overflow-hidden text-white" >

            <section class="w-screen mx-auto text-gray-100 body-font ">
              <div class="flex flex-wrap container mx-auto space-x-3">
           <Sidebar className="w-1/6"/>
            <button  className="absolute top-10 right-10 font-bold px-8 py-3 rounded bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"
             onClick= {()=> this.setState({showForm:!this.state.showForm})}>
            {this.state.showForm ?'Close':'Create New team'}
            </button>            
            {this.state.showForm ? <ModalPopup/>:<Listleagues/>}
            </div></section></div>

        )
    }

}

export default League;