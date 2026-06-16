function app(){
  const name="Birds"
  let num1=22;
  let num2=32;
  let num=num1+num2;
  let age=18;
  let userage=20;
 

  return(
    <>
    
    <h1 style={{color:"blue"}}>page for {name}</h1>
    <div style={{display:"flex"}}>
    <img style={{width:200}}
    src="https://i.pinimg.com/736x/9e/9a/bc/9e9abc6ca4e51e6306be36306d51613f.jpg" alt="birds" />
    <p className="Avian">Wild birds are important for their contributions
    to ecosystem health and human well-being. Critical
    ecological roles provided by birds include insect
    and rodent control, plant pollination, and seed
    dispersal. Wild birds have also captivated humans
    for millennia, and today, the avid birder or <b>{num}</b>
    “twitcher” is a well-known trope that has even
    been the focus of a Hollywood movie. In 
    addition, recent research indicates that a
    rich diversity of wild bird species enhances 
    the mental health of all humans, not just twitchers.
     </p>
     </div>
     {
      (userage>age)?<p> user logged in</p>:
      <p>invalid user</p>
    }
    <button onDoubleClick={() =>{
     alert("warning⚠️")}}
    style={{width:"fit-content"}}>Danger</button>
  </>
  );

}
export default app;