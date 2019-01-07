import React from "react";
import { HomePresenter } from "./HomePresenter";

interface IState {}

export default class extends React.Component<{}, IState> {
  state = {};

  render() {
    const {} = this.state;
    console.log(this.state);
    return <HomePresenter />;
  }
}
