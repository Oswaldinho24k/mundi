import React from 'react';


const bg = "https://firebasestorage.googleapis.com/v0/b/autonomo-7e183.appspot.com/o/bg.mp4?alt=media&token=79bb0325-c173-4e21-aa75-7953a024164f";

const Background = (props) => {
  return(
    <video style={styles.bgvid} autoPlay loop muted>
        <source src={bg} type="video/mp4" />
    </video>   
  );  
};

const styles = {
    bgvid:{
        position:'fixed',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: '-1000'
    }
}


export default Background;