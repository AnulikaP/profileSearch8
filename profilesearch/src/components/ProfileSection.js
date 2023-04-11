import React from 'react'
 
 export const peopleProfile = [
    {
        id: "60d0fe4f5311236168a109f5", name: 'ms Charlotte Legrand',
        picture: "https://randomuser.me/api/portraits/med/women/77.jpg"},
    
    {
        id: "60d0fe4f5311236168a109f6", name: ' miss Madison Ambrose',
        picture: "https://randomuser.me/api/portraits/med/women/15.jpg"},
    {
        id: "60d0fe4f5311236168a109fa", name: 'ms Ann Mason',
        picture: "https://randomuser.me/api/portraits/med/women/18.jpg"},
    {
        id: "60d0fe4f5311236168a109fb", name: 'mr Sohan Pierre',
        picture: 'https://randomuser.me/api/portraits/med/men/77.jpg' },
    {
        id: "60d0fe4f5311236168a109fc", name: 'mr Gonzaga Ribeiro',
        picture: "https://randomuser.me/api/portraits/med/men/10.jpg"},
    {
        id: "60d0fe4f5311236168a109ff", name: 'mrs Josefina Calvo',
        picture: "https://randomuser.me/api/portraits/med/women/3.jpg" },
    {
        id: "60d0fe4f5311236168a10a00", name: 'mrs Els Ijsseldijk',
        picture: "https://randomuser.me/api/portraits/med/women/75.jpg" },
    {
        id: "60d0fe4f5311236168a10a01", name: 'mr Jesus Riley',
        picture: "https://randomuser.me/api/portraits/med/men/45.jpg" },
    {
        id: "60d0fe4f5311236168a10a03", name: 'mr Andri Leclerc',
        picture: "https://randomuser.me/api/portraits/med/men/57.jpg" },
    {
        id: "60d0fe4f5311236168a10a04", name: 'mr Konsta Manninen',
        picture: "https://randomuser.me/api/portraits/med/men/24.jpg"}
];

const ProfileSection = ({item}) => {

    const listProfile = item.map((person, index) => 
    <div>
    <div key={person.id} className='profile'>
        <img src={person.picture} alt='profilepic' />
        <div className='title'>
        <p>
            {person.id}
        </p>
        <p>
           <b> {person.name}</b>
        </p>
        </div>
        </div>
        </div>);

        const content = listProfile?.length ? listProfile : '';

  return (
   <div className='container'>
    <ul>{content}</ul>
   </div>    


  )
}



export default ProfileSection