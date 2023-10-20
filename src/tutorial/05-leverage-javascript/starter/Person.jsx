import avatar from '../../../assets/default-avatar.svg';

function Person(input){
    const {name, nickName="no nick name", id} = input.input;
    // const imgUrl = input.input && input.input.images && input.input.images[0] && input.input.images[0].small && input.input.images[0].small.url || avatar;
    const imgUrl = input?.input?.images?.[0]?.small?.url || avatar;
    // const img = images?.[0]?.small?.url || avatar
    return <div style={{margin:"1rem"}}>
        <img style={{height:50, borderRadius:100}} src={imgUrl} alt="" />
        <h4 style={{color:"#fff", margin:0}}>username : {name}</h4>
        <p>nickName : {nickName}</p>
    </div>
}

export default Person;
