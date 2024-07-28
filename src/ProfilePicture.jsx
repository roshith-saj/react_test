function ProfilePicture(){
   const imageUrl = "https://static.vecteezy.com/system/resources/previews/010/925/820/non_2x/colorful-welcome-design-template-free-vector.jpg";
   const handleClick = (e) => e.target.style.display = "None";
   
   return(
    <img src={imageUrl} height={150} width={350} onClick={(e)=>handleClick(e)}></img>
   );
}

export default ProfilePicture