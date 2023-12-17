
import React from "react";
import "./UserCard.css";
import  propTypes from 'prop-types'

const UserCard = ({imageURL, avatarShape, name, description, backgroundColor,title}) => {
  return (
    <div data-testid="usercard" className={"usercard"}>
      <div className={backgroundColor ? backgroundColor : 'red'}>
        <img className={avatarShape ? avatarShape : 'round'} src={imageURL} alt="" />
        <h2>{name}</h2>
        <h4>{title}</h4>
        <h5>{description ? description : 'Testing Description'}</h5>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes={
 name:propTypes.string.isRequired,
 imageURL:propTypes.string,
 avatarShape:propTypes.string,
 description:propTypes.string,
 backgroundColor:propTypes.string,
 title:propTypes
 
}