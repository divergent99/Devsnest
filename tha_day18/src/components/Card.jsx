const Card = (props) =>{
   return(
       <div className="container">
        <div className="card">
        <div className="header"></div>
        <img src={props.img} alt=""/>
        <button className="btn">Click Me !</button>
        </div>
        </div>
    );
};
export default Card;
/*<img src = "blackpanther.jpg" alt="Black Panther"/>*/