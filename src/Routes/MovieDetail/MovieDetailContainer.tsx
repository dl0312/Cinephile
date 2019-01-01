import React from "react";
import { MovieDetailPresenter } from "./MovieDetailPresenter";
import { moviesApi } from "../../api";

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
  history: {
    push: any;
  };
}

interface IState {
  result: any;
  credit: any;
  error: string | null;
  loading: boolean;
}

export default class MovieDetailContainer extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      result: null,
      credit: null,
      error: null,
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const {
        match: {
          params: { id }
        },
        history: { push }
      } = this.props;
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
      try {
        const { data: result } = await moviesApi.detail(parsedId);
        const { data: credit } = await moviesApi.credit(parsedId);
        this.setState({ result, credit, loading: true });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
      this.setState({ loading: true });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(this.state);
    const { result, credit, error, loading } = this.state;
    return (
      <MovieDetailPresenter
        result={result}
        credit={credit}
        error={error}
        loading={loading}
      />
    );
  }
}
