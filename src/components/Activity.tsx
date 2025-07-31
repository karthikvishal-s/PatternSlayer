import BackButton from "./BackButton";


const list1 = [{
    Question:"101010",
    options:["1","0","19","99"],
    answer:"1"
},
{
    Question:"123456",
    options:["7","8","45","18"],
    answer:"7"
},
{

}];

const RandomIndex = Math.floor(Math.random() * list1.length);
const elements=[];
for(let i=0;i<4;i++){
    elements.push(<h1 key={i}>My name is</h1>);


}

const Activity = () => {
  return (
    <div>
      Activity

      <BackButton/>

      <div>
        Questions:
      </div>
      <h1>{list1[RandomIndex].Question}</h1>
      <div>
        
      </div>
              
    </div>
  )
}


export default Activity
