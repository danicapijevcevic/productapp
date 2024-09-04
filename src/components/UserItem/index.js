import './useritem.style.scss';
const UserItem = function ({title, value}) {
    return (
        <div className='shop-useritem'>
                    <div className='shop-useritem-key'>
            {title}
            </div>
            <div className='shop-useritem-value'>
            {value}
            </div>
        </div>
    )
}
export default UserItem;