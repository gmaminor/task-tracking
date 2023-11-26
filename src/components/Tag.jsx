
const Tag = ({ tagName,clicked,selected}) => {

  
    const btnStyle={
        HTML :'btn btn-success m-2 rounded',
        CSS :'btn btn-secondary m-2 rounded',
        JavaScript : 'btn btn-info m-2 rounded',
        React : 'btn btn-danger m-2 rounded',
        default : 'btn btn-muted m-2 rounded border border-2'
    }

    
    return (
        <div className=''>
            <button className={selected ? btnStyle[tagName] : btnStyle.default }  type='button' onClick={()=>clicked(tagName)}>{tagName}</button>
        </div>
    )
}
export default Tag;