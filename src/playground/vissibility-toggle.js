class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return{
                visible: !prevState.visible
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visible? "hide" : "show"}
                </button>
                {this.state.visible && (
                    <div>
                        <p>bazinga !!!!</p>
                    </div>
                )}
                
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));