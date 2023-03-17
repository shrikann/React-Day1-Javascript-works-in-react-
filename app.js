console.log("message to developer")
function Alertmessage()
{
    const Hi=()=>{alert("message from javascript Alert")}
    return <div><button onClick={Hi}>Click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))