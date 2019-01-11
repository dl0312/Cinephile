import React from "react";
import PersonDetailPresenter from "./PersonDetailPresenter";
import { RouteComponentProps } from "react-router";
import { moviesApi } from "../../api";

interface IProps extends RouteComponentProps<any> {}

interface IState {
  person: any;
  error: string | null;
  loading: boolean;
}

export default class PersonDetailContainer extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      person: null,
      error: null,
      loading: true
    };
  }

  componentDidMount = async () => {
    console.log(`didmount`);
    try {
      const {
        match: {
          params: { id }
        }
      } = this.props;
      const { data: result } = await moviesApi.person(id);
      console.log(result);
      this.setState({ person: result, loading: true });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { id } = this.props.match.params;
    const { person, error, loading } = this.state;
    console.log(this.props, this.state);
    return (
      <>
        <PersonDetailPresenter
          person={person}
          id={id}
          error={error}
          loading={loading}
        />
      </>
    );
  }
}
