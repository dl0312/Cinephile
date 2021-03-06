import React from "react";
import { HomePresenter } from "./HomePresenter";
import { moviesApi } from "../../api";

interface IState {
  movies: any;
  error: string | null;
  loading: boolean;
}

export default class extends React.Component<{}, IState> {
  state = {
    movies: null,
    error: null,
    loading: false
  };

  async componentDidMount() {
    console.log("didmount");
    try {
      const {
        data: { results: movies }
      } = await moviesApi.popular(1);
      this.setState({
        movies: movies.slice(0, 10),
        loading: true
      });
    } catch (error) {
      this.setState({
        error: error.message
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { movies, error, loading } = this.state;
    console.log(this.state);
    return <HomePresenter movies={movies} error={error} loading={loading} />;
  }
}
