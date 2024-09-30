
const Person = ({name,age,image})=>{
return(
    <article className="person">
        
        <img src ={image} alt={name} className={image}/> 
        <div>
            <h4>{name}</h4>
            <h5>{age} years</h5>
        </div>
   </article>

)

};

export default Person;