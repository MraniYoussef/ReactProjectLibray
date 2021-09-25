import { useEffect, useState } from "react";
import { addMemberApi, deleteMemberApi, getMemberFunctionApi, getMembersApi, saveMemberApi, searchMemberApi } from "../api/apiMembers";
import AddMemberForm from "../components/MemberComponent/AddMemberForm";
import MemberList from "../components/MemberComponent/MemberList";
import SearchBarMember from "../components/MemberComponent/SearchBarMember";

function MemberPage() {
  const [members , setMembers] = useState(null);
  const [fonction , setFonction] = useState(null);
  useEffect(() => {
    //Appel webService
    const fetchData = async () => {
      const members = await getMembersApi();
      setMembers(members)
      console.log(members);
      const fonction = await getMemberFunctionApi();
      setFonction(fonction)
    }
      fetchData();   
  }, []);

 
  const filterMembers = async keyword => {
    try{

      const filtredMembers = await searchMemberApi(keyword);
      console.log("fffff",filtredMembers);

      setMembers(filtredMembers);
    }catch(err){
      console.log(err);
    }
  }

  const addMember = async data => {

    try{
      const id = await addMemberApi(data);
      
      const member = {...data, id};
      setMembers([...members, member]);
    }catch(err){
      console.log(err)
    }
  }

  const deleteMember = async idMember => {
      try{
        await deleteMemberApi(idMember);
         const newMembers = members.filter(member => member.idMember !== idMember);
          setMembers([...newMembers]);
      }catch(err) {
        console.log(err);
      }
        }

  const saveMember = async data => {
    console.log(data);

    try {
      const newMember = await saveMemberApi(data);
      const newMembers = [...members];
      const foundMember = newMembers.find(member => member.idMember === newMember.idMember);
      foundMember.firstName = newMember.firstName;
      foundMember.lastName = newMember.lastName;
      foundMember.password = newMember.password;
      foundMember.cin = newMember.cin;
      foundMember.email = newMember.email;
      foundMember.address = newMember.address;
      foundMember.dateOfMembership = newMember.dateOfMembership;
      foundMember.function = newMember.function;

      setMembers(newMembers);
    }catch(err) {
      console.log(err);
    }
  }
    
        const resetMembers = async () => {
         const members = await getMembersApi();
         setMembers(members);
        }

       
  
  return (
    <>
                
                <SearchBarMember filterMembersCallBack={filterMembers} resetMembersCallBack={resetMembers} />
            {members
            ? <MemberList members={members} fonction={fonction} deleteMemberCallBack={deleteMember} saveMemberCallBack={saveMember} /> 
            : <div> Loading...</div>
            }
                  <AddMemberForm fonction={fonction} addMemberCallBack={addMember} />
         
      

    </>
  );
}

export default MemberPage;
