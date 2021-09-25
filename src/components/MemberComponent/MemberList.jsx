import Member from "./Member/Member";

function MemberList({members, fonction, deleteMemberCallBack, saveMemberCallBack}){

    return (
        <div>
           {members.map(member => <Member key={member.idMember} details={member} fonction={fonction}  deleteMemberCallBack={deleteMemberCallBack} saveMemberCallBack={saveMemberCallBack} />)}
           
        </div>
    )
}
export default MemberList;