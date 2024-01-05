import { IonSearchbar } from "@ionic/react";
import React from "react";

class Searchbar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            keyWord:''
        };

        this.onKeyWordChange = this.onKeyWordChange.bind(this);
    }

    onKeyWordChange(event){
        const newKeyword = event.target.value;
        this.setState(
            { keyWord: newKeyword },
            ()=>this.props.search(newKeyword)
        );
    }

    render(){
        return(
            <IonSearchbar placeholder="Search" color={"dark"} value={this.state.keyWord} onIonInput={this.onKeyWordChange}/>
        )
    }
}

export default Searchbar;