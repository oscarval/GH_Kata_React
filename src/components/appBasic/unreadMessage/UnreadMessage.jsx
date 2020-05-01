import React from "react";

const UnreadMessage = (props) => {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h3>Unread messages</h3>
      {unreadMessage.length > 0 && (
        <div>You have {unreadMessage.length} unread messages</div>
      )}
    </div>
  );
};

export default UnreadMessage;
