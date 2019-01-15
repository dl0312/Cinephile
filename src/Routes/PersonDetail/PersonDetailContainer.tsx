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
      const { data: person } = await moviesApi.person(id);
      person.also_known_as = person.also_known_as.filter((name: string) => {
        const c = name.charCodeAt(0);
        if (0x1100 <= c && c <= 0x11ff) return true;
        if (0x3130 <= c && c <= 0x318f) return true;
        if (0xac00 <= c && c <= 0xd7a3) return true;
        return false;
      });
      console.log(person.also_known_as);
      if (person.also_known_as.length > 0) {
        person.name = person.also_known_as[0];
      }
      this.setState({ person, loading: true });
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
