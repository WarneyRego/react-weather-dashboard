import loading from '../assets/Rolling@1x-1.0s-200px-200px.svg'
function Loader(){
    return (
        <div className='loader'>
            <img src={loading} alt="loading animation" />
        </div>
    )
}export default Loader;