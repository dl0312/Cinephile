import React from "react";
import { Avatar } from "antd";

export default class UserSkeleton extends React.Component {
  render() {
    return (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px 15px"
        }}
      >
        <Avatar
          shape="square"
          size={"small"}
          style={{
            backgroundColor: "skyblue",
            marginRight: "5px"
          }}
          icon="user"
        />
        <div style={{ fontSize: 15 }}>Anonymous</div>
      </span>
    );
  }
}
