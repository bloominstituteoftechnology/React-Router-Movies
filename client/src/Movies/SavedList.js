import React from 'react';
import { Card, CardTitle, Button } from "reactstrap"
import { useHistory } from "react-router-dom";



const SavedList = props =>  {

  const history = useHistory();

  const backToHome = () => {
    setTimeout(() => {
      history.push("/")
    }, 1000);
  }
  
  
  
  return(
  <Card style={{margin: "5%", padding: "1.5%", display: "flex", flexFlow: "row", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "#edf6f9", border: "solid 1px black"}}>
    <CardTitle style={{fontSize: "1.7rem", fontFamily: "'Krona One', sans-serif", color: "#e63946", textShadow: "1px 1px 3px #9a8c98", fontWeight: "bold", marginLeft: "3%" }}>Saved Movies:</CardTitle>

    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}

    <Button style={{width: "80px", height: "45px", marginLeft: "65%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "#e63946", fontFamily: "'Krona One', sans-serif", fontSize: "0.8rem" }} onClick={()=>backToHome()}>Home</Button>

  </Card>
);}


export default SavedList;
